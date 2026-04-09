<div align="center">

![Banner](https://capsule-render.vercel.app/api?type=waving&color=0:7f0000,50:b91c1c,100:ef4444&height=200&section=header&text=🩸%20Blood%20Drops&fontSize=52&fontColor=ffffff&fontAlignY=38&desc=Connecting%20Donors.%20Saving%20Lives.&descAlignY=60&descSize=18&descColor=fecaca&animation=fadeIn)

</div>

<div align="center">

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Django](https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=white)
![DRF](https://img.shields.io/badge/Django_REST-ff1709?style=for-the-badge&logo=django&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)

</div>

<div align="center">

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-b91c1c?style=for-the-badge)](https://github.com/SayemImran)
[![GitHub Repo](https://img.shields.io/badge/GitHub-Repository-100000?style=for-the-badge&logo=github)](https://github.com/SayemImran)

</div>

---

## 📖 Overview

**Blood Drops** is a full-stack blood donation platform that bridges the gap between blood donors and recipients. The platform enables users to register as donors, request blood in emergencies, and manage donations — all in one place. With a seamless payment integration via **SSLCommerz** and a powerful dashboard, Blood Drops aims to make the donation process fast, reliable, and life-saving.

> *"Every drop counts. Every donor matters."* 🩸

---

## ✨ Features

### 🧑‍💼 Donor Registration & Profile
- Register as a blood donor with blood group, location & contact info
- Manage and update personal donor profile
- View donation history

### 🆘 Blood Request System
- Submit urgent blood requests with blood group & location
- Browse and respond to active blood requests
- Real-time status tracking for requests

### 💳 Payment via SSLCommerz
- Secure online payment gateway integration
- Support for campaigns, memberships, or donation fees
- Transaction history and payment confirmation

### 📊 Dashboard
- Personalized dashboard for donors and recipients
- View stats: total donations, active requests, history
- Admin panel for managing users and requests

---

## 🛠️ Tech Stack

### Backend
| Technology | Purpose |
|---|---|
| **Django** | Core web framework |
| **Django REST Framework (DRF)** | RESTful API development |
| **Djoser** | Auth endpoints (register, login, reset) |
| **JWT (SimpleJWT)** | Secure token-based authentication |
| **PostgreSQL** | Relational database |
| **SSLCommerz** | Payment gateway integration |

### Frontend
| Technology | Purpose |
|---|---|
| **ReactJS** | UI component library |
| **TailwindCSS** | Utility-first styling |
| **Axios** | API communication |
| **React Router** | Client-side routing |

---

## 🚀 Getting Started

### ✅ Prerequisites

Make sure you have the following installed:

- Python `>= 3.10`
- Node.js `>= 18.x`
- PostgreSQL
- pip & npm/yarn

---

### 🔧 Backend Setup

```bash
# 1. Clone the repository
git clone https://github.com/SayemImran/BLOOD_BANK.git
cd BLOOD_BANK

# 2. Create and activate virtual environment
python -m venv venv
source venv/bin/activate        # On Windows: venv\Scripts\activate

# 3. Install dependencies
pip install -r requirements.txt

# 4. Setup environment variables
cp .env.example .env
# Edit .env with your credentials
```

**`.env` Configuration:**
```env
SECRET_KEY=your_django_secret_key
DEBUG=True

DB_NAME=blooddrops_db
DB_USER=your_postgres_user
DB_PASSWORD=your_postgres_password
DB_HOST=localhost
DB_PORT=5432

SSLCOMMERZ_STORE_ID=your_store_id
SSLCOMMERZ_STORE_PASS=your_store_password
SSLCOMMERZ_IS_SANDBOX=True
```

```bash
# 5. Run migrations
python manage.py makemigrations
python manage.py migrate

# 6. Create superuser
python manage.py createsuperuser

# 7. Start the server
python manage.py runserver
```

> Backend will run at: `http://localhost:8000`

---

### 🎨 Frontend Setup

```bash
# 1. Navigate to frontend directory
git clone https://github.com/SayemImran/Blood-Drops.git
cd Blood-Drops/

# 2. Install dependencies
npm install

# 3. Setup environment variables
cp .env.example .env
```

**`.env` Configuration:**
```env
REACT_APP_API_BASE_URL=http://localhost:8000/api
```

```bash
# 4. Start the development server
npm start
```

> Frontend will run at: `http://localhost:3000`

---

## 📸 Screenshots

> 🚧 Screenshots coming soon — stay tuned!

| Page | Preview |
|---|---|
| 🏠 Home | _Coming Soon_ |
| 🧑 Donor Profile | _Coming Soon_ |
| 🆘 Blood Request | _Coming Soon_ |
| 📊 Dashboard | _Coming Soon_ |

---

## 🔐 Authentication Flow

```
User Registers  →  Djoser handles registration
       ↓
User Logs In    →  JWT Access + Refresh Token issued
       ↓
API Requests    →  Bearer Token sent in Authorization header
       ↓
Token Expires   →  Refresh Token used to get new Access Token
```

---

---

## 🤝 Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

```bash
# Fork the repo → Create your feature branch
git checkout -b feature/your-feature-name

# Commit your changes
git commit -m "Add: your feature description"

# Push and open a PR
git push origin feature/your-feature-name
```

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

<div align="center">

Made with ❤️ and 🩸 by **[Sayem Imran Khan](https://github.com/SayemImran)**

![Footer](https://capsule-render.vercel.app/api?type=waving&color=0:ef4444,50:b91c1c,100:7f0000&height=100&section=footer)

</div>
