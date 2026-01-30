// src/components/Header/Header.jsx
import { Link, useLocation } from "react-router-dom";
import logo from "../../images/Vector.png";
import line from "../../images/Line.png";

export default function Header({ email, loggedIn, onSignOut }) {
  const location = useLocation();

  return (
    <header className="header">
      <div className="header__vector">
        <img
          src={logo}
          alt="Around the U.S logo"
          className="header__vector-image"
        />
      </div>

      <div className="header__auth">
        {loggedIn ? (
          <>
            <span className="header__email">{email}</span>
            <button
              className="header__logout"
              onClick={onSignOut}
              type="button"
            >
              Sair
            </button>
          </>
        ) : location.pathname === "/signin" ? (
          <Link to="/signup" className="header__link">
            Inscreva-se
          </Link>
        ) : (
          <Link to="/signin" className="header__link">
            Faça o login
          </Link>
        )}
      </div>

      <img
        src={line}
        alt="linha que separa o cabeçario da container main"
        className="header__line"
      />
    </header>
  );
}
