# ValeCare — Beginner-friendly site

A small React + Vite app adapted to be easy for beginners to read and extend.

Quick start

1. Install dependencies

```bash
npm install
```

2. Run the dev server

```bash
npm run dev
```

3. Build for production

```bash
npm run build
```

What this version includes

- Simple mock authentication using `localStorage` (`src/context/AuthContext.jsx`).
- Protected routes that redirect to `/login` when not authenticated (`RequireAuth`).
- A beginner-friendly `Health Services` page with service cards and simple detail pages.
- Basic client-side validation on `Login` and `Register` forms.
- Small CSS utility classes in `src/styles/global.css` to make layout easier.

Where to start editing

- `src/pages/HealthServices/HealthServices.jsx` — list of service categories.
- `src/pages/HealthServices/ServiceDetail.jsx` — simple details for each service.
- `src/pages/Login` and `src/pages/Register` — forms with validation.
- `src/components/Header/Header.jsx` and `src/components/Footer/Footer.jsx` — site chrome.

If you want, I can:
- Add a simple contact form or providers list for a service.
- Improve accessibility or add tests.
- Wire a mock API to fetch providers.

Ask which small feature you'd like next.
