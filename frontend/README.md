# ValeCare Frontend

React + Vite Progressive Web App (PWA) for ValeCare — a privacy-first SRHR information and service-finder platform for adolescent girls and young women (AGYW) in Nairobi.

## Overview

This is the user-facing client for ValeCare. It talks to the [Django REST Framework backend](../backend/README.md) and is built as an installable, mobile-first PWA so it works well on the low-end Android devices common among the target users, with minimal data usage and a discreet, non-stigmatizing interface.

## Key Features

- **No login required.** The app works immediately using an anonymous device token issued on first launch — no username or password.
- **Optional account creation.** Users can register to keep bookmarks, reading progress, and tracker history across sessions and devices. Guest sessions leave nothing behind when closed.
- **Anonymous Q&A / support access**, tied to the `support` and `triage` backend apps.
- **Menstrual cycle and pregnancy tracker**, tied to the `tracker` backend app (registered accounts only).
- **Verified provider directory & search**, with filtering by gender, faith-sensitivity, distance, and rating.
- **Appointment booking**, tied to the `appointments` backend app.
- **Emergency information**, quick access to urgent resources via the `emergency` backend app.
- **Two-step account deletion** for users who need to remove their data.
- **Discreet, mobile-first design** — no content or notifications that would reveal app purpose if seen by others.

## Tech Stack

- **Framework:** React (Vite)
- **Build tool:** Vite, with HMR (Hot Module Replacement)
- **Linting:** Oxlint
- **Plugin:** [`@vitejs/plugin-react`](https://github.com/vitejs/vite-plugin-react) or [`@vitejs/plugin-react-swc`](https://github.com/vitejs/vite-plugin-react-swc) — confirm which is in use via `vite.config.js`

## Setup & Installation

### 1. Clone the repository

```bash
git clone https://github.com/Research-Code-Resolve/Inaccessible-SRHR-Services-For-Adolescent-Girls-and-Young-Women.git
cd Inaccessible-SRHR-Services-For-Adolescent-Girls-and-Young-Women/frontend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in `frontend/` with the backend API base URL:

```
VITE_API_BASE_URL=http://127.0.0.1:8000
```
*(Confirm the exact variable name against your codebase — Vite requires the `VITE_` prefix for any env variable exposed to client code.)*

### 4. Start the development server

```bash
npm run dev
```

The app will be available at `http://localhost:5173` by default.

### 5. Build for production

```bash
npm run build
```

Output is generated in the `dist/` folder.

## Project Structure

```
frontend/
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── ModuleBar/
│   ├── Pages/
│   ├── assets/
│   ├── components/
│   ├── context/
│   ├── layout/
│   ├── styles/
│   ├── theme/
│   ├── App.css
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│   └── ValecareFrontendOverview.md
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

See `src/ValecareFrontendOverview.md` for a more detailed breakdown of the frontend architecture.

## How It Connects to the Backend

The frontend communicates with the Django REST Framework API documented in [`backend/README.md`](../backend/README.md). On first load, the app requests an anonymous device token, which is then sent with subsequent requests to identify the session without requiring personal information. Registered-user flows exchange this for authenticated requests once a user opts to create an account.

## Notes

- This app does not currently use the React Compiler, due to its dev/build performance cost. See [the React Compiler docs](https://react.dev/learn/react-compiler) if this changes.
- For production applications, TypeScript with type-aware lint rules is recommended; see the [Vite TS template](https://vite.dev) for integration guidance.