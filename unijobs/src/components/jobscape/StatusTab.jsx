import React from "react";

const StatusTab = ({ numArray, typeArray }) => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      width: "100%",
      height: "24%",
      backgroundColor: "#FDFAF3",
      padding: "10px",
    }}
  >
    <div style={{ marginBottom: "10px" }}>
      <h2 style={{ color: "#2D4877", fontSize: "24px", fontWeight: "700" }}>
        JobScape Site Stats
      </h2>
    </div>
    <div
      style={{
        display: "flex",
        justifyContent: "space-between", // Changed from "space-around" to "space-between"
        width: "60%", // Adjusted the width to 80% to leave space on both sides
      }}
    >
      {numArray.map((num, index) => (
        <div key={index}>
          <p
            style={{
              color: "#80D1D5",
              textAlign: "center",
              fontSize: "36px",
              margin: "0",
            }}
          >
            {num}
          </p>
          <p style={{ color: "#2D4877", fontSize: "15px", fontWeight: "700"}}>
            {typeArray[index]}
          </p>
        </div>
      ))}
    </div>
  </div>
);

export default StatusTab;
