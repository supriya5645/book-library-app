import React, { useState } from "react";
import api from "../api/axios";

const BookForm = ({ refreshBooks }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // 1. Save to Backend
      await api.post("/books", { title, author });

      // 2. Clear Inputs
      setTitle("");
      setAuthor("");

      // 3. Refresh the List instantly
      refreshBooks();
    } catch (err) {
      console.error("Failed to add book", err);
      alert("Error adding book. Please check your connection.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <input
          className="form-control"
          placeholder="Book Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <input
          className="form-control"
          placeholder="Author Name"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
      </div>
      <button
        type="submit"
        className="btn w-100 fw-bold border-0 shadow-md rounded-3 text-white"
        style={{
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          transition: "all 0.3s ease",
          padding: "0.7rem 1.5rem",
          fontSize: "1rem",
          letterSpacing: "0.5px",
          boxShadow: "0 8px 20px rgba(102, 126, 234, 0.25)",
        }}
        onMouseEnter={(e) => {
          e.target.style.transform = "translateY(-2px)";
          e.target.style.boxShadow = "0 12px 28px rgba(102, 126, 234, 0.4)";
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = "translateY(0)";
          e.target.style.boxShadow = "0 8px 20px rgba(102, 126, 234, 0.25)";
        }}
      >
        <i className="bi bi-plus-circle me-2"></i>
        Add to Collection
      </button>
    </form>
  );
};

export default BookForm;
