# 📚 Book Library Frontend

This folder contains the **React + Vite frontend** for the Book Library application. It provides a user interface to view, add, search, and update books via the backend REST API.

---

## ⚙️ Getting started

1. **Install dependencies**  
   ```bash
   npm install
   ```
2. **Start the development server**
   ```bash
   npm run dev
   ```
By default, the Vite dev server will run at http://localhost:5173

## 🚀 Features
✅ Dashboard: displays a list of books
✅ Add book modal: add a new book with form validation
✅ Toggle switch: mark books as read/unread
✅ Search box: search books by title or author
✅ Filter radio buttons: filter books by status (All, Read, Unread)
✅ Responsive design: sidebar and layout adapt to mobile and desktop
✅ Routing: uses React Router for standalone book detail pages at /book/:id

## 🔗 API integration
The frontend communicates with the backend REST API (default: http://localhost:7777/api) to:
- Fetch all books
- Search books by query
- Fetch books by status
- Add a new book
- Update book status
- Fetch book details by ID

## 🛠️ Tech stack
- Frontend framework: React (with Vite)
- Styling: Tailwind CSS
- Routing: React Router
- HTTP client: Axios
