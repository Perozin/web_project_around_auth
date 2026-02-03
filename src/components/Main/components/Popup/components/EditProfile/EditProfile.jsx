// src/components/Main/components/Popup/components/EditProfile/EditProfile.jsx
import React, { useEffect } from "react";

import useFormWithValidation from "../../../../../../hooks/useFormWithValidation.js";

export default function EditProfile({
  isOpen = false,
  onSubmit, // padronizado para onSubmit (App fornece onSubmit)
  isLoading = false,
  currentUser = {},
  onClose, // opcional, mantido se quiser usar internamente
}) {
  // ===============================
  // FORM STATE (custom hook)
  // ===============================
  const { values, errors, isValid, handleChange, resetForm } =
    useFormWithValidation({
      name: "",
      about: "",
    });

  // ======================================================
  // SINCRONIZA DADOS DO USUÁRIO → INPUTS
  // ======================================================
  // Sempre que:
  //  - popup abrir
  //  - currentUser atualizar (login, update profile, etc)
  // Preenche automaticamente os campos
  // ======================================================
  useEffect(() => {
    if (!currentUser) return;

    resetForm(
      {
        name: currentUser.name || "",
        about: currentUser.about || "",
      },
      {},
      true,
    );
  }, [currentUser, isOpen, resetForm]);

  // ======================================================
  // SUBMIT
  // ======================================================
  function handleSubmit(e) {
    e.preventDefault();

    // proteção extra
    if (!isValid || isLoading) return;

    if (typeof onSubmit !== "function") {
      console.warn("EditProfile: onSubmit não é função");
      return;
    }

    onSubmit({
      name: values?.name || "",
      about: values?.about || "",
    });
  }

  // ======================================================
  // RENDER
  // ======================================================
  return (
    <form className="popup__form" onSubmit={handleSubmit} noValidate>
      {/* ================= NAME ================= */}
      <input
        type="text"
        name="name"
        id="name-input"
        minLength="2"
        maxLength="40"
        required
        value={values.name}
        onChange={handleChange}
        className={`popup__input popup__input_type_name ${
          errors.name ? "popup__input_type_error" : ""
        }`}
        placeholder="Nome"
        disabled={isLoading}
      />

      <span
        className={`popup__input-error name-input-error ${
          errors.name ? "popup__error_visible" : ""
        }`}
      >
        {errors.name}
      </span>

      {/* ================= ABOUT ================= */}
      <input
        type="text"
        name="about"
        id="about-input"
        minLength="2"
        maxLength="200"
        required
        value={values.about}
        onChange={handleChange}
        className={`popup__input popup__input_type_activity ${
          errors.about ? "popup__input_type_error" : ""
        }`}
        placeholder="Sobre"
        disabled={isLoading}
      />

      <span
        className={`popup__input-error about-input-error ${
          errors.about ? "popup__error_visible" : ""
        }`}
      >
        {errors.about}
      </span>

      {/* ================= BUTTON ================= */}
      <button
        type="submit"
        disabled={!isValid || isLoading}
        className={`popup__button ${
          !isValid || isLoading ? "popup__button_disabled" : ""
        }`}
      >
        {isLoading ? "Salvando..." : "Salvar"}
      </button>
    </form>
  );
}
