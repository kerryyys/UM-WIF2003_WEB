import "../../components-css/jobscape/CompletedReviewModal.css";
import { Modal, Button } from "react-bootstrap";
import Rating from "react-rating-stars-component";

export default function CompletedReviewModal(props) {
  const emojiArray = [
    { empty: "bi bi-emoji-frown", filled: "bi bi-emoji-frown-fill" },
    { empty: "bi bi-emoji-neutral", filled: "bi bi-emoji-neutral-fill" },
    { empty: "bi bi-emoji-smile", filled: "bi bi-emoji-smile-fill" },
    { empty: "bi bi-emoji-heart-eyes", filled: "bi bi-emoji-heart-eyes-fill" },
  ];
  const colorArray = ["#E82A2A", "#EFE60E", "#B7E82A", "#17FF66"];
  const setSatisfactionText = () => {
    switch (props.satisfaction) {
      case 1:
        return (
          <span className="satisfaction-text" style={{ color: "#E82A2A" }}>
            not satisfied
          </span>
        );
        break;
      case 2:
        return (
          <span className="satisfaction-text" style={{ color: "#EFE60E" }}>
            slightly satisfied
          </span>
        );
        break;
      case 3:
        return (
          <span className="satisfaction-text" style={{ color: "#B7E82A" }}>
            satisfied
          </span>
        );
        break;
      case 4:
        return (
          <span className="satisfaction-text" style={{ color: "#17FF66" }}>
            very satisfied
          </span>
        );
        break;
    }
  };
  return (
    <Modal {...props} size="lg" centered>
      <Modal.Header closeButton className="border-0" />
      <Modal.Body className="border-0 review-container">
        <p>Your requester is {setSatisfactionText()} with your deliverable!</p>
        <div className="emoji-row">
          <i
            className={
              props.satisfaction == 1
                ? emojiArray[0].filled
                : emojiArray[0].empty
            }
          ></i>
          <i
            className={
              props.satisfaction == 2
                ? emojiArray[1].filled
                : emojiArray[1].empty
            }
          ></i>
          <i
            className={
              props.satisfaction == 3
                ? emojiArray[2].filled
                : emojiArray[2].empty
            }
          ></i>
          <i
            className={
              props.satisfaction == 4
                ? emojiArray[3].filled
                : emojiArray[3].empty
            }
          ></i>
        </div>
        <p>Your project ratings:</p>
        <Rating
          value={props.projectrating}
          edit={false}
          size={40}
          activeColor="#ffd700"
        />
        <p>Project Feedback</p>
        <div className="project-feedback">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere
            voluptas, provident quo minus harum mollitia distinctio eius
            similique voluptates labore quibusdam, voluptatibus architecto esse
            ratione in veritatis perferendis sed iste?
          </p>
        </div>
        <p>Your Ratings:</p>
        <Rating
          value={props.personrating}
          edit={false}
          size={40}
          activeColor="#ffd700"
        />
        <div className="person-feedback">
          <p>{props.personfeedback}</p>
        </div>
      </Modal.Body>
      <Modal.Footer className="border-0 review-footer">
        <div className="feedback-from">
          <p>Feedback from:</p>
          <img src={props.imgurl} alt="" />
          <p>{props.reviewname}</p>
        </div>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
