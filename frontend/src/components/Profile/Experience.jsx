import React from "react";
import WorkCaseIcon from '../../assets/icons/profile/work-case-svgrepo-com 1.svg'
import '../../components-css/Profile/ExperienceCSS.css'

function Experience({ experiences }) {
  return (
    <>
      {experiences.map((experience, index) => (
        <div key={index} className="experience-item">
          <div className="title-and-icon justify-item-center" >
            <img src={WorkCaseIcon} alt="Work Case Icon" className="work-case-icon" />
            <h6>{experience.title}</h6>
          </div>
          <div className="details">
            <p>
              {experience.company} | {experience.location} <br />
              {experience.employmentType} | {experience.locationType} <br />
              {experience.description}
            </p>

          </div>
        </div>
      ))}
    </>
  );
}

export default Experience;