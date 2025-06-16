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

## 📸 Screenshots

### 🏠 Homepage  
Landing page showing navbar, banners, and product highlights.  
![Homepage]()

---

### 🛍️ Product Listing Page  
Users can browse, search, and filter products by price.  
![Product Listing](https://your-link/product-listing.png)

---

### 📄 Individual Product Page  
Detailed view with product variants, description, stock, and Add to Cart.  
![Product Details](https://your-link/product-details.png)

---

### 🛒 Cart Page  
Cart with selected items, total price, and checkout button.  
![Cart](https://your-link/cart.png)

---

### 🔐 Sign-In Page  
Login with email/password or Google account.  
![Sign In](https://your-link/signin.png)

---

### 🧑‍💼 Admin Dashboard  
Access to manage products, stock, and orders.  
![Admin Dashboard](https://your-link/admin-dashboard.png)

---

### 📦 Orders Management (Admin)  
Admin can view and manage placed orders.  
![Orders](https://your-link/admin-orders.png)

---

### 📝 Edit About Us Page  
Admin can update About Us content from the frontend.  
![Edit About](https://your-link/edit-about.png)

---

### ✉️ Contact Form with CAPTCHA  
CAPTCHA-protected contact form with email notifications.  
![Contact Form](https://your-link/contact-form.png)



