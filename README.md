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
  /backend    # Express backend
  /frontend   # React frontend

## 📸 Screenshots

### 🏠 Homepage  
Landing page showing navbar, banners, and product highlights.  
![Homepage](https://github.com/user-attachments/assets/e9091c7a-4b09-4029-95c7-15bf82f87d8e)

---

### 🛍️ Product Listing Page  
Users can browse, search, and filter products by price.  
![Product Listing](https://github.com/user-attachments/assets/7b2a6ce4-c9f0-4d96-a4b3-a4ad196c878a)

---

### 📄 Individual Product Page  
Detailed view with product variants, description, stock, and Add to Cart.  
![Product Details](https://github.com/user-attachments/assets/41a6a74d-d3dd-4842-bb96-450fb2e7c97b)

---

### 🛒 Cart Page  
Cart with selected items, total price, and checkout button.  
![Cart](https://github.com/user-attachments/assets/769f65ad-3df1-4c2b-843e-fd6bb5d040dd)

---

### 🔐 Sign-In Page  
Login with email/password or Google account.  
![Sign In](https://github.com/user-attachments/assets/35eb42c4-fe95-4e8a-bf7f-d6f018ae21c3)

---

### 🧑‍💼 Admin Dashboard  
Access to manage products, stock, and orders.  
![Admin Dashboard](https://github.com/user-attachments/assets/39018766-23de-42b6-9beb-6189ab4a355e)

---

### 📦 Orders Management (Admin)  
Admin can view and manage placed orders.  
![Orders](https://github.com/user-attachments/assets/d2166010-e08c-41ca-8d40-d1249dfe62ba)

---

### 📝 Edit About Us Page  
Admin can update About Us content from the frontend.  
![Edit About](https://github.com/user-attachments/assets/8af63a74-a0d7-413b-af08-882c0cfafbbf)

---

### ✉️ Contact Form with CAPTCHA  
CAPTCHA-protected contact form with email notifications.  
![Contact Form](https://github.com/user-attachments/assets/e0d7ca9c-65aa-46fd-bc72-b0ec9eed83f5)



