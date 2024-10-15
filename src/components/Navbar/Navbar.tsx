import { useState } from "react";
import "./_navbar.scss";

const Navbar = () => {
  const [activeItem, setActiveItem] = useState("Home");
  const [isExpanded, setIsExpanded] = useState(false);
  const handleItemClick = (item: string) => {
    setActiveItem(item);
  };

  const toggleNavbar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <nav className="navbar fixed-top">
        <div className="container-fluid">
          <a className="d-flex flex-row mb-3" href="">
            <img
              className="p-2"
              src="src/assets/images/coffee-beans.png"
              alt="Coffee Beans icon"
            />
            <h2 className="header">Barista</h2>
          </a>

          <ul className="navbar-collapsed">
            {["Home", "About", "Our Menu", "Reviews", "Contact"].map((item) => (
              <li
                key={item}
                className={`${activeItem === item ? "active" : ""}`}
                onClick={() => handleItemClick(item)}
              >
                <a className="nav-item" href="#">
                  {item}
                </a>
              </li>
            ))}
            <a className="btn btn-outline-light" href="">
              Reservation <i className="bi bi-arrow-up-right ms-3"></i>
            </a>
          </ul>

          <button
            className={`navbar-toggler ${isExpanded ? "open" : ""}`}
            type="button"
            aria-expanded={isExpanded}
            aria-label="Toggle navigation"
            onClick={toggleNavbar}
          >
            <div className="line line1"></div>
            <div className="line line2"></div>
            <div className="line line3"></div>
          </button>
        </div>

        <div
          className={`collapse ${isExpanded ? "show" : ""}`}
          id="navbarToggleExternalContent"
        >
          <ul className="navbar-collapse">
            {["Home", "About", "Our Menu", "Reviews", "Contact"].map((item) => (
              <li
                key={item}
                className={`${activeItem === item ? "active" : ""}`}
                onClick={() => handleItemClick(item)}
              >
                <a href="#">{item}</a>
              </li>
            ))}
            <a className="btn btn-outline-light" href="">
              Reservation <i className="bi bi-arrow-up-right ms-3"></i>
            </a>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
