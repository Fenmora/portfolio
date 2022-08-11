import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";
const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skill I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3> Development</h3>
          <div className="experience__content">
            <article className="experience__detail">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>HTML</h4>
                {/* <small className="text-light">Experienced</small> */}
              </div>
            </article>
            <article className="experience__detail">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>CSS</h4>
                {/* <small className="text-light">Experienced</small> */}
              </div>
            </article>{" "}
            <article className="experience__detail">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>JavaScript</h4>
                {/* <small className="text-light">Experienced</small> */}
              </div>
            </article>{" "}
            <article className="experience__detail">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>React || Redux</h4>
                {/* <small className="text-light">Experienced</small> */}
              </div>
            </article>
            <article className="experience__detail">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>SQL</h4>
                {/* <small className="text-light">Experienced</small> */}
              </div>
            </article>
          </div>
        </div>
        <div className="experience__backend">
          <h3> QA Testing</h3>
          <div className="experience__content">
            <article className="experience__detail">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Manual Testing</h4>
                {/* <small className="text-light">Experienced</small> */}
              </div>
            </article>{" "}
            <article className="experience__detail">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Webdriver.io</h4>
                {/* <small className="text-light">Experienced</small> */}
              </div>
            </article>{" "}
            <article className="experience__detail">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>TsqlT</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>{" "}
            <article className="experience__detail">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Unit Testing</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>{" "}
            <article className="experience__detail">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Azure Pipelines </h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>{" "}
            <article className="experience__detail">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Confluences / Jira / Zephyr </h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>{" "}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
