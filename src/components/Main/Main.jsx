// src/components/Main/Main.jsx
import { useContext } from "react";

import CurrentUserContext from "../../contexts/CurrentUserContext.js";

import Popup from "./components/Popup/Popup.jsx";
import NewCard from "./components/Popup/components/NewCard/NewCard.jsx";
import EditProfile from "./components/Popup/components/EditProfile/EditProfile.jsx";
import EditAvatar from "./components/Popup/components/EditAvatar/EditAvatar.jsx";
import ImagePopup from "./components/Popup/components/ImagePopup/ImagePopup.jsx";
import PopupWithConfirmation from "./components/Popup/components/PopupWithConfirmation/PopupWithConfirmation.jsx";

import Card from "./components/Card/Card.jsx";

import avatarPlaceholder from "../../images/Avatar.png";
import avatarVector from "../../images/Avatar_vector.png";
import editButton from "../../images/Edit-Button-Vector.png";
import addButton from "../../images/Vector-add-button.png";

export default function Main({
  cards,
  activeModal,
  onUpdateUser,
  onUpdateAvatar,
  onEditProfileClick,
  onEditAvatarClick,
  onAddPlaceClick,
  onCardLike,
  onCardDelete,
  onClosePopup,
  selectedCard,
  openImagePopup,
  isConfirmPopupOpen,
  closeConfirmPopup,
  handleConfirmDelete,
  handleAddPlace,
  isLoadingProfile,
  isLoadingAvatar,
  isLoadingCard,
  isLoadingDelete,
}) {
  const currentUser = useContext(CurrentUserContext);

  return (
    <main className="content">
      {/* ================= PROFILE ================= */}
      <section className="profile">
        <div className="profile__image">
          <img
            className="profile__elipse"
            src={currentUser?.avatar || avatarPlaceholder}
            alt="Avatar"
          />

          <button
            className="profile__edit-button-avatar"
            type="button"
            onClick={onEditAvatarClick}
          >
            <img
              className="profile__edit-button-avatar-vector"
              src={avatarVector}
              alt="editar avatar"
            />
          </button>
        </div>

        <div className="profile__info">
          <h1 className="profile__name">{currentUser?.name || "Seu nome"}</h1>

          <button className="profile__edit-button" onClick={onEditProfileClick}>
            <img src={editButton} alt="editar" />
          </button>

          <h2 className="profile__profession">
            {currentUser?.about || "Sua profissão"}
          </h2>
        </div>

        <button className="profile__add-button" onClick={onAddPlaceClick}>
          <img
            class="profile__add-button-vector"
            src={addButton}
            alt="adicionar"
          />
        </button>
      </section>

      {/* ================= CARDS ================= */}
      <section className="elements">
        <ul className="elements__cards">
          {cards.map((card) => (
            <Card
              key={card._id}
              card={card}
              currentUser={currentUser}
              onImageClick={openImagePopup}
              onCardLike={onCardLike}
              onCardDelete={onCardDelete}
            />
          ))}
        </ul>
      </section>

      {/* ================= MODALS ================= */}
      {activeModal === "profile" && (
        <Popup title="Editar perfil" onClose={onClosePopup} isOpen>
          <EditProfile
            currentUser={currentUser}
            onSubmit={onUpdateUser}
            onClose={onClosePopup}
            isLoading={isLoadingProfile}
          />
        </Popup>
      )}

      {activeModal === "avatar" && (
        <Popup title="Alterar avatar" onClose={onClosePopup} isOpen>
          <EditAvatar
            onSubmit={onUpdateAvatar}
            onClose={onClosePopup}
            isLoading={isLoadingAvatar}
          />
        </Popup>
      )}

      {activeModal === "card" && (
        <Popup title="Novo local" onClose={onClosePopup} isOpen>
          <NewCard
            onAddPlace={handleAddPlace}
            onClose={onClosePopup}
            isLoading={isLoadingCard}
          />
        </Popup>
      )}

      {activeModal === "image" && selectedCard && (
        <ImagePopup card={selectedCard} onClose={onClosePopup} />
      )}

      {isConfirmPopupOpen && (
        <PopupWithConfirmation
          isOpen
          onClose={closeConfirmPopup}
          onConfirm={handleConfirmDelete}
          isLoading={isLoadingDelete}
        />
      )}
    </main>
  );
}
