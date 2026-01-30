// src/components/InfoTooltip/InfoTooltip.jsx
import successIcon from "../../images/success_black_buton.svg";
import errorIcon from "../../images/fail_red_buton.svg";

export default function InfoTooltip({ isOpen, isSuccess, onClose }) {
  return (
    <div
      className={`popup popup_type_tooltip ${isOpen ? "popup_is-opened" : ""}`}
    >
      <div className="popup__content popup__content_auth">
        <button
          className="popup__close-button"
          type="button"
          aria-label="Fechar"
          onClick={onClose}
        />

        <img
          src={isSuccess ? successIcon : errorIcon}
          alt={isSuccess ? "Sucesso" : "Erro"}
          className="popup__icon"
        />

        <h2 className="popup__title popup__title_fail">
          {isSuccess
            ? "Vitória! Você se registrou com sucesso."
            : "Ops, algo deu errado! Tente novamente."}
        </h2>
      </div>
    </div>
  );
}
