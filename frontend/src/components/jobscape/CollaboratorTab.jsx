import React, { useState } from "react";
import { Badge, Button, Modal } from "react-bootstrap";
import Rating from "react-rating-stars-component";
import "../../components-css/jobscape/CollaboratorTab.css";
import { useUserContext } from "../../context/UserContext";

const CollaboratorTab = ({
  freelancerID,
  profilePic,
  username,
  ratingStar,
  filters,
  location,
}) => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  const navigateToFreelancerProfilePage = () => {
    window.location.href = `http://localhost:5050/users/${freelancerID}`;
  }

  return (
    <div className="CollaboratorTab">
      <div className="LeftContent">
        <img src={profilePic} alt="Profile Picture" className="ProfilePic" />
        <div>
          <p className="CollaboratorName">{username}</p>
          <Rating
            classNames="ratingStar"
            value={ratingStar || "5"} // Default rating to 5 if not provided
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
            <Badge className="FilterBadge LocationBadge">{location}</Badge>
          </div>
        </div>
      </div>
      <Button className="details-button" onClick={handleShowModal}>
        View Details
      </Button>
      <Modal show={showModal} onHide={handleCloseModal} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title
            style={{ color: "#2D4877", textAlign: "center", width: "100%" }}
          >
            {username}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="ModalContent" style={{ position: "relative" }}>
            <div style={{ display: "flex" }}>
              <img
                src={profilePic}
                alt="Profile Picture"
                className="ProfilePic"
              />
              <div>
                <Rating
                  value={ratingStar || 5} // Default rating to 5 if not provided
                  edit={false}
                  size={30}
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
                    {location}
                  </Badge>
                </div>
              </div>
            </div>
            <Button
              className="details-button"
              onClick={navigateToFreelancerProfilePage}
              style={{ position: "absolute", right: 0, top: "20%" }}
            >
              View Profile
            </Button>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CollaboratorTab;
