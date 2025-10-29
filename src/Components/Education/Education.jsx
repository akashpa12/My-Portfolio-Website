import React from "react";
import "./Education.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import education from "../../assets/myeducation";
const Education = () => {
  return (
    <div className="education">
      <div className="education-title">
        <h1>Educations</h1>
        <img src={theme_pattern} alt="" />
      </div>

      <div className="education-container">
        {education.map((education, index) => {
          return (
            <div key={index} className="education-format">
              <h2>{education.course}</h2>
              <p>{education.institution}</p>
              <p>{education.year}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Education;
