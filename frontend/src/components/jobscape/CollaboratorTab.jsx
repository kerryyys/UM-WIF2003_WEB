import React, { useState } from "react";
import { Badge, Button, Modal } from "react-bootstrap";
import Rating from "react-rating-stars-component"; // Import the Rating component
import "../../components-css/jobscape/CollaboratorTab.css";

const CollaboratorTab = ({
  profilePic,
  collaboratorName,
  ratingStar,
  filters,
  biography,
}) => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="CollaboratorTab">
      {/* Left side content */}
      <div className="LeftContent">
        <img src={profilePic} alt="Profile Picture" className="ProfilePic" />
        <div>
          <p className="CollaboratorName">{collaboratorName}</p>
          {/* Rating star */}
          <Rating
            classNames="ratingStar"
            value={ratingStar}
            edit={false} // Disable editing
            size={20} // Set the size of the stars
            activeColor="#ffd700" // Set the color of the active stars
          />
          {/* Filter types */}
          <div className="Filters">
            {Array.isArray(filters) &&
              filters.map((filter, index) => (
                <Badge key={index} className="FilterBadge">
                  {filter}
                </Badge>
              ))}
          </div>
        </div>
      </div>
      {/* Button to view details */}
      <Button className="button" onClick={handleShowModal}>
        View Details
      </Button>

      {/* Modal for displaying collaborator details */}
      <Modal show={showModal} onHide={handleCloseModal} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title
            style={{ color: "#2D4877", textAlign: "center", width: "100%" }}
          >
            {collaboratorName}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Collaborator details */}
          <div className="ModalContent">
            <div style={{ display: "flex" }}>
              <img
                src={profilePic}
                alt="Profile Picture"
                className="ProfilePic"
              />
              <div>
                {/* Rating star */}
                <Rating
                  value={ratingStar}
                  edit={false}
                  size={30}
                  activeColor="#ffd700"
                />
                {/* Filter types */}
                <div className="ViewFilters">
                  {Array.isArray(filters) &&
                    filters.map((filter, index) => (
                      <Badge key={index} className="FilterBadge">
                        {filter}
                      </Badge>
                    ))}
                </div>
              </div>
            </div>
            {/* Biography */}
            <p className="Biography">{biography}</p>
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
