import "../../pages-css/Jobscape/YourJobsPage.css";
import { Container, Col, Row, Button } from "react-bootstrap";
import InProgressJobs from "../../components/jobscape/JobsListItem";
import InProgressJobsList from "../../components/jobscape/InProgressJobsList";
import CompletedJobsList from "../../components/jobscape/CompletedJobsList";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { text } from "@fortawesome/fontawesome-svg-core";
import NotificationMenu from "../../components/jobscape/NotificationMenu";

export default function YourJobsPage() {
  const navigate = useNavigate();
  const [bellFill, setBellFill] = useState(false);
  const [isNotifOpen, setIsNotifOpen] = useState(false);
  const [notifications, setNotifications] = useState([
    {
      text: "Your Web Development job by DELL Technologies is due next month!",
    },
    { text: "Your Wedding Photo job by Weddings is due next month!" },
    { text: "You have received review from DELL Technologies!" },
  ]);
  const toggleNotif = () => {
    setIsNotifOpen(!isNotifOpen);
  };
  const handleMouseEnter = () => {
    setBellFill(true);
  };
  const handleMouseLeave = () => {
    setBellFill(false);
  };
  const onRemoveNotifItem = (indexToRemove) => {
    setNotifications((prevNotifications) => {
      return prevNotifications.filter((_, index) => index !== indexToRemove);
    });
  };

  return (
    <>
      <Container className="your-jobs-container">
        <Button className="back-btn" onClick={() => navigate(-1)}>
          <p>
            <i className="bi bi-chevron-left" />
            Back
          </p>
        </Button>
        <div className="your-jobs-header">
          <div style={{ textAlign: "center" }}>
            <h3 className="your-jobs-title">Your Jobs</h3>
          </div>
          <div className="notif-bell">
            <i
              className={`bi bell ${bellFill ? "bi-bell-fill" : "bi-bell"}`}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={toggleNotif}
            />
            <span className="notif-count">{notifications.length}</span>
            <NotificationMenu
              isOpen={isNotifOpen}
              notifs={notifications}
              onClose={() => setIsNotifOpen(false)}
              onRemoveNotifItem={onRemoveNotifItem}
            />
          </div>
        </div>

        <InProgressJobsList></InProgressJobsList>
        <h3 className="completed-jobs-title">Completed Jobs</h3>
        <CompletedJobsList></CompletedJobsList>
      </Container>
    </>
  );
}
