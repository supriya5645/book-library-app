import React, { useContext, useState } from "react";
import api from "../api/axios";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/login", { email, password });
      login(res.data.token);
      navigate("/books");
    } catch (err) {
      setError("The email or password you entered is incorrect.");
    }
  };

  return (
    <div
      className="container-fluid min-vh-100 d-flex align-items-center"
      style={{
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        minHeight: "100vh",
      }}
    >
      <div className="col-md-4 mx-auto">
        <div
          className="card shadow-lg border-0 rounded-4 overflow-hidden"
          style={{ boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)" }}
        >
          <div className="p-5 text-center">
            <div className="mb-4">
              <h1
                className="fw-black text-dark tracking-tight"
                style={{ letterSpacing: "-1px" }}
              >
                Log in
              </h1>
              <p className="text-muted small">
                Access your personalized collection
              </p>
            </div>

            {error && (
              <div className="alert alert-danger border-0 small py-2">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="text-start">
              <div className="mb-3">
                <label className="form-label small fw-bold text-secondary">
                  EMAIL
                </label>
                <input
                  className="form-control py-2 border-light-subtle shadow-sm"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="form-label small fw-bold text-secondary d-flex justify-content-between">
                  PASSWORD
                </label>
                <input
                  className="form-control py-2 border-light-subtle shadow-sm"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <button
                className="btn w-100 fw-bold py-2 shadow-md text-white border-0"
                style={{
                  background:
                    "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                  transition: "all 0.3s ease",
                  padding: "0.7rem 1.5rem",
                  boxShadow: "0 8px 20px rgba(102, 126, 234, 0.3)",
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = "translateY(-2px)";
                  e.target.style.boxShadow =
                    "0 12px 28px rgba(102, 126, 234, 0.5)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = "translateY(0)";
                  e.target.style.boxShadow =
                    "0 8px 20px rgba(102, 126, 234, 0.3)";
                }}
              >
                <i className="bi bi-box-arrow-in-right me-2"></i>
                Sign in to Dashboard
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
