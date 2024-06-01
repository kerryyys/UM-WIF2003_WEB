import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import SmallTitle from "./SmallTitle";
import axios from "axios";
import ProjectPostedUser from "./ProjectPostedUser";
import "../../components-css/jobscape/ProjectPostedTab.css";

const ProjectPostedTab = ({
  projectId,
  projectTitle,
  due,
  budget,
  postedDate,
  onMoveToInProgress,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [applicants, setApplicants] = useState([]);

  const formatPostedDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Month is zero-indexed
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
      const response = await axios.put(
        `http://localhost:5050/recruite/posted/${projectId}/remove`,
        { userID }
      );
      fetchApplicants();
    } catch (error) {
      console.error("Error removing applicant:", error);
    }
  };

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
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
          <Modal.Title>Applicant List</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {applicants.map((applicant, index) => (
            <ProjectPostedUser
              key={`${projectId}-${index}`}
              applicant={applicant}
              projectId={projectId}
              onConfirm={handleConfirm}
              onRemove={handleRemove}
            />
          ))}
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

export default ProjectPostedTab;
