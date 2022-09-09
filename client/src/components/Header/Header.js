import { NavLink, Link } from "react-router-dom";

import "./Header.scss";

import Logo from "../../assets/Logo/InStock-Logo.svg";

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <Link to="/" className="header-logo">
          <img src={Logo} alt="InStock Logo" />
        </Link>

        <nav className="header__navigation">
          <ul className="header__menu">
            <li className="header__nav">
              <NavLink to="/" className="header__nav-link">
                Warehouses
              </NavLink>
            </li>
            <li className="header__nav">
              <NavLink to="/inventory" className="header__nav-link">
                Inventory
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
