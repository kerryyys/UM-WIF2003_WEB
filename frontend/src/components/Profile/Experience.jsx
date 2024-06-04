import React from "react";
import WorkCaseIcon from '../../assets/icons/profile/work-case-svgrepo-com 1.svg'
import '../../components-css/Profile/ExperienceCSS.css'

function Experience({ experiences = [] }) {
  if (experiences.length === 0) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center',margin:'20px',fontStyle: 'italic', color: '#858585' }}>
          <p>Experience hasn't been set</p>
        </div>
    );
  }

  return (
    <>
      {experiences.map((experience, index) => (
        <div key={index} className="experience-item">
          <div className="title-and-icon justify-item-center" >
            <img src={WorkCaseIcon} alt="Work Case Icon" className="work-case-icon" />
            <h6>
              {experience.title}
            </h6>
            
          </div>
          <div className="details">
            <p>
              {new Date(experience.from).toLocaleString('default', { month: 'long', year: 'numeric' })} -
              {experience.current ? ' Present' : ` ${new Date(experience.until).toLocaleString('default', { month: 'long', year: 'numeric' })}`}
            </p>
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