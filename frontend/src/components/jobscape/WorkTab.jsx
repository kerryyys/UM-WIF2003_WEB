import React from "react";

const WorkTab = ({ workImg, workType, content }) => (
  <div
    style={{
      width: "30%",
      height: "22.5%",
      margin: "10px",
      color: "#2D4877",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      backgroundColor: "none",
    }}
  >
    <img alt="work" src={workImg} style={{ width: "50%", height: "auto" }} />
    <strong style={{ fontSize: "15px", marginTop: "10px" }}>{workType}</strong>
    <p
      style={{
        fontSize: "12px",
        marginTop: "5px",
        wordWrap: "break-word",
      }}
    >
      {content}
    </p>
  </div>
);

export default WorkTab;
