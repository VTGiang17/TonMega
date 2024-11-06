import { useState } from "react";
import { Link } from "react-router-dom";

function DropDownMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <>
      <div className="relative inline-block text-left">
        <div>
          <Link
            to="/"
            type="button"
            className="app-header__menu__link text-white flex items-center justify-center"
            id="menu-button"
            aria-expanded="true"
            aria-haspopup="true"
            onClick={toggleMenu}
          >
            My Account
            <svg
              className="-mr-1 h-5 w-5 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              data-slot="icon"
            >
              <path
                fill-rule="evenodd"
                d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                clip-rule="evenodd"
              />
            </svg>
          </Link>
        </div>

        {isOpen && (
          <div
            className="dropdown absolute text-white right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-black shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
            tabIndex={-1}
          >
            <div className="py-1" role="none">
              <a
                href="#"
                className="dropdown__item block px-4 py-2 text-[16px] font-bold text-gray-700"
                role="menuitem"
                tabIndex={-1} // Đã thay tabindex thành tabIndex
                id="menu-item-0"
              >
                Buying
              </a>
              <a
                href="#"
                className="dropdown__item block px-4 py-2 text-[16px] font-bold text-gray-700"
                role="menuitem"
                tabIndex={-1} // Đã thay tabindex thành tabIndex
                id="menu-item-1"
              >
                History
              </a>
              <a
                href="#"
                className="dropdown__item block px-4 py-2 text-[16px] font-bold text-gray-700 "
                role="menuitem"
                tabIndex={-1} // Đã thay tabindex thành tabIndex
                id="menu-item-2"
              >
                Invite
              </a>
              <form method="POST" action="#" role="none">
                <button
                  type="submit"
                  className="dropdown__logout block w-full px-4 py-2 text-left text-[16px] font-bold text-gray-700"
                  role="menuitem"
                  tabIndex={-1} // Đã thay tabindex thành tabIndex
                  id="menu-item-3"
                >
                  Sign out
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default DropDownMenu;
