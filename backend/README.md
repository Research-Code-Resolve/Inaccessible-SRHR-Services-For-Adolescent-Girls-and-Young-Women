# SRHR Platform - Healthcare Provider Directory API

This repository contains the backend implementation for **WG Assignment 1 (Backend Engineering Track)**[cite: 2]. Built using **Django** and **Django REST Framework (DRF)**, this service exposes a CRUD API for managing and querying healthcare providers tailored to adolescent sexual and reproductive health and rights (SRHR) requirements[cite: 1, 2].

---

## 📋 Assignment Questions Breakdown

### 1. What is the one resource your project absolutely cannot function without tracking?
**Healthcare Providers (`Providers`)**.  
In Stage 3 ("Getting Support") of the SRHR user journey, young women and girls require safe, trusted, and verified care providers. Without tracking vetted healthcare providers, the application cannot bridge the gap between initial awareness/triage and real-world clinical or supportive care.

### 2. What fields does that resource need?
Extracted directly from user research and requirements:
* `name` *(CharField)*: Provider or clinic name.
* `gender` *(CharField)*: Gender of the provider (critical for users seeking female care)[cite: 1].
* `location` *(CharField)*: Physical location or community name[cite: 1].
* `distance_km` *(FloatField)*: Proximity measure for rural or remote users[cite: 1].
* `faith_sensitive` *(BooleanField)*: Flag indicating faith-sensitive care practices[cite: 1].
* `rating` *(FloatField)*: Aggregate non-judgmental rating score[cite: 1].

### 3. Who are the different types of users touching this resource, and do they need different access/permissions?
* **End-Users (e.g., young adults, pastoralist youth):** Need anonymous/pseudonymous **Read-Only** access to search and filter providers without revealing their identities or logging in[cite: 1].
* **System Administrators / Content Moderators:** Need **Full CRUD Access** (Create, Read, Update, Delete) to vet, moderate, and maintain accurate provider listings as part of the verification pipeline[cite: 1].

### 4. What is the single most important action a user takes on this resource?
**Searching and filtering the directory** by trust attributes (such as provider gender and faith sensitivity)[cite: 1]. This directly eliminates fears of judgment and community exposure[cite: 1].

---

## 🛠️ Tech Stack
* **Framework:** Python 3.13 / Django 5.x
* **API Engine:** Django REST Framework (DRF)
* **Authentication:** Basic Authentication (`rest_framework.authentication.BasicAuthentication`)
* **Database:** SQLite (default development database)

---

## 🚀 Setup & Installation Guide

Follow these steps to get the API running locally.

### Step 1: Clone and Navigate to the Repository
Open your terminal/command prompt and clone the project repository, then enter the directory:

Bash
**git clone <your-repository-url>**
**cd <your-repository-folder>**

### Step 2: Set Up a Virtual Environment
Isolate your Python dependencies by creating a virtual environment.

On Windows (Command Prompt / PowerShell):

 PowerShell
    **python -m venv venv**
    **.\venv\Scripts\***

On macOS / Linux:

Bash
    **python -m venv venv**
    **source venv/bin/activate**


### Step 3: Install Project Dependencies
Install Django and Django REST Framework inside your activated virtual environment:

Bash
    **pip install django djangorestframework**

### Step 4: Run Database Migrations
Prepare your database schema by running Django migrations:

Bash
    **python manage.py makemigrations**
    **python manage.py migrate**

### Step 5: Create a Superuser (Admin Account)
To test protected endpoints (POST, PUT, DELETE) and access the Django Admin interface, create an admin user:

Bash
    **python manage.py createsuperuser**
Follow the prompts to enter a username, email, and password.

### Step 6: Start the Development Server
Launch the Django local development server:

Bash
    **python manage.py runserver**

Once running, you will see output like this:

Plaintext
Starting development server at [http://127.0.0.1:8000/](http://127.0.0.1:8000/)
Quit the server with CTRL-BREAK.

### Step 7: Access and Test the Application
Now open your web browser or API client (Postman/cURL):

Django REST Framework Browsable API (Public):

URL: http://127.0.0.1:8000/api/providers/

Actions: View provider listings or apply filters (e.g., http://127.0.0.1:8000/api/providers/?gender=Female).

Django Admin Interface:

URL: http://127.0.0.1:8000/admin/

Actions: Log in with your superuser credentials created in Step 5 to manually create, edit, or delete provider records.