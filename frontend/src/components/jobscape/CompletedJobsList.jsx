import "../../components-css/jobscape/CompletedJobsList.css";
import JobsListItem from "./JobsListItem";

export default function CompletedJobsList() {
  return (
    <>
      <div className="completed-jobs-container">
        <div className="jobs-list">
          <JobsListItem className="jobs-item" completed={true}></JobsListItem>
          <JobsListItem className="jobs-item" completed={true}></JobsListItem>
          <JobsListItem className="jobs-item" completed={true}></JobsListItem>
        </div>
      </div>
    </>
  );
}
