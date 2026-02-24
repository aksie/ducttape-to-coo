# Duct Tape or Hire a COO?
## The Operational Denial Checklist

An open-source, stage-based operational maturity framework for startups. Know which processes to focus on at each stage of growth — and when to stop duct-taping and actually fix things.

🚀 **Live Demo**: [aksie.github.io/ducttape-to-coo](https://aksie.github.io/ducttape-to-coo)

---

## What is this?

A self-assessment tool that helps startup founders and operators:
- **Identify** which operational processes matter at your current stage
- **Assess** maturity across 5 dimensions (reliability, ownership, documentation, automation, scalability)
- **Prioritize** what to fix now vs. later
- **Track** progress as you grow

---

## Key Features

- **Stage-based filtering** — See only the processes relevant to your team size
- **Stage-specific guidance** — Each process shows what "good" looks like at your stage
- **Visual timeline** — Track where you are in your operational journey
- **Critical / Recommended / Coming Later** — Smart prioritization per stage
- **Tooltips** — Hover any score or question mark to understand what you're rating
- **Auto-save** — Progress saves locally in your browser
- **CSV export** — Share with your team or board
- **Open source** — Free to use, modify, and contribute (AGPLv3)

---

## Quick Start

### Option 1: Use it online
Visit: [aksie.github.io/ducttape-to-coo](https://aksie.github.io/ducttape-to-coo)

### Option 2: Run locally

1. **Clone the repo:**
   ```bash
   git clone https://github.com/aksie/ducttape-to-coo.git
   cd ducttape-to-coo
   ```

2. **Start a local server:**

   Using Python:
   ```bash
   python3 -m http.server 8000
   ```

   Or using Node.js:
   ```bash
   npx http-server
   ```

3. **Open in browser:**
   ```
   http://localhost:8000
   ```

> **Note:** A local server is required because the app loads JSON data via fetch(). Opening `index.html` directly will not work due to CORS restrictions.

---

## Project Structure

```
ducttape-to-coo/
├── index.html           # Main application
├── css/
│   └── styles.css       # Dark mode developer-style UI
├── js/
│   └── app.js           # Application logic
├── data/
│   ├── processes.json   # All processes with stage mappings and guidance
│   └── stages.json      # Stage definitions, employee ranges, revenue and funding options
└── README.md
```

---

## How it Works

### 1. Select Your Context
Choose your team size, revenue stage, and funding status using the selectors at the top. The app determines your current stage automatically.

### 2. See Your Stage
The timeline shows where you are in your operational journey:

| Stage | Team size | Focus |
|---|---|---|
| **Foundation** | 0–2 people | Don't die, get something out the door |
| **First Hires** | 3–10 people | Hire well, don't run out of money |
| **Early Revenue** | 11–25 people | Repeatable processes, customer success |
| **Growth** | 26–50 people | Scale systems, departmental structure |
| **Scaled** | 51+ people | Professional operations, efficiency |

### 3. Read the Stage Guidance
Each process shows a **"For your stage:"** block with specific, actionable advice for where you are now — not generic best practices written for a 500-person company.

### 4. Score Your Processes
Rate each process across 5 dimensions (0–4):

| Dimension | What you're rating |
|---|---|
| **Reliability** | Does it work consistently? |
| **Ownership** | Is there a clear owner? |
| **Documentation** | Is it written down somewhere useful? |
| **Automation** | Is it tooled and automated? |
| **Scalability** | Can it handle growth without breaking? |

### 5. Export & Share
Download a CSV to share with your team, board, or use for planning.

---

## The 5 Process Categories

1. **Strategic Operations** — Planning & goals, internal communication, process improvement, org design, data & reporting
2. **Financial Operations** — Cash flow, financial planning & budgeting, accounts receivable, accounts payable, financial administration
3. **People Operations** — HR administration, recruitment, onboarding, offboarding, performance management, employee satisfaction, learning & development
4. **Legal & Other Ops** — Legal & compliance, office & facilities, IT administration, vendor & procurement
5. **Revenue & Customer Operations** — Sales operations, lead management, customer onboarding, customer health & support, renewal & retention, service delivery, customer data & analytics

---

## Contributing

This is an open-source project and contributions are welcome.

**Ways to contribute:**
- Report bugs or suggest improvements via GitHub Issues
- Add or refine stage-specific guidance in `data/processes.json`
- Improve the scoring framework or stage definitions
- Translate to other languages

**To contribute:**
1. Fork the repo
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes
4. Push and open a Pull Request

---

## Roadmap

### Done
- [x] Stage-based process filtering
- [x] 5-dimension scoring with tooltips
- [x] Stage-specific guidance per process
- [x] Dark mode developer UI
- [x] CSV export
- [x] Auto-save to localStorage
- [x] GitHub Pages deployment

### In Progress
- [ ] Stage focus guidance for all processes
- [ ] Operational data layer (owner name, documentation links, tool names)

### Planned
- [ ] Preview Next Stage modal
- [ ] Markdown exports per stage
- [ ] Progress tracking over time
- [ ] Team collaboration features

---

## License

[GNU Affero General Public License v3.0 (AGPLv3)](https://www.gnu.org/licenses/agpl-3.0.html)

Free to use and modify. If you run a modified version as a service, you must publish the source code.

---

## Credits

Created as an open-source tool for the startup community.

Inspired by the Scaling Up / Rockefeller Habits framework and years of operational challenges in growing startups.
