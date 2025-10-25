import React from "react";
import "./AboutMe.css";
import peterr from "../../assets/peterr.jpg";
import theme_pattern from "../../assets/theme_pattern.svg";
import { GiGraduateCap } from "react-icons/gi";

const AboutMe = () => {
  return (
    <div className="about-container">
      <div className="about-title">
        <h1>About Me</h1>
        <img className="about-pattern" src={theme_pattern} alt="" />
      </div>

      <div className="about-sections">
        <div className="about-left">
          <img className="about-img" src={peterr} alt="" />
        </div>

        <div className="about-right">
          <div className="about-para">
            <p>I am a passionate software engineer with a strong focus on building responsive and high-quality web applications. I leverage my expertise in frontend engineering and cybersecurity principles to create digital products that are not only fast and secure but also built for scale.</p>
            <p>With a keen eye for detail and a commitment to excellence, my goal is to deliver exceptional user experiences while ensuring the highest standards of security and performance.</p>
            <div className="about-edu">
              <GiGraduateCap />
              <p><strong><em>B.Sc. Computer Science, Babcock University (2025)</em></strong></p>
            </div>
          </div>

          <div className="about-skills">
            <div className="about-skill"><p>JavaScript</p><hr style={{ width:"70%" }} /></div>
            <div className="about-skill"><p>TailwindCSS</p> <hr style={{ width: "65%" }} /></div>
            <div className="about-skill"><p>ReactJS</p><hr style={{ width: "60%" }} /></div>
            <div className="about-skill"><p>TypeScript</p><hr style={{ width: "55%" }} /></div>
            <div className="about-skill"><p>NextJS</p><hr style={{ width: "50%" }} /></div>
          </div>
        </div>
      </div>

      <div className="about-achievements">
        <div className="about-achievement">
          <h1>2+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>4+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
