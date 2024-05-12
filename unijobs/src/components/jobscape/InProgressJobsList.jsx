import "../../components-css/jobscape/InProgressJobsList.css";
import JobsListItem from "./JobsListItem";

export default function JobsListItemList() {
  return (
    <>
      <div className="in-progress-jobs-container">
        <div className="jobs-list">
          <JobsListItem className="jobs-item"></JobsListItem>
          <JobsListItem className="jobs-item"></JobsListItem>
          <JobsListItem className="jobs-item"></JobsListItem>
        </div>
      </div>
    </>
  );
}
