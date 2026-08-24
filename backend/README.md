# ValeCare Backend

**Django REST Framework API** powering ValeCare, a privacy-first SRHR platform for adolescent girls and young women (AGYW). Built for WG Assignment 1 (Backend Engineering Track).

## Overview

The backend is organized as a set of small Django apps, each covering one stage of the AGYW user journey identified in our research: from anonymous triage, through information and support, to follow-up, appointments, tracking, and emergency response. A verified provider directory underpins several of these stages.

## Design Principles

- **No mandatory login.** Every client is issued an anonymous device token on first request. All core features work without a username or password.
- **Optional accounts.** Users may register to persist data (bookmarks, reading progress, tracker history) across sessions. Guest data is wiped when a session ends; registered accounts persist until the user deletes them.
- **Two-step account deletion**, requiring explicit confirmation before any user data is permanently removed.
- **No age-based content gating.** Content filtering by age tier was removed from the design; all age-appropriate content is available to all users.

## Apps

| App | Owner | Purpose |
|---|---|---|
| `accounts` | Joy Bett | Optional user registration (username + passphrase), guest sessions, one-time recovery codes, two-step account deletion. |
| `triage` | Joy Bett | Routes users to the right information or service based on their initial query (Stage 1 of the user journey: awareness). |
| `support` | Joy Bett | Anonymous Q&A and support content — lets users ask sensitive questions without exposure risk. |
| `followup` | Joy Bett | Tracks and manages follow-up actions/reminders after a user engages with triage or support. |
| `appointments` | Denis Njoroge | Booking and management of appointments with verified providers. |
| `tracker` | Denis Njoroge | Menstrual cycle and pregnancy logging, tied to registered accounts. |
| `emergency` | Denis Njoroge | Emergency information and rapid-access resources. |
| `providers` | Denis Njoroge | CRUD API for the verified healthcare provider directory (detailed below). |
| `education` | Denis Njoroge | Age-appropriate SRHR content in English, French, Portuguese, and 14 African languages. |
| `config` | — | Django project settings and root URL configuration (not a feature app). |

## Providers App — Detail

### Why this resource

In Stage 3 ("Getting Support") of the SRHR user journey, users need safe, trusted, verified care providers. Without tracking vetted healthcare providers, the app cannot bridge the gap between initial awareness/triage and real-world clinical or supportive care.

### Fields

| Field | Type | Purpose |
|---|---|---|
| `name` | CharField | Provider or clinic name |
| `gender` | CharField | Gender of the provider (important for users seeking female care) |
| `location` | CharField | Physical location or community name |
| `distance_km` | FloatField | Proximity measure for remote users |
| `faith_sensitive` | BooleanField | Flags faith-sensitive care practices |
| `rating` | FloatField | Aggregate non-judgmental rating score |

### Access & Permissions

- **End users** (anonymous or registered): read-only access to search and filter the directory without revealing their identity.
- **System administrators / content moderators**: full CRUD access, used to vet, moderate, and maintain accurate provider listings as part of the verification pipeline. Authenticated via Django's Basic Authentication — this is separate from, and does not replace, the anonymous device-token flow end users use for the rest of the app.

### Key user action

Searching and filtering the directory by trust attributes (e.g., provider gender, faith sensitivity) — this directly reduces fear of judgment and community exposure.

## Tech Stack

- **Framework:** Python 3.13 / Django 5.x
- **API:** Django REST Framework (DRF)
- **Auth:** Anonymous device tokens (end users) + Basic Authentication (admin/moderator access to `providers`)
- **Database:** SQLite (development)

## Setup & Installation

### 1. Clone the repository

```bash
git clone https://github.com/Research-Code-Resolve/Inaccessible-SRHR-Services-For-Adolescent-Girls-and-Young-Women.git
cd Inaccessible-SRHR-Services-For-Adolescent-Girls-and-Young-Women/backend
```

### 2. Set up a virtual environment

**Windows (PowerShell):**
```powershell
python -m venv venv
.\venv\Scripts\activate
```

**macOS / Linux:**
```bash
python -m venv venv
source venv/bin/activate
```

### 3. Install dependencies

```bash
pip install -r requirements.txt
```

### 4. Run database migrations

```bash
python manage.py makemigrations
python manage.py migrate
```

### 5. Create a superuser (admin account)

```bash
python manage.py createsuperuser
```
Follow the prompts to set a username, email, and password. This account is used to access protected endpoints (POST, PUT, DELETE) and the Django Admin interface.

### 6. Start the development server

```bash
python manage.py runserver
```

You should see:
```
Starting development server at http://127.0.0.1:8000/
```

### 7. Access and test the API

- **Browsable API (providers):** `http://127.0.0.1:8000/api/providers/`
  Apply filters, e.g. `http://127.0.0.1:8000/api/providers/?gender=Female`
- **Django Admin:** `http://127.0.0.1:8000/admin/` — log in with your superuser credentials to manage provider records directly.
- **Other app endpoints:** [add base paths for triage, support, followup, appointments, tracker, emergency — confirm against `urls.py`]

## Project Structure

```
backend/
├── accounts/
├── appointments/
├── config/
├── education/
├── emergency/
├── followup/
├── providers/
├── support/
├── tracker/
├── triage/
├── manage.py
├── requirements.txt
└── README.md
```