import Button from "../Button";
import { Link } from "react-router-dom";
import { scrollToSection } from "../../pages/Home/HomePage";
import "./_guide.scss";
import { useRef } from "react";

const Guide = () => {
  const aboutRef = useRef(null);
  const menuRef = useRef(null);
  return (
    <div className="guide">
      <p className="guide-address">welcome to Barista.co</p>
      <h1 className="guide-title">Cafe Klang</h1>
      <p className="guide-brief">your favourite coffee daily lives.</p>
      <div className="button">
        <Link onClick={() => scrollToSection(aboutRef)} to={"/"}>
          <Button type="btn-outline">Our Story</Button>
        </Link>
        <Link onClick={() => scrollToSection(menuRef)} to={"/"}>
          <Button>Check Menu</Button>
        </Link>
      </div>
    </div>
  );
};

export default Guide;
