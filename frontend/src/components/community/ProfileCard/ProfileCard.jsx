import React from "react";
import "../../../components-css/Community/ProfileCard.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import IconLabelPair from "./IconLabelPair";

function ProfileCard({ name, title }) {
  const bookmarkIcon = <i className="bi bi-bookmark profile-card-icon"></i>;
  const bookmarkFilledIcon = (
    <i className="bi bi-bookmark-fill profile-card-icon"></i>
  );

  return (
    <div className="profile-card">
      <img
        src="https://www.w3schools.com/howto/img_avatar.png"
        alt="profile"
        className="img-fluid rounded-circle mx-auto d-block profile-img"
      ></img>
      <p className="profile-name">{name}</p>
      <p className="profile-title">{title}</p>
      <hr className="profile-card-line" />
      <div className="icon-label-pairs">
        <IconLabelPair icon={bookmarkFilledIcon} label="My Saved List" />
        <IconLabelPair icon={bookmarkIcon} label="My Jobs" />
      </div>
    </div>
  );
}

export default ProfileCard;
