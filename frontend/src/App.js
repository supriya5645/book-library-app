import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext, AuthProvider } from "./context/AuthContext";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Books from "./pages/Books";

// We create a wrapper component to handle the logic
function AppContent() {
  const { token } = useContext(AuthContext);

  return (
    <BrowserRouter basename="/book-library-app">
      <Routes>
        {/* 1. If user is logged in, redirect them away from Register/Login to Books */}
        <Route
          path="/"
          element={!token ? <Register /> : <Navigate to="/books" replace />}
        />
        <Route
          path="/login"
          element={!token ? <Login /> : <Navigate to="/books" replace />}
        />

        {/* 2. PROTECTED ROUTE: If no token, kick the user back to Login */}
        <Route
          path="/books"
          element={token ? <Books /> : <Navigate to="/login" replace />}
        />

        {/* 3. CATCH-ALL: Redirect any invalid URL to the home logic */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;
