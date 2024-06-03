import React, { useState, useEffect } from "react";
import { Modal, Button, Badge } from "react-bootstrap";
import SmallTitle from "./SmallTitle";
import axios from "../../utils/customAxios";
import ProjectPostedUser from "./ProjectPostedUser";
import "../../components-css/jobscape/ProjectPostedTab.css";
import Rating from "react-rating-stars-component";

const ProjectPostedTab = ({
  projectId,
  projectTitle,
  due,
  budget,
  postedDate,
  onMoveToInProgress,
  onDeleteProject,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedApplicant, setSelectedApplicant] = useState(null); // Track selected applicant for details view
  const [applicants, setApplicants] = useState([]);

  const formatPostedDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  useEffect(() => {
    fetchApplicants();
  }, [projectId]);

  const fetchApplicants = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5050/recruite/posted/${projectId}/applicants`
      );
      setApplicants(response.data);
    } catch (error) {
      console.error("Error fetching applicants:", error);
    }
  };

  const handleConfirm = async (userID) => {
    try {
      const response = await axios.put(
        `http://localhost:5050/recruite/posted/${projectId}/confirm`,
        { userID }
      );
      const confirmedProject = response.data.project;
      onMoveToInProgress(confirmedProject);
      setShowModal(false);
    } catch (error) {
      console.error("Error confirming applicant:", error);
    }
  };

  const handleRemove = async (userID) => {
    try {
      await axios.put(
        `http://localhost:5050/recruite/posted/${projectId}/remove`,
        { userID }
      );
      fetchApplicants();
    } catch (error) {
      console.error("Error removing applicant:", error);
    }
  };

  const handleShowModal = () => {
    setSelectedApplicant(null); // Reset to applicant list view
    setShowModal(true);
  };

  const handleCloseModal = () => {
    if (selectedApplicant) {
      setSelectedApplicant(null); // Reset to applicant list view
    } else {
      setShowModal(false);
    }
  };

  const handleShowDeleteModal = () => {
    setShowDeleteModal(true);
  };

  const handleCloseDeleteModal = () => {
    setShowDeleteModal(false);
  };

  const handleDeleteProject = async () => {
    try {
      await axios.delete(`http://localhost:5050/recruite/posted/${projectId}`);
      onDeleteProject(projectId);
      setShowDeleteModal(false);
      setShowModal(false);
    } catch (error) {
      console.error("Error deleting project:", error);
    }
  };

  const showDetails = (applicant) => {
    setSelectedApplicant(applicant);
  };

  return (
    <div className="ProjectPostedTab">
      <div className="projectDetails">
        <SmallTitle title={projectTitle} fontWeight={700} fontSize="21px" />
        <div className="content">
          <div className="DetailsType">
            <p>Due</p>
            <p>Budget</p>
            <p>Posted Date</p>
          </div>
          <div className="PDetails">
            <p>{due}</p>
            <p>{budget}</p>
            <div>{formatPostedDate(postedDate)}</div>
          </div>
        </div>
      </div>
      <button className="MoreBtn" onClick={handleShowModal}>
        More
      </button>
      <Modal show={showModal} onHide={handleCloseModal} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title>
            {selectedApplicant ? "Applicant Details" : "Applicant List"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedApplicant ? (
            <div className="ModalContent">
              <div style={{ display: "flex", flexDirection: "column" }}>
                <img
                  src={selectedApplicant.profilePic}
                  alt="Profile Picture"
                  className="ProfilePic"
                />
                <div>
                  <Rating
                    value={selectedApplicant.ratingStar || 5}
                    edit={false}
                    size={30}
                    activeColor="#ffd700"
                  />
                  <div className="Filters">
                    {Array.isArray(selectedApplicant.filters) &&
                      selectedApplicant.filters.map((filter, index) => (
                        <Badge key={index} className="FilterBadge">
                          {filter}
                        </Badge>
                      ))}
                    <Badge className="FilterBadge LocationBadge">
                      {selectedApplicant.location || "Remote"}
                    </Badge>
                  </div>
                </div>
              </div>
              <p className="Biography">{selectedApplicant.biography}</p>
            </div>
          ) : (
            applicants.map((applicant, index) => (
              <ProjectPostedUser
                key={`${projectId}-${index}`}
                applicant={applicant}
                onConfirm={handleConfirm}
                onRemove={handleRemove}
                showDetails={showDetails}
              />
            ))
          )}
        </Modal.Body>
        <Modal.Footer>
          {!selectedApplicant && (
            <Button
              variant="danger"
              onClick={handleShowDeleteModal}
              style={{ backgroundColor: "red" }}
            >
              Delete Project
            </Button>
          )}
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showDeleteModal} onHide={handleCloseDeleteModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this project?</Modal.Body>
        <Modal.Footer>
          <Button
            variant="danger"
            onClick={handleDeleteProject}
            style={{ backgroundColor: "red" }}
          >
            Delete
          </Button>
          <Button variant="secondary" onClick={handleCloseDeleteModal}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ProjectPostedTab;
