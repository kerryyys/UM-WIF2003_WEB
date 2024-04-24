import "../../components-css/jobscape/JobAcceptedModal.css";
import { Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function JobAcceptedModal(props) {
  return (
    <Modal {...props} centered backdrop="static">
      <Modal.Body className="border-0 accepted-container">
        <h3>You have accepted a job!</h3>
        <p style={{ fontWeight: 300 }}>
          Don't forget to communicate with the requester!
        </p>
        <div>
          <div className="job-title">
            <p>Job Title:</p>
            <p className="title-text" style={{ fontWeight: 300 }}>
              Web Development by DELL Technology
            </p>
          </div>
          <div className="job-deadline">
            <p>Job deadline:</p>
            <p className="deadline-text" style={{ fontWeight: 300 }}>
              Before August 2024
            </p>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer className="border- accepted-footer">
        <Button className="understood-btn" onClick={props.onHide}>
          Understood
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
