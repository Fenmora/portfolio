import React from "react";
import CV from "../../assets/cv.pdf";
import { BsLinkedin, BsGithub } from "react-icons/bs";
const CTA = () => {
  return (
    <div className="cta">
      <a
        href="https://www.linkedin.com/in/fenderjmora/"
        className="btn"
        target="_blank"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com" className="btn" target="_blank">
        <BsGithub />
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's Talk
      </a>
    </div>
  );
};

export default CTA;
