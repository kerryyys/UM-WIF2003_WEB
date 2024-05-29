import React from "react";
import { Link } from "react-router-dom";

const PositionTab = ({
  bgImg,
  color,
  hoverColor,
  paddingLeft,
  paddingRight,
  textAlign,
  positionType,
  content,
  buttonType,
  seekPage,
}) => (
  <div
    style={{
      width: "100%",
      height: "50%",
      maxWidth: "50%",
      margin: "0",
      padding: `3% ${paddingRight} 3% ${paddingLeft}`, // Concatenate padding values
      color: color,
      textAlign: textAlign,
      backgroundImage: `url(${bgImg})`,
    }}
  >
    <h1>{positionType}</h1>
    <p
      style={{
        fontSize: "16px",
        marginTop: "5px",
        lineHeight: "1.5",
        wordWrap: "break-word",
        fontWeight: "300",
      }}
    >
      {content}
    </p>
    <Link to={seekPage}>
      <button
        style={{
          color: color,
          border: `2px solid ${color}`,
          background: "none",
          width: "25%",
          padding: "10px",
          transition: "color 0.3s",
          cursor: "pointer",
        }}
        onMouseEnter={(e) => {
          e.target.style.color = hoverColor; // Use hoverColor prop here
          e.target.style.background = color;
        }}
        onMouseLeave={(e) => {
          e.target.style.color = color;
          e.target.style.background = "none";
        }}
      >
        {buttonType}
      </button>
    </Link>
  </div>
);

export default PositionTab;
