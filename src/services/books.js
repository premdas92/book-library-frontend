import api from "../api/axios";

export const getAllBooks = () => api.get("/book");
export const getBooksByStatus = (status) => api.get(`/book/status/${status}`);
export const createBook = (bookData) => api.post("/book", bookData);
export const updateBook = (bookData, id) => api.patch(`/book/${id}`, bookData);
export const getBookById = (id) => api.get(`/book/${id}`);
export const searchBook = (query) => api.get(`/book/search?q=${encodeURIComponent(query)}`);