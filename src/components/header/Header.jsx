import React from "react";
import "./header.css";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";
import ME from "../../assets/me.png";
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Fender Mora</h1>
        <h5 className="text-light">Junior Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <a href="#contact" className="Scroll__Down"></a>
      </div>
    </header>
  );
};

export default Header;
