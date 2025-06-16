# 🛒 Alibaba E-Commerce Platform (Full Stack)

A full-stack, role-based e-commerce platform inspired by Alibaba. Built using the MERN stack, it features authentication (including Google Sign-In), an admin dashboard, dynamic product management, real-time stock updates, email integration, and CAPTCHA-protected contact forms.

---

## 🌐 Live Demo

🔗 [Frontend (React)](https://alibaba-fullstack.vercel.app/)  
🔗 [Backend API (Express)](https://alibaba-fullstack.onrender.com)

---

## 🛠️ Tech Stack

**Frontend:**
- React
- Chakra UI
- Redux (with Thunk)
- React Router

**Backend:**
- Node.js + Express
- MongoDB + Mongoose
- Bcrypt + JWT + Google OAuth
- Nodemailer for emails

---

## ✅ Features

### 👥 Authentication
- Sign up / log in with email and password (bcrypt)
- Google Sign-In integration
- JWT-based route protection
- Role-based access (admin vs customer)

### 🛍️ E-Commerce Functionality
- View products with variants (images, attributes, stock, price)
- **Search** products by name (real-time filtering)
- **Filter** products by price range
- Add to cart and checkout
- Cart synced with localStorage
- Checkout updates stock in real-time

### 🧑‍💼 Admin Dashboard
- Add, edit, and delete products
- Manage product attributes (images, attributes, SKU, stock, price)
- View and manage all orders placed
- Edit About page content directly from the dashboard

### 📧 Contact & Emails
- Contact form with **CAPTCHA verification**
- Sends confirmation email to user
- Sends submitted message to admin
- Built with Nodemailer

---

## 📦 Folder Structure
```bash
/Alibaba
  /backend  # Express backend
  /frontend   # React frontend
