import React, { useState } from "react";

const DurationBar = ({ duration, handleDurationChange }) => {
  const [selectedDuration, setSelectedDuration] = useState("");

  const handleChange = (event) => {
    setSelectedDuration(event.target.value);
    handleDurationChange(event);
  };

  return (
    <div className="duration-bar">
      <select
        className="duration"
        value={selectedDuration}
        onChange={handleChange}
        style={{
          width: "auto",
          height: "5%",
          padding: "12px",
          marginRight: "2px",
          backgroundColor: "#FFFFFF",
          border: "1px solid #2D4877",
          fontSize: "16px",
          color: selectedDuration ? "#2D4877" : "#808080",
        }}
      >
        <option value="">Duration</option>
        {duration.map((duration) => (
          <option key={duration} value={duration}>
            {duration}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DurationBar;