import { useEffect, useState, RefObject } from "react";
import { Link } from "react-router-dom";
import Button from "../Button";
import coffeeBeans from "./../../assets/images/coffee-beans.png";
import "./_navbar.scss";

interface NavbarProps {
  scrollToSection: (ref: RefObject<HTMLDivElement>) => void;
  refs: RefObject<HTMLDivElement>[];
}

const Navbar = ({ scrollToSection, refs }: NavbarProps) => {
  const [activeItem, setActiveItem] = useState("Welcome");
  const [isExpanded, setIsExpanded] = useState(false);

  const navbarItems = (items: string[]) => {
    return (
      <>
        {items.map((item, index) => (
          <Link
            to={"/"}
            onClick={() => scrollToSection(refs[index])}
            key={item}
            className="navbar-link"
          >
            <li
              className={`navbar-item ${activeItem === item ? "active" : ""}`}
              onClick={() => handleItemClick(item)}
            >
              {item}
            </li>
          </Link>
        ))}
        <Link to="/Reservation" className="navbar-link">
          <Button type="btn-outline">
            Reservation <i className="arrow-up">→</i>
          </Button>
        </Link>
      </>
    );
  };

  const handleItemClick = (item: string) => {
    setActiveItem(item);
  };

  const toggleNavbar = () => {
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsExpanded(true);
      } else {
        setIsExpanded(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-top">
          <div className="navbar-header">
            <Link className="navbar-icon navbar-link" to={"/"}>
              <img src={coffeeBeans} alt="Coffee Beans icon" />
              <h2>Barista</h2>
            </Link>
            <button
              className={`navbar-toggler ${isExpanded ? "open" : "close"}`}
              aria-expanded={isExpanded}
              onClick={toggleNavbar}
            >
              <div className="line line1"></div>
              <div className="line line2"></div>
              <div className="line line3"></div>
            </button>
          </div>
          <ul
            className={`navbar-list navbar-items ${
              isExpanded ? "open" : "close"
            }`}
          >
            {navbarItems([
              "Welcome",
              "About",
              "Our Menu",
              "Reviews",
              "Contact",
            ])}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
