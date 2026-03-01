# Hebamme Marina Rimmer – Moderne Landingpage (Vite)

Warmer, freundlicher One‑Pager mit Peach/Orange‑Look, runden Ecken und weichen Schatten. Technisch als Vite‑Vanilla Projekt mit Hot Reload, Production‑Build und statischem Hosting vorbereitet.

## Lokal starten

- Voraussetzungen: Node.js 18+ und npm
- Installation: `npm install`
- Entwicklung (Hot Reload): `npm run dev`
- Production Build: `npm run build` (Ausgabe in `dist/`)
- Build‑Preview: `npm run preview`

## Struktur

- `index.html` – Sections: `#home`, `#leistungen`, `#ueber-mich`, `#blog`, `#kontakt`
- `src/main.js` – Mobile Menü, Smooth Scroll, Formular‑Toast
- `src/styles.css` – Design‑Variablen, Layout, Komponenten, Responsiveness
- `public/assets/hero.svg` – Hero‑Illustration
- `public/assets/baby.svg`, `public/assets/heart.svg`, `public/assets/star.svg` – weitere SVG‑Assets

## Deployment (empfohlen: Netlify)

Die Seite ist ein statischer Build. Netlify eignet sich sehr gut (einfach & schnell). `netlify.toml` ist enthalten.

### Option A: Netlify – Drag & Drop
1. Lokal bauen: `npm run build`
2. Ordner `dist/` auf https://app.netlify.com/drop hochladen

### Option B: Netlify – Git‑Deployment
1. Repository zu GitHub/GitLab/Bitbucket pushen
2. Auf Netlify „Add new site“ → „Import an existing project“
3. Build Command: `npm run build`
4. Publish Directory: `dist`
5. (Optional) Node‑Version: 18 (in `netlify.toml` vorkonfiguriert)

Nach dem ersten Build steht eine URL bereit; Änderungen deployen sich bei jedem Push automatisch.

## Alternative Deploy‑Wege

### Vercel
1. Projekt importieren (Framework: Vite wird erkannt)
2. Build Command: `npm run build`
3. Output Directory: `dist`

### GitHub Pages (statisches Hosting)
1. Repository pushen
2. Base‑Pfad setzen (wichtig bei User/Repo‑Pages):
   - In `vite.config.js` ist `base` konfigurierbar per Env Var `VITE_BASE`.
   - Beispiel für Repo `username/hebammeMarinaRimmer`:
     - Windows (PowerShell): `$env:VITE_BASE="/hebammeMarinaRimmer/"; npm run build`
     - macOS/Linux: `VITE_BASE="/hebammeMarinaRimmer/" npm run build`
3. Deploy mit `gh-pages` oder GitHub Actions:
   - `npm i -D gh-pages`
   - `package.json` Script: `"deploy": "gh-pages -d dist"`
   - Build & Deploy: (mit gesetztem `VITE_BASE`) → `npm run build && npm run deploy`

## Barrierefreiheit & UX

- Sichtbare Fokus‑Stile, Skip‑Link, semantische Sections
- Smooth Scrolling (CSS/JS), reduzierte Animation bei `prefers-reduced-motion`

## Lizenz & Hinweis

Alle SVG‑Illustrationen sind projektlokal enthalten und frei nutzbar im Rahmen dieses Projekts.
