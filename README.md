# 🚗 Car Rental Website

A full-stack car rental web application that allows users to browse available cars, book rentals, and manage bookings with secure authentication and role-based access.

🔗 **Live Demo:** https://car-rental-seven-xi-49.vercel.app/  
📦 **GitHub Repo:** https://github.com/pratyushtak/CarRental_Website

---

## ✨ Features

- User authentication and authorization (JWT-based)
- Role-based access (User / Owner)
- Browse available cars with complete details
- Book cars for selected dates
- Real-time availability checks
- Manage bookings (view & cancel)
- Responsive and mobile-friendly UI

---

## 🛠 Tech Stack

### Frontend (`client`)
- React
- Tailwind CSS
- Axios
- React Router

### Backend (`server`)
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- Image Kit (image uploads)

---

📂 Project Structure

```
CarRental_Website/
│
├── client/                 # Frontend (React)
│   ├── src/
│   ├── public/
│   └── package.json
│
├── server/                 # Backend (Node + Express)
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── middleware/
│   └── package.json
│
└── README.md
```

🚀 Setup & Run Locally
Clone the Repository
```
git clone https://github.com/pratyushtak/CarRental_Website.git
cd CarRental_Website
```

Backend Setup
```
cd server
npm install
npm run dev
```


Backend runs on:
```
http://localhost:5000
```

Frontend Setup
```
cd client
npm install
npm run dev
```
