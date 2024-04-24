import React from "react";

function Skill({ skills }) {
  return (
    <>
      
      {skills.map((skill, index) => (
        <div key={index} >
          <ul style={{margin:'0'}}>
            <li>{skill}</li>
          </ul>
        </div>
      ))}
    </>
  );
}

export default Skill;