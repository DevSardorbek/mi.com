import React from "react";
import "./Header.css";
import logo from "../../assets/images/Xiaomi_logo.svg.png";

function Header() {
  return (
    <header>
      <div className="navbar__group">
        <div className="container">
          <div className="navigation__group-wrapper">
            <div className="navigation__logo">
              <img src={logo} className="imgStyle" alt="" />
              <ul className="navigation__menu">
                <li className="navigation__items">
                  <a href="#" className="navigation__item">
                    Акции
                  </a>
                  <span className="navigation__line"></span>
                </li>{" "}
                <li className="navigation__items">
                  <a href="#" className="navigation__item">
                    Смартфоны
                  </a>
                  <span className="navigation__line"></span>
                </li>{" "}
                <li className="navigation__items">
                  <a href="#" className="navigation__item">
                    Умный дом
                  </a>
                  <span className="navigation__line"></span>
                </li>{" "}
                <li className="navigation__items">
                  <a href="#" className="navigation__item">
                    Лайфстайл
                  </a>
                  <span className="navigation__line"></span>
                </li>
              </ul>
            </div>
            <div className="navigation__blog">
              <ul className="navigation__link-group">
                <li className="navigation__link">
                  <a href="#">Блог</a>
                  <span className="navigation__line"></span>
                </li>
                <li className="navigation__link">
                  <a href="#">Поддержка</a>
                  <span className="navigation__line"></span>
                </li>
              </ul>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28px"
                height="28px"
                viewBox="0 0 1024 1024"
              >
                <path
                  fill="currentColor"
                  d="m795.904 750.72l124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704a352 352 0 0 0 0 704"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28px"
                height="28px"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  stroke-width="1"
                  d="M17.437 19.934a1 1 0 1 1-2 0a1 1 0 0 1 2 0M6.22 15.668l-.945-10.9a.75.75 0 0 0-.749-.693H3.56a.5.5 0 0 1 0-1h.966a1.75 1.75 0 0 1 1.746 1.617l.139 1.818h13.03c.885 0 1.577.76 1.494 1.638l-.668 7.52a2.5 2.5 0 0 1-2.489 2.267H8.709a2.5 2.5 0 0 1-2.489-2.267m.274-8.158l.722 8.066a1.5 1.5 0 0 0 1.493 1.359h9.069a1.5 1.5 0 0 0 1.493-1.359l.668-7.518a.5.5 0 0 0-.498-.548zm4.454 12.424a1 1 0 1 1-2 0a1 1 0 0 1 2 0"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28px"
                height="28px"
                viewBox="0 0 24 24"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  stroke-dasharray="28"
                  stroke-dashoffset="28"
                  stroke-linecap="round"
                  stroke-width="1"
                >
                  <path d="M4 21V20C4 16.6863 6.68629 14 10 14H14C17.3137 14 20 16.6863 20 20V21">
                    <animate
                      fill="freeze"
                      attributeName="stroke-dashoffset"
                      dur="0.4s"
                      values="28;0"
                    />
                  </path>
                  <path d="M12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7C16 9.20914 14.2091 11 12 11Z">
                    <animate
                      fill="freeze"
                      attributeName="stroke-dashoffset"
                      begin="0.5s"
                      dur="0.4s"
                      values="28;0"
                    />
                  </path>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
export default Header;
