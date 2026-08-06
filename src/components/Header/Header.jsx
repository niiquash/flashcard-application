import "./Header.css";
import LogoSmall from "../../assets/logo-small.svg";
import LogoLarge from "../../assets/logo-large.svg";
import { NavLink } from "react-router";

const Header = () => {
  return (
    <header className="app-header">
      <picture className="app-header__logo-container">
        <source srcSet={LogoLarge} media="(min-width: 768px)" />
        <img className="app-header__logo" src={LogoSmall} alt="Logo" />
      </picture>
      <nav className="app-header__nav-links">
        <NavLink
          to="/study"
          className={({ isActive }) =>
            `app-header__nav-link ${isActive ? "app-header__nav-link--active" : ""}`
          }
        >
          Study Mode
        </NavLink>
        <NavLink
          to="/cards"
          className={({ isActive }) =>
            `app-header__nav-link ${isActive ? "app-header__nav-link--active" : ""}`
          }
        >
          All Cards
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
