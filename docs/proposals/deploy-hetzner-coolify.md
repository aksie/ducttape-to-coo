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

Nginx runs inside a Docker container that Coolify rebuilds on every deploy. To ensure it also gets patched between deploys (e.g. a zero-day CVE), add a nightly cron that triggers a redeploy:

```bash
cat > /etc/cron.daily/coolify-redeploy <<'EOF'
#!/bin/bash
# Replace <token> and <resource-uuid> with values from Coolify → Settings → API
curl -s -X POST https://<your-coolify-domain>/api/v1/deploy \
  -H "Authorization: Bearer <token>" \
  -H "Content-Type: application/json" \
  -d '{"uuid": "<resource-uuid>", "force_rebuild": true}' \
  >> /var/log/coolify-redeploy.log 2>&1
EOF
chmod +x /etc/cron.daily/coolify-redeploy
```

> You'll fill in the `<token>` and `<resource-uuid>` values in Step 4 once you've deployed your site.

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
| Nginx container (zero-day coverage) | Coolify nightly redeploy cron | Nightly |
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
