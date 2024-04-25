import React from "react";
import "../../styles/community/ProfileCard.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import IconLabelPair from "./IconLabelPair";

function ProfileCard({ name, title }) {
  const bookmarkIcon = <i className="bi bi-bookmark"></i>;
  const bookmarkFilledIcon = <i className="bi bi-bookmark-fill"></i>;

  return (
    <div className="profile-card">
      <img
        src="https://www.w3schools.com/howto/img_avatar.png"
        alt="profile"
        class="img-fluid rounded-circle mx-auto d-block profile-img"
      ></img>
      <p className="profile-name">{name}</p>
      <p className="profile-title">{title}</p>
      <hr />
      <div className="icon-label-pairs">
        <IconLabelPair icon={bookmarkFilledIcon} label="My Saved List" />
        <IconLabelPair icon={bookmarkIcon} label="My Jobs" />
      </div>
    </div>
  );
}

export default ProfileCard;
