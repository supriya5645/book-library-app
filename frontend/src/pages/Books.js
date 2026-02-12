import React, { useState, useEffect, useContext } from "react";
import api from "../api/axios";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import BookForm from "../components/BookForm";
import BookList from "../components/BookList";

const Books = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const fetchBooks = async () => {
    try {
      setLoading(true);
      const res = await api.get("/books");
      setBooks(res.data);
    } catch (err) {
      console.error("Failed to fetch books", err);
      if (err.response?.status === 401) {
        logout();
        navigate("/login");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div
      className="container-fluid min-vh-100"
      style={{ backgroundColor: "#F8FAFC", paddingTop: "2rem" }}
    >
      <div className="row">
        <div className="col-md-8 mx-auto">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h1 className="fw-bold text-dark">📚 My Library</h1>
            <div className="d-flex gap-3">
              <button
                className="btn btn-sm rounded-pill text-white fw-bold border-0 shadow-lg"
                style={{
                  background:
                    "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                  transition: "all 0.3s ease",
                  padding: "0.6rem 1.5rem",
                  fontSize: "0.95rem",
                  letterSpacing: "0.5px",
                  boxShadow: "0 8px 20px rgba(102, 126, 234, 0.3)",
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = "translateY(-3px)";
                  e.target.style.boxShadow =
                    "0 12px 28px rgba(102, 126, 234, 0.5)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = "translateY(0)";
                  e.target.style.boxShadow =
                    "0 8px 20px rgba(102, 126, 234, 0.3)";
                }}
              >
                <i className="bi bi-book-fill me-2"></i>
                {books.length} Total Books
              </button>
              <button
                className="btn btn-sm rounded-pill text-white fw-bold border-0 shadow-lg"
                style={{
                  background:
                    "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
                  transition: "all 0.3s ease",
                  padding: "0.6rem 1.5rem",
                  fontSize: "0.95rem",
                  letterSpacing: "0.5px",
                  boxShadow: "0 8px 20px rgba(245, 87, 108, 0.3)",
                }}
                onClick={handleLogout}
                onMouseEnter={(e) => {
                  e.target.style.transform = "translateY(-3px)";
                  e.target.style.boxShadow =
                    "0 12px 28px rgba(245, 87, 108, 0.5)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = "translateY(0)";
                  e.target.style.boxShadow =
                    "0 8px 20px rgba(245, 87, 108, 0.3)";
                }}
              >
                <i className="bi bi-box-arrow-right me-2"></i>
                Logout
              </button>
            </div>
          </div>

          <div className="card shadow-sm border-0 rounded-4 p-4">
            <h5 className="fw-bold text-dark mb-3">Add New Book</h5>
            <BookForm refreshBooks={fetchBooks} />
          </div>

          <h5 className="fw-bold text-dark mt-5">Your Collection</h5>
          {loading ? (
            <div className="text-center p-5">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : (
            <BookList books={books} refreshBooks={fetchBooks} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Books;
