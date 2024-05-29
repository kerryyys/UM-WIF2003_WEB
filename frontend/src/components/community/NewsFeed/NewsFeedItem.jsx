// src/components/NewsFeed/NewsFeedItem.js
import React from "react";
import Controls from "./Controls";
import ImageGallery from "./ImageGallery";
import ProfileHeader from "./ProfileHeader";

function NewsFeedItem({ img, name, title, time, content, images }) {
  return (
    <div className="news-feed-item">
      <ProfileHeader img={img} name={name} title={title} time={time} />
      <div className="news-feed-item-content">{content}</div>
      <div className="news-feed-item-gallery">
        <ImageGallery images={images} />
      </div>
      <Controls />
    </div>
  );
}

export default NewsFeedItem;
