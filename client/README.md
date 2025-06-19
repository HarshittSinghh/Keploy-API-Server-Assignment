# 📘 Bookly Frontend – Book Management App

A simple and user-friendly frontend built with **React.js** for managing books in a library. This app interacts with the custom REST API built using **Node.js and Express**, and stores data in **MongoDB**.

---

## 🚀 Features

- 📖 Add new books
- 🧾 View all books in a table
- ❌ Delete books
- 🎨 Stylish and responsive UI (Tailwind CSS or custom CSS)

---

## 🛠 Tech Stack

- React.js (Vite or Create React App)
- Axios for API calls
- Tailwind CSS or custom CSS for styling
- React Icons (for buttons and visuals)

---

## 📁 Folder Structure

```
client/
├── components/
│   ├── BookForm.jsx
│   ├── BookList.jsx
│   └── HeroSection.jsx
├── App.jsx
├── main.jsx
├── index.css / style.css
└── README.md
```

---

## 📦 Installation & Running

### Prerequisites

Make sure your backend server is running on:  
`http://localhost:3000`

---

### Step-by-Step

```bash
# 1. Navigate to frontend folder
cd client

# 2. Install dependencies
npm install

# 3. Start the React app
npm run dev   # if using Vite
# OR
npm start     # if using Create React App
```

The app will be running at:  
👉 `http://localhost:5173` (Vite) or `http://localhost:3001` (CRA)

---

## 🔗 API Integration

This frontend calls these endpoints:

| Method | Endpoint              | Description          |
|--------|------------------------|----------------------|
| GET    | `/books`               | Get all books        |
| POST   | `/books`               | Add a new book       |
| DELETE | `/books/:id`           | Delete a book        |

Make sure your server is live and listening on port **3000**.

---

## 🙌 Acknowledgement

Backend powered by: [Bookly API Server](../server/README.md)  
Created by: **Harshit Kumar Singh**

---