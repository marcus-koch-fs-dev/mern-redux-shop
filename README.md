# MERN Redux Shop

A full-stack e-commerce application built with **MongoDB**, **Express**, **React**, **Node**, and **Redux**.  
The project includes a backend API and a React frontend with state management for cart and orders. It is structured as a monorepo with backend and frontend code together.

---

## ✨ Features

- Product catalog with CRUD operations
- User authentication with JWT and protected routes
- Cart and order management with Redux state
- Pagination and search
- Admin routes and middleware separation

---

## 🛠 Tech Stack

- **Backend**: Node.js, Express, MongoDB, Mongoose  
- **Frontend**: React, Redux, React Router  
- **Styling**: SCSS  
- **Tooling**: Prettier  

Language breakdown: JavaScript ~77%, SCSS ~20%, HTML ~2%.  

---

## 📂 Project Structure

```text
.
├── config/           # DB connection and configuration
├── controller/       # Controller logic
├── data/             # Seed data
├── middleware/       # Auth & error handling
├── models/           # Mongoose models
├── routes/           # Express routes
├── utils/            # Helpers
├── frontend/         # React app
├── server.js         # Express entry point
└── Procfile          # Heroku deploy: web: node server.js
