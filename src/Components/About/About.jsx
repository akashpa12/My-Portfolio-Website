import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/about_profile.svg";
import myProfile_img from "../../assets/portfolio.jpeg";
const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-section">
        <div className="about-left">
          <img src={myProfile_img} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I’m a passionate and motivated Full-Stack Web Developer
              specializing in the MERN stack (MongoDB, Express.js, React.js,
              Node.js). As a developer with a strong technical foundation, I’m
              eager to apply my skills in real-world projects and continuously
              learn new technologies to grow as a developer.
            </p>
            <p>
              I love building dynamic, user-friendly, and efficient web
              applications that solve real problems and provide seamless user
              experiences. My key strengths include frontend design, backend
              logic, secure authentication (JWT), and version control using Git.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>Mongo DB</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>Express JS</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>React JS</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>Node JS</p>
              <hr style={{ width: "50%" }} />
            </div>
           
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>10+</h1>
          <p>Projects Completed</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>5+</h1>
          <p>Certifications</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>1</h1>
          <p>Experience</p>
        </div>
      </div>
    </div>
  );
};

export default About;
