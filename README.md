# Quiz-App

Eine interaktive Quiz-Anwendung auf Basis von React und Vite. Nutzer:innen melden sich an, wählen in einer Lobby ein Spiel sowie den Schwierigkeitsgrad und beantworten anschließend Fragen. Ein JSON-Server liefert die Quizdaten, Spielstände werden lokal verwaltet.

## Funktionen

- Login mit einfachem Formular und lokaler Persistierung des Nutzers.
- Lobby mit Übersicht über verfügbare Spiele und Schwierigkeitsgrade.
- Quiz-Flow mit dynamisch geladenen Fragen unterschiedlicher Schwierigkeitsstufen.
- Live-Feedback über richtige/falsche Antworten sowie Endbildschirme für Sieg und Niederlage.
- Wiederverwendbare UI-Komponenten (Buttons, Input-Felder) und responsives Layout.

## Voraussetzungen

- Node.js (>= 20) und npm
- Optional: Figma oder ein Bildbetrachter, um die bereitgestellten Screens (`lib/figma/`) zu öffnen

## Installation

```bash
git clone <REPOSITORY_URL>
cd Quiz-App
npm install
```

## Entwicklung starten

Der Entwicklungsserver kombiniert Vite (Frontend) und einen JSON-Server für die Daten:

```bash
npm run dev
```

Anschließend:

- Frontend: http://localhost:5173
- API (json-server): http://localhost:3001 (Datenquelle: `lib/api/db.json`)

Weitere Skripte:

- `npm run build` – Produktion-Build erstellen
- `npm run preview` – gebauten Stand lokal testen
- `npm run lint` – ESLint-Prüfung ausführen

## Projektstruktur (Auszug)

```text
README.md
lib/
  api/db.json        Datenbasis für json-server
  figma/             Referenz-Designs
src/
  components/        UI-, Lobby-, Game- und Endscreen-Komponenten
  pages/             Routenseiten für Login, Lobby und Gameplay
  App.jsx            Routing & Login-Zustandsverwaltung
```

## Datenquellen

Die Fragen und Metadaten liegen in `lib/api/db.json`. Während der Entwicklung werden sie vom json-server ausgeliefert. Für ein produktives Setup sollte ein echtes Backend integriert werden.

## Lizenz

Siehe `LICENSE` für Lizenzinformationen.
