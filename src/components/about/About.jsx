import React from "react";
import "./about.css";
import CTA from "../header/CTA";
import HeaderSocials from "../header/HeaderSocials";

import Me from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
const About = () => {
  return (
    <section id="about">
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Me} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <h1> Fender Mora</h1>
          <h3>Software Engineer </h3>
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Software Developer</h5>
              <small> 4+ years working </small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>QA Testing</h5>
              <small> 2+ clients WorldWide </small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small> 10 completes </small>
            </article>
          </div>
          <p>
            Hey, I am a Computer Engineer. I've been working for 6 years in
            software industry as a frontend Developer and Quality Assurance
            Engineer. Experienced in working with LATAM and American companies.
          </p>
          <CTA />
        </div>
      </div>
    </section>
  );
};

export default About;
