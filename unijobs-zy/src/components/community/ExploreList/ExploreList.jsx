import "../../styles/community/ExploreList.css";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";

function FollowButton() {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  const btnClassName = "btn " + (isActive ? "btn-followed" : "btn-not-followed") + " follow-btn";

  return (
    <Button
      onClick={handleClick}
      className={btnClassName}
    >
      {isActive ? "Followed" : "Follow"}
    </Button>
  );
}

function ExploreItem({ companyImg, companyName }) {
  return (
    <div class="explore-item px-4">
      <img
        src={companyImg}
        alt="company"
        class="img-fluid rounded-circle mx-auto d-block company-img"
      ></img>
      <div class="explore-company-container">
        <p class="company-name text-center">{companyName}</p>
        <FollowButton />
      </div>
    </div>
  );
}

function ExploreList({ exploreListData }) {
  return (
    <div className="explore-list">
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
