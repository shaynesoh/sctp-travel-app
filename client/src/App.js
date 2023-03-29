import "font-awesome/css/font-awesome.min.css";
import "./assets/css/app.css";
import TripsOverview from "./pages/TripsOverview";
import LoginPage from "./pages/auth/LoginPage";
import ResetPassword from "./pages/auth/ResetPassword";
import ProfilePage from "./pages/profile/ProfilePage";
import ChangePasswordPage from "./pages/profile/ChangePasswordPage";
import TripDetails from "./pages/TripDetails";

import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { useState } from "react";

function App() {
  const [token, setToken] = useState(
    localStorage.getItem("token") ? localStorage.getItem("token") : null
    );



  const saveToken = (token) => {
    localStorage.setItem("token", token);
    setToken(token);
  };



  function RequireAuth({ children }) {

    console.log(token);
    if (!token) {
      console.log("huh");
      return <Navigate to="/login" />;
    }

    return children;
  }

  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/login"
          element={<LoginPage setToken={saveToken} />}
        />
        <Route
          exact
          path="/"
          element={
            <RequireAuth>
              <TripsOverview />
            </RequireAuth>
          }
        />
        <Route
          exact
          path="/trips"
          element={
            <RequireAuth>
              <TripsOverview />
            </RequireAuth>
          }
        />
        <Route
          exact
          path="/reset-password"
          element={
            <RequireAuth>
              <ResetPassword />
            </RequireAuth>
          }
        />
        <Route
          exact
          path="/profile"
          element={
            <RequireAuth>
              <ProfilePage />
            </RequireAuth>
          }
        />
        <Route
          exact
          path="/change-password"
          element={
            <RequireAuth>
              <ChangePasswordPage />
            </RequireAuth>
          }
        />
        <Route
          exact
          path="/trips/:index"
          element={
            <RequireAuth>
              <TripDetails />
            </RequireAuth>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
