import "../../components-css/jobscape/InProgressJobsList.css";
import JobsListItem from "./JobsListItem";
import { useEffect, useState } from "react";
import { getTakenProjects } from "../../api/projectApi";

export default function JobsListItemList() {
  const [takenProjects, setTakenProjects] = useState([]);
  // Fake user id just for testing
  // NEED TO BE MODIFIED ONCE USER SESSION IS IMPLEMENTED
  const userId = "665ae5b6a6b3bf91769e6d6e";
  useEffect(() => {
    const fetchTakenProjects = async () => {
      try {
        const response = await getTakenProjects(userId);
        // console.log("Fetched taken projects: ", response.takenProjects);
        setTakenProjects(response.takenProjects);
      } catch (error) {
        console.error("Error: " + error.message);
      }
    };
    fetchTakenProjects();
  }, []);

  useEffect(() => {
    console.log("Current taken projects: ", takenProjects);
  }, [takenProjects]);

  return (
    <>
      <div className="in-progress-jobs-container">
        <div className="jobs-list">
          {takenProjects.length > 0 ? (
            takenProjects.map((project, index) => {
              return (
                <JobsListItem className="jobs-item" key={index} {...project} />
              );
            })
          ) : (
            <p>No projects taken.</p>
          )}
        </div>
      </div>
    </>
  );
}
