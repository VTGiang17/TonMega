import { Link } from "react-router-dom";
import DropDownMenu from "./DropDownMenu";

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
          Introduction
        </Link>
      </li>
      <li className="app-header__menu__item">
        <Link to="/" className="app-header__menu__link text-white">
          Roadmap
        </Link>
      </li>
      <li className="app-header__menu__item">
        <Link to="/" className="app-header__menu__link text-white">
          Level Reward
        </Link>
      </li>
      <li className="app-header__menu__item">
        <Link to="/" className="app-header__menu__link text-white">
          Our Team
        </Link>
      </li>
      {/*<li className="app-header__menu__item">
        <Link to="/" className="app-header__menu__link text-white">
          My Account
        </Link>
      </li>*/}
      <li className="app-header__menu__item">
        <DropDownMenu />
      </li>
    </ul>
  );
}

export default HeaderMenu;
