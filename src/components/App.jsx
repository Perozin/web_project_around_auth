// src/components/App.jsx
import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";

import Header from "./Header/Header.jsx";
import Footer from "./Footer/Footer.jsx";
import Main from "./Main/Main.jsx";

import Login from "./Login/Login";
import Register from "./Register/Register";
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute";
import InfoTooltip from "./InfoTooltip/InfoTooltip";

import CurrentUserContext from "../contexts/CurrentUserContext";

import api from "../utils/api";
import * as auth from "../utils/auth";

export default function App() {
  const navigate = useNavigate();

  // ======================================================
  // AUTH
  // ======================================================
  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState("");

  // ======================================================
  // DATA
  // ======================================================
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);

  // ======================================================
  // UI STATE
  // ======================================================
  const [activeModal, setActiveModal] = useState(null); // modal único
  const [selectedCard, setSelectedCard] = useState(null);

  const [isConfirmPopupOpen, setIsConfirmPopupOpen] = useState(false);
  const [cardToDelete, setCardToDelete] = useState(null);

  const [isTooltipOpen, setIsTooltipOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [isLoadingProfile, setIsLoadingProfile] = useState(false);
  const [isLoadingAvatar, setIsLoadingAvatar] = useState(false);
  const [isLoadingCard, setIsLoadingCard] = useState(false);
  const [isLoadingDelete, setIsLoadingDelete] = useState(false);

  // ======================================================
  // TOKEN CHECK (auto login)
  // ======================================================
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;

    auth
      .checkToken(token)
      .then((res) => {
        setLoggedIn(true);
        setEmail(res.data.email);
        navigate("/");
      })
      .catch(() => localStorage.removeItem("token"));
  }, [navigate]);

  // ======================================================
  // LOAD USER + CARDS
  // ======================================================
  useEffect(() => {
    if (!loggedIn) return;

    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([user, cardsData]) => {
        setCurrentUser(user);
        setCards(cardsData);
      })
      .catch(console.error);
  }, [loggedIn]);

  // ======================================================
  // AUTH HANDLERS
  // ======================================================
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

  function handleSignOut() {
    localStorage.removeItem("token");
    setLoggedIn(false);
    setEmail("");
    navigate("/signin");
  }

  // ======================================================
  // MODALS
  // ======================================================
  const closeAllModals = () => {
    setActiveModal(null);
    setSelectedCard(null);
    setIsConfirmPopupOpen(false);
  };

  const openProfile = () => setActiveModal("profile");
  const openAvatar = () => setActiveModal("avatar");
  const openCard = () => setActiveModal("card");

  const openImagePopup = (card) => {
    setSelectedCard(card);
    setActiveModal("image");
  };

  // ======================================================
  // PROFILE ACTIONS
  // ======================================================

  function handleUpdateUser({ name, about }) {
    setIsLoadingProfile(true);

    return api
      .setUserInfo({ name, about })
      .then((updatedUser) => {
        setCurrentUser(updatedUser);
        closeAllModals();
      })
      .catch(console.error)
      .finally(() => setIsLoadingProfile(false));
  }

  function handleUpdateAvatar({ avatar }) {
    setIsLoadingAvatar(true);

    return api
      .setUserAvatar({ avatar })
      .then((updatedUser) => {
        setCurrentUser(updatedUser);
        closeAllModals();
      })
      .catch(console.error)
      .finally(() => setIsLoadingAvatar(false));
  }

  // ======================================================
  // CARD ACTIONS
  // ======================================================
  function handleCardLike(card) {
    api
      .changeLikeCardStatus(card._id, !card.isLiked)
      .then((newCard) =>
        setCards((prev) => prev.map((c) => (c._id === card._id ? newCard : c))),
      )
      .catch(console.error);
  }

  function handleDeleteRequest(card) {
    setCardToDelete(card);
    setIsConfirmPopupOpen(true);
  }

  function handleConfirmDelete() {
    setIsLoadingDelete(true);

    api
      .deleteCard(cardToDelete._id)
      .then(() => {
        setCards((prev) => prev.filter((c) => c._id !== cardToDelete._id));
        closeAllModals();
      })
      .catch(console.error)
      .finally(() => setIsLoadingDelete(false));
  }

  function handleAddPlace({ name, link }) {
    setIsLoadingCard(true);

    api
      .addCard({ name, link })
      .then((newCard) => {
        setCards((prev) => [newCard, ...prev]);
        closeAllModals();
      })
      .catch(console.error)
      .finally(() => setIsLoadingCard(false));
  }

  // ======================================================
  // RENDER
  // ======================================================
  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header email={email} loggedIn={loggedIn} onSignOut={handleSignOut} />

        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute loggedIn={loggedIn}>
                <Main
                  cards={cards}
                  activeModal={activeModal}
                  onUpdateUser={handleUpdateUser}
                  onUpdateAvatar={handleUpdateAvatar}
                  onEditProfileClick={openProfile}
                  onEditAvatarClick={openAvatar}
                  onAddPlaceClick={openCard}
                  onCardLike={handleCardLike}
                  onCardDelete={handleDeleteRequest}
                  openImagePopup={openImagePopup}
                  selectedCard={selectedCard}
                  isConfirmPopupOpen={isConfirmPopupOpen}
                  closeConfirmPopup={() => setIsConfirmPopupOpen(false)}
                  handleConfirmDelete={handleConfirmDelete}
                  onClosePopup={closeAllModals}
                  handleAddPlace={handleAddPlace}
                  isLoadingProfile={isLoadingProfile}
                  isLoadingAvatar={isLoadingAvatar}
                  isLoadingCard={isLoadingCard}
                  isLoadingDelete={isLoadingDelete}
                />
              </ProtectedRoute>
            }
          />

          <Route path="/signin" element={<Login onLogin={handleLogin} />} />
          <Route
            path="/signup"
            element={<Register onRegister={handleRegister} />}
          />
          <Route path="*" element={<Navigate to="/signin" />} />
        </Routes>

        <Footer />

        <InfoTooltip
          isOpen={isTooltipOpen}
          isSuccess={isSuccess}
          onClose={() => {
            setIsTooltipOpen(false);
            if (isSuccess) navigate("/signin");
          }}
        />
      </div>
    </CurrentUserContext.Provider>
  );
}
