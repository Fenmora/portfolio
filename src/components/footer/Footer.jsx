import React from "react";
import "./footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";
const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Fender Mora - Dev
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About Me</a>
        </li>
        <li>
          <a href="#experience">Experiences</a>
        </li>
        {/* <li>
          <a href="#service">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li> */}
        {/* <li>
          <a href="#testimonial">Testimonials</a>
        </li> */}
        <li>
          <a href="#contact">Contact Me</a>
        </li>
      </ul>
      <div className="footer__social">
        {/* <a href="">
          <FaFacebookF />
        </a> */}
        <a href="https://www.instagram.com/fender.mora/">
          <FiInstagram />
        </a>
        <a href="https://www.instagram.com/fender.mora/">
          <IoLogoTwitter />
        </a>
      </div>
      <div className="footer_copyright">
        <small>$copy; fender mora </small>
      </div>
    </footer>
  );
};

export default Footer;
