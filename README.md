# Alibaba-style E-commerce

A full-stack commerce project covering product discovery, cart management, order placement, and administration. Built with React, Redux, Express, and MongoDB.

This is an independent learning and portfolio project inspired by Alibaba. It is not affiliated with Alibaba.

## Implemented workflows

- Browse products, search by name with debouncing, filter by price, and view product details.
- Register and sign in with email/password or Google.
- Manage a cart and place orders that update product stock.
- Administer products, review orders, and edit About-page content.
- Submit a CAPTCHA-checked contact form with user and administrator email notifications.

Checkout records an order and updates stock. It does not process a payment. Stock changes are sequential database writes; the current implementation does not provide transactional inventory reservation or push-based real-time synchronization.

## Architecture

The React frontend uses React Router, Redux/Thunk, and Chakra UI. Express groups API routes around users, products, carts, orders, administration, About content, and contact submissions. Mongoose models persist those records in MongoDB.

| Area | Source |
| --- | --- |
| API composition and CORS | [backend/server.js](backend/server.js) |
| Product and order endpoints | [Products](backend/Routes/product.routes.js), [orders](backend/Routes/order.routes.js) |
| Authentication and authorization | [User routes](backend/Routes/user.routes.js), [middleware](backend/middlewares/middlewares.js), [admin routes](backend/Routes/admin.routes.js) |
| Persistence | [backend/model](backend/model) |
| Frontend state and routing | [frontend/src](frontend/src) |
| Contact and email | [Contact route](backend/Routes/contact.routes.js), [email service](backend/services/emailService.js) |

## Development setup

```sh
git clone https://github.com/shivdevwalia/alibaba-fullstack.git
cd alibaba-fullstack
npm --prefix backend ci
npm --prefix frontend ci
```

Use a compatible Node.js runtime and a development MongoDB database. Supply private backend environment values:

| Variable | Purpose |
| --- | --- |
| `MONGO_URI` | MongoDB connection |
| `TOKEN_SALT` | JWT signing secret |
| `GOOGLE_CLIENT_ID` | Google identity-token audience |
| `PORT` | API port; defaults to 8000 |
| `EMAIL_USER`, `EMAIL_PASS` | Gmail transport credentials |
| `ADMIN_EMAIL` | Contact notification recipient |
| `RECAPTCHA_SECRET` | CAPTCHA verification secret |

Frontend configuration uses `VITE_API_BASE_URL`, `VITE_GOOGLE_CLIENT_ID`, and `VITE_RECAPTCHA_SITE_KEY`. Only public configuration belongs in `VITE_` variables.

For API-only inspection, supply environment values in the launching shell and start the backend:

```sh
npm --prefix backend run dev
```

In another terminal:

```sh
npm --prefix frontend run dev
```

**Local integration caveat:** CORS currently permits only the deployed frontend origin. Some modules also capture configuration during module loading. A complete localhost workflow needs a separate configuration change: load environment values before route imports and permit the intended development origin. These instructions do not claim that a fresh local clone is fully configured.

## Current limits

The password-reset endpoint updates a password without a recovery token or proof of account ownership; it needs redesign before exposing accounts to untrusted users. JWT expiry, request validation, and stock concurrency also need further work. Order placement accepts a client-supplied total and performs order/stock/cart writes separately.

The backend test command is a placeholder. No automated application test suite is included, and builds were not run in the documentation review.

## Screenshots

<details>
<summary>Browse existing product and administration screenshots</summary>

![Homepage](https://github.com/user-attachments/assets/e9091c7a-4b09-4029-95c7-15bf82f87d8e)

![Product Listing](https://github.com/user-attachments/assets/7b2a6ce4-c9f0-4d96-a4b3-a4ad196c878a)

![Product Details](https://github.com/user-attachments/assets/41a6a74d-d3dd-4842-bb96-450fb2e7c97b)

![Cart](https://github.com/user-attachments/assets/769f65ad-3df1-4c2b-843e-fd6bb5d040dd)

![Sign In](https://github.com/user-attachments/assets/35eb42c4-fe95-4e8a-bf7f-d6f018ae21c3)

![Admin Dashboard](https://github.com/user-attachments/assets/39018766-23de-42b6-9beb-6189ab4a355e)

![Orders](https://github.com/user-attachments/assets/d2166010-e08c-41ca-8d40-d1249dfe62ba)

![Edit About](https://github.com/user-attachments/assets/8af63a74-a0d7-413b-af08-882c0cfafbbf)

![Contact Form](https://github.com/user-attachments/assets/e0d7ca9c-65aa-46fd-bc72-b0ec9eed83f5)

</details>
