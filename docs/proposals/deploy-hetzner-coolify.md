# Deploy ducttape-to-coo on Hetzner + Coolify

Deploy your DNS site on a European VPS with auto-deploy from GitHub, managed nginx, and automatic SSL — without touching a terminal after setup.

---

## Prerequisites

- A **GitHub** account with your repo pushed to it
- A **domain** you control (DNS managed somewhere: TransIP, Cloudflare, etc.)
- A payment method for Hetzner (credit card, PayPal, or iDEAL)

---

## Step 1: Provision a Hetzner VPS

1. Go to [Hetzner Cloud Console](https://console.hetzner.cloud) and create a project
2. Click **"Add Server"**
3. Choose:
   - **Location**: `Falkenstein` or `Nürnberg` (Germany, GDPR-safe)
   - **Image**: `Ubuntu 24.04`
   - **Type**: `CX22` (2 vCPU, 4 GB RAM, €4/mo) — more than enough for a static site
   - **SSH Keys**: Add your public SSH key (generate one if needed: `ssh-keygen -t ed25519`)
   - **Firewall**: Create a new firewall opening ports `22`, `80`, `443`
4. Under **"Backups"**: enable automatic backups (€0.84/mo — worth it)
5. Click **"Create & Buy"** — the server boots in ~30 seconds
6. Note the server's **IPv4 address**

---

## Step 2: Install Coolify

SSH into your server from your local machine:

```bash
ssh root@<server-ip>
```

Then run the Coolify installer:

```bash
curl -fsSL https://cdn.coollabs.io/coolify/install.sh | bash
```

This takes 2–3 minutes. When it finishes, it prints a URL like:

```
http://<server-ip>:8000
```

**Before leaving the terminal, do the one-time security setup:**

### Enable automatic OS security updates

Ubuntu ships with `unattended-upgrades` — this keeps the OS, Docker engine, OpenSSL, and all apt-installed packages patched automatically, including security fixes. Enable it now so you never have to think about it again:

```bash
apt install -y unattended-upgrades
dpkg-reconfigure --priority=low unattended-upgrades
```

Then configure auto-reboot for kernel patches (at 03:00 when no one is using the site):

```bash
cat >> /etc/apt/apt.conf.d/50unattended-upgrades <<'EOF'
Unattended-Upgrade::Automatic-Reboot "true";
Unattended-Upgrade::Automatic-Reboot-Time "03:00";
EOF
```

This runs daily. You never need to SSH in for OS or Docker security patches.

### Keep Coolify itself up to date

Coolify updates are separate from apt packages. Add a weekly cron to auto-update it:

```bash
cat > /etc/cron.weekly/coolify-update <<'EOF'
#!/bin/bash
curl -fsSL https://cdn.coollabs.io/coolify/install.sh | bash >> /var/log/coolify-update.log 2>&1
EOF
chmod +x /etc/cron.weekly/coolify-update
```

### Keep nginx up to date

Nginx runs inside a Docker container that Coolify rebuilds on every deploy. To also catch zero-day CVEs between deploys, set up a smart hourly check: it queries the Docker Hub registry API for the current `nginx:alpine` digest, compares it to a stored value on the server, and only triggers a Coolify redeploy if the image actually changed. No unnecessary rebuilds.

First, install `jq` (JSON parser used by the script):

```bash
apt install -y jq
```

Then create the check script:

```bash
cat > /usr/local/bin/check-nginx-update.sh <<'EOF'
#!/bin/bash
DIGEST_FILE="/var/lib/nginx-update/last-digest"
LOG_FILE="/var/log/nginx-update-check.log"
COOLIFY_TOKEN="<your-api-token>"
COOLIFY_RESOURCE_UUID="<your-resource-uuid>"
COOLIFY_URL="https://<your-coolify-domain>"

mkdir -p "$(dirname "$DIGEST_FILE")"

# Fetch the current nginx:alpine digest from Docker Hub (manifest only — no image download)
TOKEN=$(curl -sf "https://auth.docker.io/token?service=registry.docker.io&scope=repository:library/nginx:pull" | jq -r .token)
REMOTE_DIGEST=$(curl -sf \
  -H "Authorization: Bearer $TOKEN" \
  -H "Accept: application/vnd.docker.distribution.manifest.list.v2+json" \
  "https://registry-1.docker.io/v2/library/nginx/manifests/alpine" \
  | jq -r '.manifests[] | select(.platform.os == "linux" and .platform.architecture == "amd64") | .digest')

if [ -z "$REMOTE_DIGEST" ]; then
    echo "$(date): ERROR — could not fetch remote digest" >> "$LOG_FILE"
    exit 1
fi

# First run: store baseline digest and exit without deploying
if [ ! -f "$DIGEST_FILE" ]; then
    echo "$(date): Initialised digest baseline: $REMOTE_DIGEST" >> "$LOG_FILE"
    echo "$REMOTE_DIGEST" > "$DIGEST_FILE"
    exit 0
fi

STORED_DIGEST=$(cat "$DIGEST_FILE")

if [ "$REMOTE_DIGEST" = "$STORED_DIGEST" ]; then
    exit 0  # No change, nothing to do
fi

# New version detected — trigger Coolify redeploy
echo "$(date): New nginx:alpine detected — triggering redeploy" >> "$LOG_FILE"

curl -sf -X POST "$COOLIFY_URL/api/v1/deploy" \
  -H "Authorization: Bearer $COOLIFY_TOKEN" \
  -H "Content-Type: application/json" \
  -d "{\"uuid\": \"$COOLIFY_RESOURCE_UUID\", \"force_rebuild\": true}"

if [ $? -eq 0 ]; then
    echo "$REMOTE_DIGEST" > "$DIGEST_FILE"
    echo "$(date): Redeploy triggered successfully" >> "$LOG_FILE"
else
    echo "$(date): ERROR — redeploy failed; will retry next hour" >> "$LOG_FILE"
fi
EOF
chmod +x /usr/local/bin/check-nginx-update.sh
```

Add the hourly cron:

```bash
echo "0 * * * * root /usr/local/bin/check-nginx-update.sh" > /etc/cron.d/nginx-update-check
```

> You'll fill in `<your-api-token>`, `<your-resource-uuid>`, and `<your-coolify-domain>` in Step 4 once you've deployed your site. The script is safe to leave with placeholders until then — it will error-log silently and retry.

Open the Coolify URL in your browser.

---

## Step 3: Configure Coolify

1. **Create an admin account** — choose an email and password
2. **Set your server's IP/domain** — use the server's IPv4 address for now
3. **Configure automatic SSL** — Coolify uses Let's Encrypt. You'll set up your domain later
4. **Connect your GitHub account** — in Coolify, go to `Sources` → `Add Source` → `GitHub`. Authorize Coolify to access your repositories

---

## Step 4: Deploy your site

1. In Coolify, click **"New Resource"** → **"Application"**
2. Choose your **GitHub Repository** (`ducttape-to-coo`)
3. Fill in:
   - **Build Pack**: `Dockerfile` — but we'll use **Nixpacks** or **Static** instead
   - Actually for a pure static site: set **Build Pack** to **"Static"** — Coolify will serve the files directly without a build step
   - **Domains**: leave empty for now (you'll add it later)
   - **Publish Directory**: `/`
4. Click **"Deploy"**

Coolify pulls the repo and serves the files behind its built-in nginx proxy. It auto-restarts if the server reboots, auto-renews SSL, and can auto-deploy on every `git push` to your main branch.

> **If the Static build pack doesn't serve correctly**, switch to **Nixpacks** with a one-line nginx Dockerfile (see troubleshooting below).

---

## Step 5: Point your domain

1. Go to your DNS provider's control panel (TransIP, Cloudflare, etc.)
2. Create an **A record** pointing `yourdomain.com` (and `www.yourdomain.com`) to your Hetzner server's IPv4 address
   ```
   yourdomain.com     A     <server-ip>
   www.yourdomain.com A     <server-ip>
   ```
3. In Coolify, edit your resource → **Domains** → add `yourdomain.com` and `www.yourdomain.com`
4. Coolify automatically requests Let's Encrypt SSL certificates for both
5. Wait up to 5 minutes for DNS to propagate

---

## Step 6: Enable auto-deploy

1. In Coolify, go to your resource → **Deploy** settings
2. Toggle **"Auto Deploy"** on
3. Now every `git push` to your main branch triggers an automatic deployment

---

## What runs automatically after setup

Once the one-time setup in Step 2 is done, nothing needs manual attention:

| What | How | When |
|---|---|---|
| Ubuntu OS + Docker engine security patches | `unattended-upgrades` | Daily |
| Auto-reboot after kernel update | `unattended-upgrades` config | 03:00 if needed |
| Nginx container (zero-day coverage) | Hourly digest check → redeploy only if changed | Hourly, on change |
| Coolify itself | Weekly cron | Weekly |
| SSL certificates | Let's Encrypt auto-renewal (Coolify) | Automatic |
| Site deploys | `git push` triggers auto-deploy | Per push |
| Server backups | Hetzner automatic backups | Daily |

You should not need to SSH into the server at all under normal operation.

---

## Cost breakdown

| Item | Cost |
|------|------|
| Hetzner CX22 VPS | €4.18/mo |
| Domain (your own) | ~€10/yr |
| **Total** | **~€5/mo** |

---

## Troubleshooting

### Static build pack doesn't serve correctly
Create a file called `Dockerfile` in the repo root:

```dockerfile
FROM nginx:alpine
COPY . /usr/share/nginx/html
```

Then tell Coolify to use **Build Pack: Dockerfile**. This puts an nginx in front of your static files — works identically but more predictable.

### Site doesn't load at the domain
- Check DNS propagation: `dig yourdomain.com +short`
- Check Coolify's logs for the resource — the `Deployment Logs` tab shows build and nginx output
- Make sure port `80` and `443` are open in Hetzner's firewall

### Want to use a Dockerfile approach instead
Coolify also supports **GitHub Actions** or **push-to-deploy via webhook** if you prefer more control. See [Coolify docs](https://coolify.io/docs).
