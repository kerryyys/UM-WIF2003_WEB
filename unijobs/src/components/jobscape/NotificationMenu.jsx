import "../../components-css/jobscape/NotificationMenu.css";
import { useState } from "react";
import { Button } from "react-bootstrap";

export default function NotificationMenu({
  isOpen,
  notifs,
  onClose,
  onRemoveNotifItem,
}) {
  if (!isOpen) {
    return null;
  }
  return (
    <div className="notification-menu">
      <div className="notification-header">
        <h5>Notifications</h5>
        <i className="bi bi-x close-notif-btn" onClick={onClose} />
      </div>
      <div className="notification-list">
        {notifs.map((notif, index) => (
          <div className="notification-item" key={index}>
            <p>{notif.text}</p>
            <i className="bi bi-x" onClick={() => onRemoveNotifItem(index)} />
          </div>
        ))}
      </div>
    </div>
  );
}
