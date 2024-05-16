// src/components/NewsFeed/ControlItem.js
import React from "react";
import Button from "react-bootstrap/Button";

function ControlItem({ icon, label }) {
  return (
    <Button variant="light" className="control-item">
      {icon}
      <span className="control-item-label">{label}</span>
    </Button>
  );
}

export default ControlItem;
