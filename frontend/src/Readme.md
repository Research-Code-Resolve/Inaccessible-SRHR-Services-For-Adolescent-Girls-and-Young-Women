# ValeCare Web

A React single-page application providing adolescent girls and young women with trusted sexual and reproductive health information, education, and digital support services — pregnancy & maternal care, menstrual health, family planning, STI prevention, mental health, nutrition, and more. Supports both guest browsing and authenticated accounts.

---

## Research Basis

ValeCare's focus on adolescent girls and young women (AGYW) is grounded in a related research study, *Investigating Cultural Factors Influencing SRHR Service Access Among Adolescent Girls and Young Women (Aged 10–24) in Nairobi, Kenya*. The study examines how cultural factors — gender norms, religious beliefs, stigma, and parental influence — shape whether AGYW seek out sexual and reproductive health information and services, and how the 2025 closure of donor-funded programs like DREAMS has widened gaps in access to that information across Nairobi's communities.

That research motivates several of ValeCare's design choices: framing content around trusted, non-judgmental information delivery; treating confidentiality as a first-class concern (see the "Confidential & secure" messaging on the dashboard); and covering the same core topic areas the study identifies as high-need (menstrual health, family planning, STI prevention, mental health). See the full paper (`SRHR_Research_Paper_-_Revised.docx`) for the underlying data and citations.

---

## Features

- **Dashboard** — health-center search, "Browse by topic" modules (Menstrual Health, Pregnancy & Maternal Care, Family Planning, STI Prevention & Care, Mental Health, Nutrition, Adolescence & Puberty, Services)
- **Responsive shell** — collapsible sidebar navigation, sticky header, mobile drawer nav, footer
- **Auth-aware UI** — header and sidebar adapt based on `isAuthenticated` (Sign in / Create Account vs. Profile, Settings, Notifications, Logout)
- **Floating assistant** widget on the dashboard

---

## Tech Stack

- **React** — functional components + hooks
- **React Router** (`react-router-dom`) — client-side routing (`BrowserRouter`, `Routes`, `Route`, `NavLink`, `Link`, `useNavigate`, `useLocation`)
- **Vite** — build tool / dev server
- **React Icons** (`react-icons`) — iconography
- **Plain CSS** — no CSS-in-JS or utility framework; one stylesheet per component
- **React Context API** — auth state (`AuthContext`)

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (LTS recommended)
- npm

### Installation

```bash
git clone <repo-url>
cd valecare-web
npm install
```

### Running locally

```bash
npm run dev
```

The app will be available at:

```
http://localhost:5173
```


---

## Project Structure

```
src/
├── main.jsx                # Entry point
├── App.jsx                 # Active route tree
├── context/
│   └── AuthContext.jsx     # Auth state (login, register, logout, isAuthenticated)
├── components/
│   ├── MainLayout/          # App shell layout
│   ├── SideBar/              # Sidebar.jsx + sidebarData.js (menuItems: title, icon, path, optional children/authOnly)
│   ├── Header/                 # Public site header
│   ├── Footer/, Logo/, PrivacyCard/, SearchBar/
│   ├── FloatingAssistant/    # Rendered on the dashboard
│   └── common/
│       └── RequireAuth.jsx  # Route guard for protected pages
└── pages/
    ├── Splash/, Language/, Welcome/, Register/, SignIn/
    ├── Dashboard/, Learn/
    ├── HealthServices/, MenstrualHealth/
    ├── Consultation/, Trackers/
    ├── PregnancyMaternalCare/
    ├── FamilyPlanning/, STIPreventionCare/
    ├── MentalHealth/, Nutrition/, AdolescencePuberty/
    ├── Notifications/, Profile/, Settings/, Logout/
    ├── Contact/, FAQ/, Services/
```

Each page/component lives in its own folder with a matching `.jsx` and `.css` file (e.g. `Settings/Settings.jsx` + `Settings/Settings.css`).

---

## Authentication

Auth is currently local/mocked — there is no real backend yet. Signing in or registering stores `{ username }` in `localStorage` under the key `valecare_user`, and this is rehydrated on page load. Routes wrapped in `RequireAuth` (`/notifications`, `/profile`, `/settings`, `/trackers/*`) redirect guests to `/signin`. `Sidebar.jsx` also hides Notifications/Profile/Settings/Logout from guests via an `authOnly` flag in `sidebarData.js`.

---

## Environment Variables

None are currently required — no `.env` file exists yet. If a real API is introduced, Vite requires the `VITE_` prefix for any variable exposed to client code, e.g.:

```
VITE_API_BASE_URL=
```

---

## API Integration

No live API integration exists yet. `SignIn.jsx` and `Register.jsx` simulate a network request with a timed delay before updating local auth state — there's no password verification, server session, or real user database. The dashboard's "Find the nearest health center" input and the Notifications list are similarly unwired/placeholder for now.

---

## Known Limitations

- No real backend/API — sign in and registration accept any username/password combination.
- Dashboard search input has no submit handler or backend wiring yet.
- No automated tests.
- No production build or deployment pipeline configured yet.
- Account dropdown / mobile drawer interactions are styled but haven't been functionally tested end-to-end.

See `ValeCare-Frontend-Documentation.md` for a fuller breakdown of architecture, API integration status, and known issues.

---

## License

TODO — add license information.