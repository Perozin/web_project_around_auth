// src/components/Register/Register.jsx
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Register({ onRegister }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onRegister(email, password);
  }

  return (
    <div className="register">
      <h2>Registrar</h2>

      <form className="register__form" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="email"
          className="register__input"
          required
        />

        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="new-password"
          className="register__input"
          required
        />

        <button type="submit" className="register__button">
          Cadastrar
        </button>
      </form>

      <p className="register__text">
        Já é um membro?{" "}
        <Link to="/signin" className="register__link">
          Faça o login aqui!
        </Link>
      </p>
    </div>
  );
}
