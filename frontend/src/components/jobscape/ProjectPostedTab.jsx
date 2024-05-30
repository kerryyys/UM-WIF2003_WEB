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
}) => {
  const [showModal, setShowModal] = useState(false);
  const [applicants, setApplicants] = useState([]);

  useEffect(() => {
    console.log("Project id of this tab: ", projectId);
    fetchApplicants();
  }, [projectId]);

  const formatPostedDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Month is zero-indexed
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const fetchApplicants = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5050/recruite/posted/" + projectId + "/applicants"
      );
      console.log("Applicants response:", response.data); // Log response data
      setApplicants(response.data);
    } catch (error) {
      console.error("Error fetching applicants:", error);
    }
  };

  const handleConfirm = async (userID) => {
    try {
      console.log("applicant ID: ", userID);
      const response = await axios.put(
        "http://localhost:5050/recruite/posted/" + projectId + "/confirm",
        { userID }
      );
      const confirmedProject = response.data;
      // Update local state or fetch data again if needed
      // For example, you can fetch the updated list of applicants after confirmation
      fetchApplicants();
      console.log("Applicant confirmed:", confirmedProject);
    } catch (error) {
      console.error("Error confirming applicant:", error);
      // Handle error gracefully
    }
  };

  const handleRemove = async (userID) => {
    try {
      const response = await axios.put(
        "http://localhost:5050/recruite/posted/" + projectId + "/remove",
        { userID }
      );
      const removedProject = response.data;
      // Update local state or fetch data again if needed
      // For example, you can fetch the updated list of applicants after removal
      fetchApplicants();
      console.log("Applicant removed:", removedProject);
    } catch (error) {
      console.error("Error removing applicant:", error);
      // Handle error gracefully
    }
  };

  useEffect(() => {
    console.log("Applicants state:", applicants); // Log applicants state
    fetchApplicants();
  }, [projectId]);

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
              key={`${projectId}-${index}`} // or use a unique identifier from the applicant data if available
              applicant={applicant}
              projectId={projectId}
              onConfirm={handleConfirm} // Ensure that onConfirm is passed here
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
