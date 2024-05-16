// src/components/NewsFeed/Controls.js
import React from "react";
import ControlItem from "./ControlItem";

function Controls() {
  const items = [
    {
      icon: <i className="bi bi-hand-thumbs-up-fill control-item-icon"></i>,
      label: "Like",
    },
    {
      icon: <i className="bi bi-chat-dots-fill control-item-icon"></i>,
      label: "Comment",
    },
    {
      icon: <i className="bi bi-share-fill control-item-icon"></i>,
      label: "Share",
    },
    {
      icon: <i className="bi bi-send-arrow-up-fill control-item-icon"></i>,
      label: "Send",
    },
  ];

  return (
    <div className="controls">
      {items.map((item, idx) => (
        <ControlItem key={idx} icon={item.icon} label={item.label} />
      ))}
    </div>
  );
}

export default Controls;
