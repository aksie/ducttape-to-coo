# NL legal templates & legal process split (proposal)

**Status:** Route A geïmplementeerd in `processes.json` + templates (jun 2026). Wiki-inhoud Trailhead volgt na approval; 4.5/4.6 stubs tonen `stageFocus` uit JSON.  
**Doel:** in kaart brengen welke open NL-templates waar horen, en bespreken hoe we **4.1 Legal** opsplitsen nu we meer bronnen en registry-structuur hebben.

---

## Bronnen — overzicht

| Bron | Wat het is | Licentie / gebruik | Sterk in |
|------|------------|-------------------|----------|
| **[Capital Waters](https://capitalwaters.nl/investment-documents/)** | Open-source investeringsdocumenten + cap table | CC BY-ND (“comply or explain”; CW-header behouden) | Cap table, ordinary/preferred equity, CLA, EPOS, term sheet, SARs |
| **[Penrose](https://penrose.law/downloads/)** (NL) · [EN](https://penrose.law/en/downloads/) | Gratis Word/PDF modelcontracten van een NL advocatenkantoor | Geen open licentie; disclaimer: geen juridisch advies, geen aansprakelijkheid | Corporate besluiten, arbeid, DPA, NDA, M&A-starters (SPA/APA/LOI) |
| **Ligo** | Online oprichting BV + contractenbibliotheek | Betaald platform | Snelle BV-incorporatie, standaard commerciële contracten |
| **Tie Contract** | Template-pakketten voor startups | Betaald | Bundels employment + commercieel |
| **Startup-Recht / Legals** | Advieskantoren | Counsel, geen open template-bibliotheek | Maatwerk, due diligence, geschillen |

**Aanbeveling voor dit project:** Capital Waters + Penrose als **vaste externe verwijzingen** in templates en wiki (complementair: CW = investeerders/governance, Penrose = dagelijks arbeid + corporate formaliteiten + privacy/commercial starters). Ligo/Tie noemen als betaalde alternatieven; geen diepe mapping tenzij we later een “paid tier” sectie willen.

---

## Capital Waters — al in de repo

Reeds gelinkt in:

- `templates/index.html` (external resources)
- `templates/docs/company-ops-registry.md` → `01-corporate/shareholders/`
- `templates/docs/due-diligence.md`
- `wiki/processes/legal/4.1--foundation.md`, `4.1--early-revenue.md`

| Document | Registry-map | Wiki-fase (indicatief) |
|----------|--------------|------------------------|
| Cap table (Excel) | `01-corporate/shareholders/` | foundation → doorlopend |
| Ordinary share subscription + SHA | `01-corporate/shareholders/` | foundation / first angels |
| CLA / EPOS | `01-corporate/shareholders/` (+ deal map in transaction prep) | early-revenue |
| Preferred share subscription + SHA + term sheet | `01-corporate/shareholders/` | growth / priced round |
| SARs plan | `01-corporate/shareholders/` of `06-hr/` (plan vs contract) | first-hires+ als je equity incentives geeft |

---

## Penrose — template mapping

Alle downloads: [penrose.law/downloads](https://penrose.law/downloads/). Periodiek geactualiseerd; altijd laten checken door counsel vóór gebruik.

### Governance & corporate

| Penrose template | Registry-map | Opmerking |
|------------------|--------------|-----------|
| Bestuursbesluit | `01-corporate/board/` | + handleiding PDF op Penrose-site |
| Aandeelhoudersbesluit buiten vergadering | `01-corporate/shareholders/` | Naast CW SHA voor investeerder-specifieke governance |
| Oproeping AVA | `01-corporate/shareholders/` | Jaarlijkse / bijzondere AVA |
| Aandeelhoudersovereenkomst | `01-corporate/shareholders/` | **Overlap CW:** CW SHA is investeerder-gericht; Penrose SHA breder corporate — niet beide blind mixen; kies één basis + counsel |
| Leningsovereenkomst | `01-corporate/shareholders/` of `02-finance/` | Niet-converteerbare lening; anders CW CLA |

### Internal & labour

| Penrose template | Registry-map | Opmerking |
|------------------|--------------|-----------|
| Arbeidsovereenkomst onbepaalde tijd | `06-hr/employment-contracts/[name]/` + `06-hr/templates/` | Met Penrose “uitleg voor gebruik” waar beschikbaar |
| Arbeidsovereenkomst bepaalde tijd | idem | Let op kettingregeling / max duur |
| VSO (beëindiging arbeidsovereenkomst) | `06-hr/disputes-and-settlements/` | Alleen met arbeidsrecht-advies |
| Works council / OR | `07-compliance/labour-relations/` | Penrose heeft hier (nog) geen open template — eigen counsel of CAO-sector |

### Privacy & IP

| Penrose template | Registry-map | Opmerking |
|------------------|--------------|-----------|
| Verwerkersovereenkomst (DPA) | `07-compliance/gdpr/` | Processor agreements met SaaS-leveranciers |
| Geheimhoudingsovereenkomst (NDA) | `03-contracts/ndas/` | Mutual / eenzijdig — ook bij BD/partnerships |
| Exitbepalingen IT-diensten | `03-contracts/suppliers/` of `04-ip/` | SaaS/vendor exit & data portability — aanvulling op standaard SaaS-contract |

**IP assignment:** Penrose employment templates bevatten vaak IE-bepalingen, maar **geen** losse IP-assignment of founder IP deed — die blijven counsel-first of CW ordinary-share context. Vul aan met expliciete IP-clausules in freelance templates (`06-hr/freelance-contracts/`).

### Commercial & transactions (grens governance ↔ deals)

| Penrose template | Registry-map | Opmerking |
|------------------|--------------|-----------|
| Letter of Intent (LOI) | `08-transaction-prep/` (actieve deal) | M&A / investering — niet day-to-day |
| Aandelenkoopovereenkomst (SPA) | `08-transaction-prep/` | Volwassen transactie |
| Garanties bij SPA | `08-transaction-prep/` | DD-bijlage |
| Activa/passiva koopovereenkomst (APA) | `08-transaction-prep/` | Asset deal |

Deze horen **niet** in de drie categorieën hieronder als volwaardige vierde wiki-as, maar wel in registry `03-contracts/` (lopende commercie) vs `08-transaction-prep/` (deal-only).

---

## Voorgestelde opsplitsing 4.1 Legal

Huidige **4.1** is één proces met alles: employment, commercial, IP, privacy, shareholders, insurance. De **Company Ops Registry** (`01`–`07`) en due diligence zijn al fijner gesneden. Wiki en diagnostic scoren nog op één 4.1-cel — daardoor voelt “legal” te groot en te vaag.

### Optie A — drie sub-processen (jouw richting)

| Nieuw ID (voorstel) | Titel | Registry | Penrose | Capital Waters |
|---------------------|-------|----------|---------|----------------|
| **4.1** (hernoemd) | **Governance & corporate** | `01-corporate/` | Bestuurs-/aandeelhoudersbesluiten, AVA, SHA (keuze CW vs Penrose) | Cap table, equity, CLA/EPOS, preferred, term sheet |
| **4.5** (nieuw) | **Internal & labour** | `06-hr/`, `07-compliance/labour-relations/` | Employment, VSO | SARs (optioneel) |
| **4.6** (nieuw) | **Privacy & IP** | `04-ip/`, `07-compliance/gdpr/`, delen van `03-contracts/ndas/` | DPA, NDA, IT-exit | — |

**Wat blijft hangen buiten deze drie?**

- **Commerciële contracten** (customer SaaS, suppliers, partnerships) — nu sterk in 4.1 description + `03-contracts/`. Voorstel: **blijft onder 4.1 Governance** als “commercial contracting” sub-sectie, *of* later **4.7 Commercial contracts** als volume op early-revenue/growth dat rechtvaardigt.
- **Insurance** (`05-insurance/`) — nu in 4.1 description; kan bij Governance blijven (D&O na funding) of bij Financial Ops 2.x — geen aparte legal-as nodig.
- **Compliance beyond GDPR** (permits, subsidies, sector) — deels `07-compliance/`; bij **4.6** als “privacy & regulatory” of aparte **4.8 Compliance** alleen als je SOC2/ISO/sector serieus als eigen diagnostic-as wilt (nu: growth/scaled in 4.1 stageFocus).

**Impact:** `processes.json` krijgt 2 nieuwe entries; bestaande `4.1` wiki-pagina’s splitsen per fase (veel werk); diagnostic toont 3 scores i.p.v. 1 — duidelijker waar teams achterlopen.

### Optie B — één 4.1, drie wiki-portalen (lichter)

- Diagnostic blijft **één** 4.1 score.
- Wiki krijgt `legal/governance/`, `legal/internal-labour/`, `legal/privacy-ip/` als **inhoudsportalen** die naar dezelfde process_id verwijzen.
- Templates/registry koppelen via tags in plaats van nieuwe process IDs.

**Voordeel:** geen schema-wijziging in app. **Nadeel:** diagnostic blijft grof.

### Optie C — vier categorieën

Jouw drie + expliciet **Commercial & vendor contracts** (koppeling **4.4 Vendor** is procurement, niet contract drafting).

Alleen zinvol als early-revenue teams consequent “legal achterstand” op SaaS/NDA zien gescheiden van governance.

---

## Aanbeveling (voor discussie)

1. **Templates:** Penrose toevoegen aan `templates/index.html` external resources (tweede blok naast Capital Waters), met korte tabel “waar file je het” → link naar dit doc of registry secties.
2. **Wiki split:** **Optie A** als Trailhead OK geeft op duidelijkere diagnostic — start met **foundation / first-hires / early-revenue** alleen voor de drie nieuwe assen; laat 4.2–4.4 ongemoeid.
3. **Overlap CW ↔ Penrose SHA:** in wiki expliciet: *kies één basis voor shareholder governance*; CW bij extern geld; Penrose SHA als algemeen corporate starter zonder investeerder-pakket.
4. **Commercial:** niet nu als vierde proces-ID; wel in 4.1 (Governance) stageFocus op early-revenue: “SaaS + NDA + contractor template” met Penrose NDA + employment/freelance uit 4.5.

---

## Besluiten (jun 2026)

- [x] **Route A** — drie processen in diagnostic: **4.1 Governance**, **4.5 Internal & Labour**, **4.6 Privacy & IP**
- [x] **Commercial** blijft in 4.1; later eventueel eigen ID bij early-revenue/growth
- [x] **Penrose + Capital Waters** in `templates/index.html` + registry-links
- [x] **OR / vertrouwenspersoon** onder **3.1 HR Administration**; 4.5 en registry verwijzen door
- [ ] Trailhead wiki-inhoud voor 4.5/4.6 (en hersplitsing bestaande 4.1-pagina's) na approval
- [ ] Penrose SHA vs CW SHA in praktijk valideren met Trailhead

---

## Nog open

1. `wiki/processes/legal/4.5--*` en `4.6--*` — volledige pagina's na Trailhead approval (nu: JSON `stageFocus` + stage portals)
2. Due diligence checklist — Penrose per employment/DPA/board item (optioneel)
3. Commercieel als **4.7** — pas als diagnostic daar structureel achterstand toont
