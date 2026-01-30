// src/components/App.jsx
import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";

import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Main from "./Main/Main";

import Login from "./Login/Login";
import Register from "./Register/Register";
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute";
import InfoTooltip from "./InfoTooltip/InfoTooltip";

import CurrentUserContext from "../contexts/CurrentUserContext";
import api from "../utils/api";
import * as auth from "../utils/auth";

export default function App() {
  const navigate = useNavigate();

  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);

  const [isTooltipOpen, setIsTooltipOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Check token ao carregar
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      setLoggedIn(false);
      return;
    }

    auth
      .checkToken(token)
      .then((res) => {
        setLoggedIn(true);
        setEmail(res.data.email);
      })
      .catch(() => {
        localStorage.removeItem("token");
        setLoggedIn(false);
      });
  }, []);

  // Carregar dados SOMENTE quando logado
  useEffect(() => {
    if (!loggedIn) return;

    api.getUserInfo().then(setCurrentUser).catch(console.error);

    api.getInitialCards().then(setCards).catch(console.error);
  }, [loggedIn]);

  // LOGIN
  function handleLogin(email, password) {
    auth
      .authorize(email, password)
      .then((data) => {
        localStorage.setItem("token", data.token);
        setLoggedIn(true);
        setEmail(email);
        navigate("/");
      })
      .catch(() => {
        setIsSuccess(false);
        setIsTooltipOpen(true);
      });
  }

  // REGISTER
  function handleRegister(email, password) {
    auth
      .register(email, password)
      .then(() => {
        setIsSuccess(true);
        setIsTooltipOpen(true);
      })
      .catch(() => {
        setIsSuccess(false);
        setIsTooltipOpen(true);
      });
  }

  // LOGOUT
  function handleSignOut() {
    localStorage.removeItem("token");
    setLoggedIn(false);
    setEmail("");
    navigate("/signin");
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header email={email} loggedIn={loggedIn} onSignOut={handleSignOut} />

        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute loggedIn={loggedIn}>
                <Main cards={cards} />
              </ProtectedRoute>
            }
          />

          <Route
            path="/signin"
            element={
              loggedIn ? (
                <Navigate to="/" replace />
              ) : (
                <Login onLogin={handleLogin} />
              )
            }
          />

          <Route
            path="/signup"
            element={
              loggedIn ? (
                <Navigate to="/" replace />
              ) : (
                <Register onRegister={handleRegister} />
              )
            }
          />

          <Route path="*" element={<Navigate to="/signin" replace />} />
        </Routes>

        <Footer />

        <InfoTooltip
          isOpen={isTooltipOpen}
          isSuccess={isSuccess}
          onClose={() => {
            setIsTooltipOpen(false);
            if (isSuccess) {
              navigate("/signin");
            }
          }}
        />
      </div>
    </CurrentUserContext.Provider>
  );
}
