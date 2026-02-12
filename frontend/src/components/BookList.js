import React from "react";
import api from "../api/axios";

const BookList = ({ books, refreshBooks }) => {
  const handleDelete = async (id) => {
    // Professional confirmation dialog
    if (window.confirm("Are you sure you want to delete this book?")) {
      try {
        // Calls the DELETE route you have in bookRoutes.js
        await api.delete(`/books/${id}`);
        refreshBooks(); // Re-fetches the list to show it's gone
      } catch (err) {
        alert("Delete failed. Please ensure you are authorized.");
      }
    }
  };

  return (
    <div className="card shadow-sm border-0 rounded-4 mt-3">
      <div className="card-body p-0">
        <div className="list-group list-group-flush rounded-4">
          {books.length === 0 ? (
            <div className="p-4 text-center text-muted">
              No books in your collection.
            </div>
          ) : (
            books.map((book) => (
              <div
                key={book._id}
                className="list-group-item d-flex justify-content-between align-items-center p-3 border-light"
              >
                <div>
                  <h6 className="mb-0 fw-bold text-dark">{book.title}</h6>
                  <small className="text-secondary">{book.author}</small>
                </div>

                {/* Delete button with professional advanced styling */}
                <button
                  className="btn btn-sm rounded-pill px-3 fw-bold text-white border-0"
                  style={{
                    background:
                      "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
                    transition: "all 0.3s ease",
                    boxShadow: "0 6px 16px rgba(245, 87, 108, 0.2)",
                    fontSize: "0.85rem",
                  }}
                  onClick={() => handleDelete(book._id)}
                  onMouseEnter={(e) => {
                    e.target.style.transform = "translateY(-2px) scale(1.05)";
                    e.target.style.boxShadow =
                      "0 10px 24px rgba(245, 87, 108, 0.35)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = "translateY(0) scale(1)";
                    e.target.style.boxShadow =
                      "0 6px 16px rgba(245, 87, 108, 0.2)";
                  }}
                >
                  <i className="bi bi-trash3 me-1"></i>Delete
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default BookList;
