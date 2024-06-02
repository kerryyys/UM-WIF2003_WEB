import React from "react";
import { Button, Badge } from "react-bootstrap";
import "../../components-css/jobscape/ProjectPostedUser.css";
import Rating from "react-rating-stars-component";

const ProjectPostedUser = ({ applicant, onConfirm, onRemove, showDetails }) => {
  const { profilePic, username, ratingStar, filters, location } = applicant;

  const handleConfirm = () => {
    onConfirm(applicant._id);
  };

  const handleRemove = () => {
    onRemove(applicant._id);
  };

  return (
    <div className="ProjectPostedUser">
      <div className="LeftContent">
        <img
          src={profilePic}
          alt={`${username}'s profile`}
          className="ProfilePic"
        />
        <div className="UserDetails">
          <p className="Username">{username}</p>
          <Rating
            className="ratingStar"
            value={ratingStar || "5"}
            edit={false}
            size={20}
            activeColor="#ffd700"
          />
          <div className="Filters">
            {Array.isArray(filters) &&
              filters.map((filter, index) => (
                <Badge key={index} className="FilterBadge">
                  {filter}
                </Badge>
              ))}
            <Badge className="FilterBadge LocationBadge">
              {location || "Remote"}
            </Badge>
          </div>
        </div>
        <div className="ButtonContainer">
          <Button
            onClick={() => showDetails(applicant)}
            className="details-button"
          >
            View Details
          </Button>
        </div>
      </div>
      <div className="RightContent">
        <div className="ActionButtons">
          <Button onClick={handleConfirm} className="ConfirmBtn">
            Confirm
          </Button>
          <Button onClick={handleRemove} className="RemoveBtn">
            Remove
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectPostedUser;
