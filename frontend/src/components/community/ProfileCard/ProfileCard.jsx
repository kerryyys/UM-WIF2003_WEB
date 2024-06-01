import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import IconLabelPair from "./IconLabelPair";

function ProfileCard({ name, title }) {
  const bookmarks = [
    { label: "Saves", icon: "bi bi-bookmark-fill", link: "/" },
    { label: "Jobs", icon: "bi bi-bookmark", link: "/" },
  ];

  return (
    <div className="tw-w-4/5 tw-p-3 tw-border tw-border-gray-300 tw-rounded-lg tw-shadow-md tw-bg-white">
      <div className="tw-bg-gradient-to-tr tw-from-primary tw-to-cyan-600 tw-rounded-lg tw-flex tw-justify-center tw-items-center tw-py-5">
        <img
          src="https://www.w3schools.com/howto/img_avatar.png"
          alt="profile"
          className="tw-w-24 tw-h-24 tw-rounded-full tw-border-4 tw-border-white"
        />
      </div>
      <div className="tw-px-5 tw-text-center">
        <p className="tw-text-xl tw-font-bold tw-mt-2">{name}</p>
        <p className="tw-text-gray-400 tw-mt-1">{title}</p>
      </div>
      <hr className="tw-w-11/12 tw-border-gray-300 tw-my-2" />
      <div className="tw-flex tw-justify-center tw-items-center tw-gap-7">
        {bookmarks.map((bookmark, index) => (
          <IconLabelPair
            key={index}
            icon={bookmark.icon}
            label={bookmark.label}
          />
        ))}
      </div>
    </div>
  );
}

export default ProfileCard;
