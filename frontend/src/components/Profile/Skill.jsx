import React from "react";

function Skill({ skills = [] }) {
  if (skills.length === 0) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center',margin:'20px',fontStyle: 'italic', color: '#858585' }}>
          <p>Skill hasn't been set</p>
        </div>
    );
  }

  return (
    <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
      {skills.map((skill, index) => (
        <li key={index} style={{ margin: '0' }}>
          {skill}
        </li>
      ))}
    </ul>
  );
}

export default Skill;
