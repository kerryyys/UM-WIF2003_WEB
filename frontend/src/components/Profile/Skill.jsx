import React from "react";

function Skill({ skills = [] }) {
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
