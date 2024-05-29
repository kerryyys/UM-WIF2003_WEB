// src/components/NewsFeed/NewsFeed.js
import React from "react";
import NewsFeedItem from "./NewsFeedItem";
import "../../../components-css/Community/NewsFeed.css";
import WritePost from "../WritePost/WritePost";

function NewsFeed({ newsFeedList }) {
  return (
    <div className="complete-news-feed">
      <WritePost />
      <div className="news-feed tw-w-5/6 xl:tw-4/5 tw-flex tw-flex-col tw-gap-5 tw-font-lato">
        {newsFeedList.length === 0 ? (
          <p>No news feed available</p>
        ) : (
          newsFeedList.map((data, index) => (
            <NewsFeedItem
              key={index}
              img={data.img}
              name={data.name}
              title={data.title}
              time={data.time}
              content={data.content}
              images={data.images}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default NewsFeed;
