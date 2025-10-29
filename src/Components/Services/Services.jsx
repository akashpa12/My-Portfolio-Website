import React from "react";
import "./Services.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import Services_Data from "../../assets/services_data";
import arrow_icon from "../../assets/arrow_icon.svg";
const Services = () => {
  return (
    <div id="services" className="services">
      <div className="services-title">
        <h1>Skills & Expertise</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="services-container">
        {Services_Data.map((service, index) => {
          return (
            <div key={index} className="services-format">
              <h2>{service.s_name}</h2>
              <div className="service-skill">
              <p>{service.s_lang1}</p>
              <p>{service.s_lang2}</p>
              <p>{service.s_lang3}</p>
              <p>{service.s_lang4}</p>
              <p>{service.s_lang5}</p>
              </div>
              
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
