// src/components/NewsFeed/NewsFeedItem.js
import React from "react";
import Controls from "./Controls";

function NewsFeedItem({ img, name, title, time, content, images }) {
  return (
    <div className="news-feed-item">
      <div className="status-bar">
        <img
          src={img}
          alt="profile"
          className="img-fluid rounded-circle mx-auto d-block profile-img"
        />
        <div className="status-container">
          <p className="profile-name">{name}</p>
          <p className="profile-title">{title}</p>
          <p className="time">{time}</p>
        </div>
      </div>
      <div className="content">{content}</div>
      <div className="gallery"></div>
      <Controls />
    </div>
  );
}

export default NewsFeedItem;
