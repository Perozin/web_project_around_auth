// src/components/Login/Login.jsx
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onLogin(email, password);
  }

  return (
    <div className="login">
      <h2>Entrar</h2>

      <form className="login__form" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="email"
          className="login__input"
          required
        />

        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
          className="login__input"
          required
        />

        <button type="submit" className="login__button">
          Entrar
        </button>
      </form>

      <p className="login__text">
        Ainda não é membro?{" "}
        <Link to="/signup" className="login__link">
          Inscreva-se aqui!
        </Link>
      </p>
    </div>
  );
}
