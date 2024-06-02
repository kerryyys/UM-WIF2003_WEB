// src/components/NewsFeed/NewsFeed.js
import React from "react";
import NewsFeedItem from "./NewsFeedItem";
import "../../../components-css/Community/NewsFeed.css";
import WritePost from "../WritePost/WritePost";

function NewsFeed({ newsFeedList }) {
  if (!Array.isArray(newsFeedList)) {
    return <div>No posts available</div>;
  }

  newsFeedList.forEach((post) => {
    console.log(post);
  });

  return (
    <div>
      <WritePost />
      <div className="tw-mt-5 tw-flex tw-flex-col tw-justify-center tw-items-center tw-gap-5 tw-font-lato news-feed ">
        {newsFeedList.length === 0 ? (
          <p>No news feed available</p>
        ) : (
          newsFeedList.map((post, index) => (
            <NewsFeedItem
              key={index}
              authorImage={null}
              authorName={post.author.username}
              postId={post._id}
              postTitle={post.title}
              postContent={post.content}
              postImages={post.images || []}
              postCreatedTime={post.createdAt}
              numberOfLikes={post.likes.length}
              numberOfComments={post.comments.length}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default NewsFeed;
