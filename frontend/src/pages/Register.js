import React, { useState } from "react";
import api from "../api/axios";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const validateForm = () => {
    if (!email.includes("@")) {
      setError("Invalid email address");
      return false;
    }
    if (password.length < 6) {
      setError("Password too short (min 6 chars)");
      return false;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return false;
    }
    setError("");
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setLoading(true);
    try {
      await api.post("/register", { email, password });
      navigate("/login");
    } catch (err) {
      setError("Registration failed. Account may already exist.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="container-fluid min-vh-100 d-flex align-items-center"
      style={{
        background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
        minHeight: "100vh",
      }}
    >
      <div className="col-md-4 mx-auto">
        <div
          className="card shadow-lg border-0 rounded-4 overflow-hidden"
          style={{ boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)" }}
        >
          <div className="p-5">
            <div className="text-center mb-4">
              <div
                className="d-inline-block p-3 rounded-circle mb-3"
                style={{
                  background:
                    "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
                  boxShadow: "0 8px 20px rgba(245, 87, 108, 0.3)",
                }}
              >
                <i className="bi bi-person-plus text-white fs-3"></i>
              </div>
              <h2 className="fw-bold text-dark">Join the Platform</h2>
              <p className="text-muted">Start managing your library today</p>
            </div>

            {error && (
              <div className="alert alert-danger border-0 small py-2 text-center">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label small fw-bold text-secondary">
                  WORK EMAIL
                </label>
                <input
                  className="form-control form-control-lg border-light-subtle shadow-sm"
                  style={{ fontSize: "0.9rem" }}
                  type="email"
                  placeholder="name@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label small fw-bold text-secondary">
                  PASSWORD
                </label>
                <input
                  className="form-control form-control-lg border-light-subtle shadow-sm"
                  style={{ fontSize: "0.9rem" }}
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="form-label small fw-bold text-secondary">
                  CONFIRM PASSWORD
                </label>
                <input
                  className="form-control form-control-lg border-light-subtle shadow-sm"
                  style={{ fontSize: "0.9rem" }}
                  type="password"
                  placeholder="••••••••"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>
              <button
                className="btn w-100 fw-bold py-3 rounded-3 shadow-md text-white border-0"
                disabled={loading}
                style={{
                  background:
                    "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
                  transition: "all 0.3s ease",
                  opacity: loading ? 0.7 : 1,
                  boxShadow: "0 8px 20px rgba(245, 87, 108, 0.3)",
                }}
                onMouseEnter={(e) => {
                  if (!loading) {
                    e.target.style.transform = "translateY(-2px)";
                    e.target.style.boxShadow =
                      "0 12px 28px rgba(245, 87, 108, 0.5)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!loading) {
                    e.target.style.transform = "translateY(0)";
                    e.target.style.boxShadow =
                      "0 8px 20px rgba(245, 87, 108, 0.3)";
                  }
                }}
              >
                <i className="bi bi-person-check me-2"></i>
                {loading ? "Creating..." : "Create Account"}
              </button>
            </form>
            <div className="text-center mt-4">
              <Link
                to="/login"
                className="text-decoration-none small fw-semibold"
                style={{
                  color: "#f5576c",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.target.style.opacity = "0.7";
                  e.target.style.textDecoration = "underline";
                }}
                onMouseLeave={(e) => {
                  e.target.style.opacity = "1";
                  e.target.style.textDecoration = "none";
                }}
              >
                Already have an account? Sign in
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
