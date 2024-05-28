import { useState } from "react";
import "../../components-css/jobscape/JobsListItem.css";
import { Container, Col, Row, Button } from "react-bootstrap";
import userImg from "../../assets/icons/jobscape/user.svg";
import CompletedReviewModal from "./CompletedReviewModal";
import { useNavigate } from "react-router-dom";
import moment from "moment";

export default function JobsListItem({
  completed,
  satisfaction,
  projectrating,
  projectfeedback,
  personrating,
  personfeedback,
  imgurl,
  reviewname,
  _id,
  companyName,
  projectTitle,
  projectBudget,
  deadline,
}) {
  JobsListItem.defaultProps = {
    completed: false,
    satisfaction: 1,
    projectrating: 1,
    projectfeedback: "No feedback",
    personrating: 1,
    personfeedback: "No feedback",
    imgurl: userImg,
    reviewname: "None",
  };
  const [showReview, setShowReview] = useState(false);
  const navigate = useNavigate();
  const handleButtonClick = () => {
    if (completed) {
      setShowReview(true);
    } else {
      navigate(`/SeekJobPage/job-details/${_id}`);
    }
  };

  const btnClassName = completed ? "job-more-btn completed" : "job-more-btn";
  return (
    <>
      <div className="jobs-list-item">
        <div className="job-texts">
          <h5 className="job-title">{projectTitle}</h5>
          <Container className="job-details-text">
            <Row>
              <Col>
                <p>Due:</p>
                <p>projectB:</p>
                <p>Requester:</p>
              </Col>
              <Col>
                <p>{moment(deadline).format("DD-MM-YYYY")}</p>
                <p>RM{projectBudget}</p>
                <p className="company-name">DELL Technology</p>
              </Col>
            </Row>
          </Container>
        </div>
        <Button className={btnClassName} onClick={handleButtonClick}>
          {completed ? "Review" : "More"}
        </Button>
        <CompletedReviewModal
          show={showReview}
          onHide={() => setShowReview(false)}
          satisfaction={satisfaction}
          projectrating={projectrating}
          projectfeedback={projectfeedback}
          personrating={personrating}
          personfeedback={personfeedback}
          imgurl={imgurl}
          reviewname={reviewname}
        />
      </div>
    </>
  );
}
