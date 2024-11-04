import { Link } from "react-router-dom";

function HeaderMenu() {
  return (
    <ul className="app-header__menu">
      <li className="app-header__menu__item">
        <Link to="/" className="app-header__menu__link text-white">
          Home
        </Link>
      </li>
      <li className="app-header__menu__item">
        <Link to="/" className="app-header__menu__link text-white">
          UI Elements
        </Link>
      </li>
      <li className="app-header__menu__item">
        <Link to="/" className="app-header__menu__link text-white">
          Roadmap
        </Link>
      </li>
      <li className="app-header__menu__item">
        <Link to="/" className="app-header__menu__link text-white">
          How to Use
        </Link>
      </li>
      <li className="app-header__menu__item">
        <Link to="/" className="app-header__menu__link text-white">
          Level Reward
        </Link>
      </li>
      <li className="app-header__menu__item">
        <Link to="/" className="app-header__menu__link text-white">
          Get Assistance
        </Link>
      </li>
    </ul>
  );
}

export default HeaderMenu;
