# ValeCare Web — Frontend Documentation

## 1. Project Overview

**ValeCare** is a React single-page application providing adolescent girls and young women with trusted sexual and reproductive health information and services. Per copy found in the dashboard and footer, its stated purpose is:

> "Empowering adolescent girls and young women with trusted sexual and reproductive healthcare, education, and digital support."

Core areas include:

- Menstrual Health
- Pregnancy & Maternal Care (learning content, child care guidance, pregnancy tracker)
- Family Planning education
- STI Prevention & Care
- Mental Health resources and support
- Nutrition and Adolescence/Puberty learning modules
- Health Services directory and Consultations (video / in-person / support groups)
- User account features: Sign In, Register, Profile, Settings, Notifications, Logout

The dashboard also includes a health-center locator search bar and a confidentiality/security assurance badge, reflecting the sensitive nature of the content.

The app supports both **guest access** (browse most content without an account) and **authenticated access** (required for Trackers, Notifications, Profile, and Settings).

---

## 2. Tech Stack

Layer -> Technology 

UI library -> React (functional components, hooks) 
Routing -> `react-router-dom` (`BrowserRouter`, `Routes`, `Route`, `NavLink`, `Link`, `useNavigate`, `useLocation`)
Build tool / dev server -> Vite — dev server observed on `localhost:5173` 
Icons -> `react-icons` (`react-icons/fa`, `react-icons/fa6`)
Styling -> Plain CSS (no CSS-in-JS or utility framework) — one stylesheet per component (e.g. `Settings.css`, `Header.css`, `Sidebar.css`)
State management -> React Context API (`AuthContext`, providing `user`, `isAuthenticated`, `login`, `register`, `logout`) + local component state (`useState`)
| Persistence -> Browser `localStorage` (auth session only, key: `valecare_user`)
| Fonts | Google Fonts — Fraunces (display) and Inter (body) |

**Not currently in use / not observed:** Redux or other global state libraries, TypeScript, a CSS framework (Tailwind, MUI, etc.), a testing framework (Jest, React Testing Library, Cypress), or a real backend/API client (e.g. Axios).

**[TO CONFIRM]:** Exact build tooling confirmation (Vite assumed from dev server output), package manager (npm assumed), Node version, linting/formatting setup (ESLint/Prettier).

---

## 3. Project Structure

```
**Notes:**
- General convention observed: each page/component lives in its own folder with a matching `.jsx` file and its own dedicated `.css` file.
- `sidebarData.js` exports a `menuItems` array; each item has `id`, `title`, `icon`, `path` (or `children` for expandable sections), and an optional `authOnly` flag used to hide Notifications/Profile/Settings/Logout from guests.

---

## 4. Setup

```bash
# Install dependencies
npm install

# Start the dev server (Vite)
npm run dev
```

Observed dev server output (one session):
```
VITE v8.2.1  ready
➜  Local:   http://localhost:5173/
➜  Network: use --host to expose
```


**TODO / Not yet configured:**
- Production build process — not exercised in either review.
- Linting/formatting scripts (ESLint/Prettier config) — not reviewed.
- No `.env` / `.env.example` file exists yet (see Environment Variables below).

---

## 5. Routing & Auth Architecture

- **Active route tree:** `App.jsx`, rendered from `main.jsx`. Wraps the app in `<AuthProvider>` and `<BrowserRouter>`.
- Public routes (`/`, `/signin`, `/register`) are unguarded.
- Most content routes (Dashboard, Learn, Health Services, Pregnancy & Maternal Care, etc.) are also currently unguarded — accessible to guests.
- Protected routes (`/trackers`, `/trackers/menstrual`, `/trackers/pregnancy`, `/notifications`, `/profile`, `/settings`) are wrapped in `<RequireAuth>`, which redirects to `/signin` if `isAuthenticated` is `false`.
- Unmatched routes (`*`) redirect to `/`.

**Auth flow:**
1. `AuthContext` holds `user` state and derives `isAuthenticated = !!user`.
2. On mount, it rehydrates `user` from `localStorage` (`valecare_user`) if present.
3. `login(username)` / `register(username)` set `user` and persist it to `localStorage`.
4. `logout()` clears both.
5. `Sidebar.jsx` filters its menu items via `isAuthenticated` — Notifications, Profile, Settings, and Logout are marked `authOnly: true` in `sidebarData.js` and hidden from guests.

---

## 6. Environment Variables

**None are currently defined or consumed.** All data (auth "login," page content) is local/mocked — no `.env` file, no `import.meta.env.*` usage, no API base URL configuration.

If/when a real backend is introduced, recommended additions (Vite requires the `VITE_` prefix for client-exposed variables):
```
VITE_API_BASE_URL=
VITE_AUTH_TOKEN_STORAGE_KEY=
```

`VITE_API_BASE_URL` | Base URL for backend API | Once backend exists 
`VITE_AUTH_TOKEN_STORAGE_KEY` | Key name for storing auth token, if moving off plain `localStorage` username | Once backend exists |

---

## 7. API Integration

**Current state: no live API integration exists.** Both `SignIn.jsx` and `Register.jsx` contain commented-out `fetch` calls as placeholders:

Instead, both forms simulate a network request with `await new Promise(resolve => setTimeout(resolve, 600))`, then call the local `login()`/`register()` functions from `AuthContext`, which only touch `localStorage` — no password verification, no server session, no real user database.

Other observed placeholders:
- **Dashboard search bar** ("Find the nearest health center") is currently a plain, unwired `<input>` — no submit handler or API call attached.
- **Notifications list** uses a hardcoded placeholder array (`initialNotifications` in `Notifications.jsx`).
- Module cards link via `react-router-dom`'s `Link`/`NavLink` to internal routes only — client-side navigation, not API calls.

**Not yet implemented:** any HTTP client setup (Axios/fetch wrapper), error handling for network failures, loading/retry states beyond the artificial `setTimeout`, or token-based auth (current auth is a plain `{ username }` object with no password check or token).

---

## 8. Deployment

**Not yet configured.** No hosting platform, CI/CD pipeline, or build/deploy scripts have been established. No production build (`npm run build`) has been reviewed.

Once decided, this section should cover:
- Hosting platform (Vercel, Netlify, custom server, etc.)
- Build command and output directory (`dist/` for Vite)
- Environment-specific config (staging vs production)
- CI/CD pipeline, if any
- Domain/routing setup — important since this is a client-side-routed SPA, so the server must redirect all routes to `index.html`

---

## 9. Known Issues

Status -> Issue -> Notes 

ℹ️ Expected -> Auth has no real backend — anyone can "log in" with any username/password, no password validation against a real account -> Expected for now — mocked/local-only auth 

---