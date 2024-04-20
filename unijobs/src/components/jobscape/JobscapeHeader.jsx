import React from "react";

const JobscapeHeader = ({ text1, text2 }) => {
  return (
    <div
      style={{
        color: "#FDFAF3",
        padding: "10px",
        margin: "0px 5px 0px 5px",
        fontSize: "36px",
      }}
    >
      <p style={{ textAlign: "center" }}>
        Great
        <span style={{ fontWeight: "bold", fontSize: "64px" }}>{text1}</span>
      </p>
      <p style={{ marginLeft: "46%" }}>
        Great
        <span style={{ fontWeight: "bold", fontSize: "64px" }}>{text2}</span>
      </p>
    </div>
  );
};

export default JobscapeHeader;
