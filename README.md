# ValeCare

A privacy-first Progressive Web App providing sexual and reproductive health and rights (SRHR) information and services to adolescent girls and young women (AGYW) in Nairobi's informal settlements.

## Problem 4: Inaccessible SRHR Services for Adolescent Girls and Young Women (AGYW)

### The Problem

Adolescent girls and young women (AGYW) aged 10 to 24 in Nairobi's informal settlements, including Kibera, face compounded barriers to accessing sexual and reproductive health and rights (SRHR) services such as contraception, STI testing, menstrual health support, and family planning information. Nationally, an estimated 330,000 adolescent girls become pregnant in Kenya every year, and Nairobi's aggregate teenage pregnancy rate of 8.4 percent masks much higher rates within informal settlements specifically.

Our research (see `docs/` for the full literature review and methodology) identifies three interlocking barriers rather than a single cause:

1. **Reproductive coercion and economic dependency.** Cultural norms that place reproductive decision-making with male partners, parents, or elders combine with poverty-driven transactional relationships, so that negotiating contraceptive access carries real financial and safety risk. Nearly one in five partnered AGYW in Nairobi report lifetime reproductive coercion.
2. **Provider bias and unwelcoming clinical environments.** Healthcare workers sometimes treat adolescent sexuality as a moral issue rather than a health issue, acting as gatekeepers based on perceived social acceptability rather than clinical need. Facility conditions such as long queues, poor privacy, and fear of being recognized by neighbors compound this.
3. **Fear of discovery.** What happens socially, within the family, or physically if a girl is found to be seeking SRHR services is the least documented dimension in existing research, and is the specific gap our fieldwork (in-depth interviews, a focus group, and key informant interviews in Kibera) is designed to address.

The 2025 closure of DREAMS has also withdrawn HIV outreach for roughly two million AGYW regionwide, removing a major existing support channel and adding urgency to alternative ways of reaching this population.

### Who Is Affected

AGYW aged 10 to 24 in Nairobi's informal settlements, both in-school and out-of-school, since the barriers each group faces differ (school-based gatekeeping vs. family/economic dependency).

### Where Technology Could Help

A mobile-first, privacy-centered SRHR information and service-finder platform, specifically:

- **Anonymous Q&A** — lets AGYW ask sensitive questions without the exposure risk that discourages many from ever attending a clinic in person.
- **Verified youth-friendly facility locator** — helps route users toward facilities and providers less likely to replicate the moral policing documented in our research.
- **Age-appropriate content in local languages** (Kiswahili, Sheng, English) — addresses the informational gap without requiring a clinic visit to get basic answers.
- **Discreet design** — built around the specific finding that fear of family/community discovery, not just clinic-level barriers, is what keeps many AGYW from seeking care at all.

## What ValeCare Does

ValeCare turns the above findings into a working product. Core design principles:

- **No login required to use the app.** Every visitor gets an anonymous device token on first launch; there is no username/password to intercept, screenshot, or discover.
- **Optional accounts.** Users may choose to register to keep history (bookmarks, reading progress, tracker logs) across sessions. Guest sessions are wiped on exit, leaving no trace on a shared or borrowed device.
- **Two-step account deletion**, so users who need to erase their presence quickly can do so deliberately but without friction.
- **Menstrual cycle and pregnancy tracking**, triage/Q&A, support resources, follow-up, appointment booking, emergency information, and a verified provider directory — each as a separate backend module (see `backend/README.md`).

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React + Vite (PWA) |
| Backend | Django + Django REST Framework |
| Database | SQLite (development) |

## Repo Structure

```
/backend   - API and business logic (see backend/README.md)
/frontend  - user-facing app (see frontend/README.md)
/data-ml   - any data/ML components
/docs      - research (literature review, methodology, interview guides) and planning docs
```

## Getting Started

- Backend setup: see [`backend/README.md`](./backend/README.md)
- Frontend setup: see [`frontend/README.md`](./frontend/README.md)

## Research

See `docs/` for the full qualitative research paper this problem statement is drawn from, including methodology, interview guides, and findings.

## Team

Built for the RCA Fellows Social Innovation Bootcamp 2026, Working Group 4.

- Joy Bett
- Denis Njoroge
- Collins Bebeth
- Lvy Oguye
- Abubakar Diallo

## Acknowledgments

RCA Social Innovation Bootcamp 2026, facilitated by Julian Zaabu Kayikayi.