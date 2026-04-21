# 🛒 Shoply - an E-Commerce React App

A feature-based **e-commerce web application** built with React. This project used to be the first project of my ReDI Full-Stack Bootcamp.

---

## 🚀 Features

- Product listing with dynamic filtering and search
- Shopping cart management
- Product details page
- Add/Remove products from favorite
- State management using Context API / custom hooks
- Notification
- Local storage
- Responsive UI

---

## 🏗️ Project Structure

```
public/
│
src/
│
├── assets/
├── features/
│   ├── products/
│   │   ├── components/
│   │   ├── contexts/
│   │   └── services/
│   │
│   ├── cart/
│   │   ├── components/
│   │   └── contexts/
│
├── pages/
├── layouts/
├── routes/
├── shared/
|   ├── components/
|   ├── styles/
├── utils/
├── App.jsx
├── index.css
└── main.jsx
```

---

## ⚙️ Tech Stack

- React (Vite)
- JavaScript (ES6+)
- Tailwind CSS
- React Router
- Context API & Custom Hooks
- Fetch API
- Sonner

---

## 📦 Installation

```bash
git clone https://github.com/jjmacabatao/shoply.git
cd shoply
npm install
npm run dev
```

---

## 📌 Scripts

```bash
npm run dev
npm run build
npm run preview
npm run lint
```

---

## 🚀 Deployment

- Vercel ( see: https://shoply-delta.vercel.app)

  Note: A Vercel 404 (Not Found) error occurs when the application is refreshed on the following routes: **/products**, **/products/:id**, **/cart**, and **/favorites**.

  Why it happens?

  In a Single Page Application (like with React + React Router):

  Navigation (**/cart**, **/products**, . . .) works in-app because JavaScript handles it.
  But when you refresh, the browser requests **/cart** directly from the server.
  Vercel looks for a real **/cart** file → doesn’t find it → **404**.

---

## 👨‍💻 Author

Joseph Jake Macabatao
https://github.com/jjmacabatao
