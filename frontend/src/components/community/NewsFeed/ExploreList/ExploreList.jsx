// import "../../../components-css/Community/ExploreList.css";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";

function FollowButton() {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <Button onClick={handleClick} className="tw-border tw-border-red-300">
      {isActive ? "Followed" : "Follow"}
    </Button>
  );
}

function ExploreItem({ companyImg, companyName }) {
  return (
    <div className="explore-item px-4 d-inline-flex flex-row justify-content-center align-items-center">
      <img
        src={companyImg}
        alt="company"
        className="img-fluid rounded-circle mx-auto d-block explore-item-company-img"
      ></img>
      <div className="tw-gap-0">
        <p className="tw-text-lg tw-text-center">{companyName}</p>
        <FollowButton />
      </div>
    </div>
  );
}

function ExploreList({ exploreListData }) {
  return (
    <div className="tw-w-4/5 tw-p-[20px] tw-rounded-lg tw-border tw-border-gray-400 tw-pl-0 tw-gap-[15px] tw-inline-flex tw-flex-column tw-flex-wrap tw-flex-col tw-items-center">
      {exploreListData.map((data, index) => (
        <ExploreItem
          key={index} // Assuming each data item has a unique 'id'
          companyImg={data.img}
          companyName={data.name}
        />
      ))}
    </div>
  );
}

export default ExploreList;
