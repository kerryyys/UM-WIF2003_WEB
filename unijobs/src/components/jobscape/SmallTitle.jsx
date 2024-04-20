import React from "react";

const SmallTitle = ({ title, fontWeight, fontSize }) => (
  <div
    style={{
      color: "#2D4877",
      padding: "10px",
      margin: "10px",
      textAlign: "center",
      fontSize: fontSize,
      fontWeight: fontWeight,
    }}
  >
    <p>{title}</p>
  </div>
);

export default SmallTitle;