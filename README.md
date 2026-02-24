# Duct Tape or Hire a COO?
## The Operational Maturity Checklist

An open-source, stage-based operational maturity framework for startups. Know which processes to focus on at each stage of growth.

🚀 **Live Demo**: _(Will add GitHub Pages link)_

---

## What is this?

A self-assessment tool that helps startup founders and operators:
- **Identify** which operational processes matter at your current stage
- **Assess** your maturity across 5 dimensions (reliability, ownership, documentation, automation, scalability)
- **Prioritize** what to fix now vs. later
- **Track** progress as you grow

### Key Features

✅ **Stage-based filtering** - See only processes relevant to your team size  
✅ **Visual timeline** - Track where you are in your operational journey  
✅ **Smart prioritization** - Critical/Recommended/Future categorization  
✅ **Tooltips** - Understand what each score means  
✅ **Auto-save** - Your progress saves locally  
✅ **CSV export** - Share with your team or board  
✅ **Open source** - Free to use, modify, and contribute  

---

## Quick Start

### Option 1: Use it online (easiest)
Visit the live site: _(GitHub Pages link will go here)_

### Option 2: Run locally

1. **Clone the repo:**
   ```bash
   git clone https://github.com/YOUR-USERNAME/coo-maturity-checklist.git
   cd coo-maturity-checklist
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

**Note:** You need a local server because the app loads JSON files via fetch(). Simply opening `index.html` in a browser won't work due to CORS restrictions.

---

## Project Structure

```
coo-maturity-checklist/
├── index.html           # Main application
├── css/
│   └── styles.css       # Styling (will be 16-bit retro themed)
├── js/
│   └── app.js           # Application logic
├── data/
│   ├── processes.json   # All 28 processes with stage mappings
│   └── stages.json      # Stage definitions
├── docs/
│   └── (markdown versions coming soon)
└── README.md
```

---

## How it Works

### 1. Select Your Context
Choose your team size, revenue stage, and funding status using the pill selectors at the top.

### 2. See Your Stage
The timeline shows where you are in your operational journey:
- **Foundation** (0-2 people)
- **First Hires** (3-10 people)
- **Early Revenue** (11-25 people)
- **Growth** (26-50 people)
- **Scaled** (51+ people)

### 3. Score Your Processes
For each process, rate across 5 dimensions (0-4 scale):
- **Reliability**: Does it work consistently?
- **Ownership**: Who owns it?
- **Documentation**: Is it documented?
- **Automation**: Is it automated?
- **Scalability**: Can it handle growth?

### 4. Export & Share
Download a CSV to share with your team, board, or use for planning.

---

## The 5 Process Categories

1. **Strategic Operations** (Planning, communication, process improvement, org design, reporting)
2. **Financial Operations** (Cash flow, budgeting, AR, AP, admin)
3. **People Operations** (HR admin, recruiting, onboarding, performance, L&D)
4. **Legal & General Ops** (Legal, office, IT, procurement)
5. **Revenue & Customer Ops** (Sales, leads, onboarding, support, retention, analytics)

---

## Contributing

This is an open-source project and we welcome contributions!

### Ways to contribute:
- 🐛 Report bugs or issues
- 💡 Suggest new processes or improvements
- 📝 Improve documentation
- 🎨 Enhance the UI/UX
- 🌍 Translate to other languages

### To contribute:
1. Fork the repo
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## Roadmap

### Phase 1: MVP ✅ (Current)
- [x] Core functionality
- [x] Stage-based filtering
- [x] CSV export
- [x] Local storage auto-save

### Phase 2: Enhanced (Coming Soon)
- [ ] 16-bit retro game aesthetic
- [ ] Operational data layer (owners, docs, tools)
- [ ] Better "Preview Next Stage" modal
- [ ] Markdown exports per stage
- [ ] GitHub Pages deployment

### Phase 3: Advanced (Future)
- [ ] Team collaboration features
- [ ] Progress tracking over time
- [ ] Benchmarking against similar companies
- [ ] Integration with tools (Notion, Asana, etc.)

---

## License

MIT License - feel free to use this for your company, modify it, or build on it.

---

## Credits

Created by [Your Name] as an open-source tool for the startup community.

Inspired by years of operational challenges in growing startups.

---

## Questions or Feedback?

- Open an issue on GitHub
- Tweet at [@yourhandle]
- Email: your@email.com

---

**Remember**: Operational maturity is a journey, not a destination. Focus on the processes that matter most for your current stage. 🚀
