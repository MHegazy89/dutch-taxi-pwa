# CBR Taxi Theory Exam PWA (TVT)

A mobile-first Progressive Web App (Next.js 13, TypeScript, Tailwind CSS) engineered to help A0-level Dutch language learners pass the official **CBR Taxi Vakbekwaamheid theorie-examen (TVT)**.

---

## Key Features

1. **A0-Dutch Friendly Language Support**
   - **`SentenceDeconstructor`**: Colour-coded syntactic breakdown of exam stems (`[Actor]`, `[Obligation]`, `[Condition]`, `[Target]`) with interactive role inspection.
   - **`CompoundSlicer`**: Decomposition of complex Dutch legal compounds (e.g. `Arbeids|tijden|besluit`, `Boord|computer|taxi`) into readable base words.
   - **Tap-to-reveal English Translations** on all practice questions.

2. **Spaced Repetition System (SRS)**
   - Custom **SM-2 algorithm** (`src/lib/srs.ts`) for continuous retention of legal terminology, regulations, and accident protocols.
   - Offline client-side persistence via SQLite (`sql.js`) backed by **IndexedDB**.

3. **Official CBR Exam Simulator**
   - Accurate 40-question exam format (30 individual questions + 2 case studies with 5 questions each).
   - Strict 60-minute countdown timer with color-coded urgency indicators.
   - Real-time scoring against the CBR pass threshold (32 / 40 points, 80%).
   - In-depth post-mortem screen breaking down performance by domain with comprehensive legal explanations.

4. **All 7 Official CBR Exam Domains Covered**
   - **Gordelplicht & Veiligheid** (Seatbelts & passenger liabilities)
   - **BCT & CDT Boordcomputer** (Taxi computers & data retention)
   - **Arbeidstijdenbesluit vervoer (ATBv)** (Driving hours, pauses & rest rules)
   - **PAMAN Ongevallenprotocol** (Accident emergency steps)
   - **Soorten Vervoer & Tarieven** (Street taxi vs contract, maximum tariffs, flat rates)
   - **Klantgerichtheid & De-escalatie** (Customer service, guide dogs, conflict de-escalation)
   - **CBR Praktijk Casus** (Real-world multi-part situational case studies)

---

## Technical Stack

- **Framework**: Next.js 13 App Router, React 18, TypeScript
- **Styling**: Tailwind CSS + shadcn/ui primitives + Dutch Orange (`#FF6B00`) dark theme
- **Client Database**: `sql.js` (WebAssembly SQLite) + `idb` IndexedDB persistence
- **PWA**: `@ducanh2912/next-pwa`
- **ETL**: Python 3.11+ extract & load pipeline generating `public/data.db`

---

## Getting Started

### 1. Prerequisites
- Node.js 20+
- Python 3.11+

### 2. Installation
```bash
cd "/Users/hegazy/Desktop/NUVANDA/Taxi exams/dutch-taxi-pwa"
npm install
```

### 3. Generate Seed Database (ETL)
```bash
python3 scripts/seed-db.py
```
This builds `public/data.db` with all 40 questions, options, vocabulary terms, grammar markers, and flashcards.

### 4. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) on your mobile browser or desktop.

---

## Testing & Validation

```bash
# Run unit tests (Vitest)
npm run test

# Type check
npm run typecheck

# Lint
npm run lint

# Build production bundle
npm run build
```

---

## Vercel Deployment

The application is fully pre-configured for Vercel deployment with edge headers caching `public/data.db` and WebAssembly binaries:
```bash
npx vercel --prod
```
