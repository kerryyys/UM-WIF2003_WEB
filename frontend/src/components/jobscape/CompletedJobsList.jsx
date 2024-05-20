import "../../components-css/jobscape/CompletedJobsList.css";
import JobsListItem from "./JobsListItem";
import { useEffect, useState } from "react";
import { getCompletedProjects } from "../../api/projectApi";

export default function CompletedJobsList() {
  const [completedProjects, setCompletedProject] = useState([]);
  // Fake user id just for testing
  // NEED TO BE MODIFIED ONCE USER SESSION IS IMPLEMENTED
  const userId = "664a0e34bc1a43dbcb1f6d74";
  useEffect(() => {
    const fetchCompletedProjects = async () => {
      try {
        const response = await getCompletedProjects(userId);
        // console.log("Fetched taken projects: ", response.completedProjects);
        setCompletedProject(response.completedProjects);
      } catch (error) {
        console.error("Error: " + error.message);
      }
    };
    fetchCompletedProjects();
  }, []);

  useEffect(() => {
    console.log("Current completed projects: ", completedProjects);
  }, [completedProjects]);
  return (
    <>
      <div className="completed-jobs-container">
        <div className="jobs-list">
          {completedProjects.length > 0 ? (
            completedProjects.map((project, index) => {
              return (
                <JobsListItem
                  className="jobs-item"
                  key={index}
                  {...project}
                  completed={true}
                />
              );
            })
          ) : (
            <p>No projects completed.</p>
          )}
        </div>
      </div>
    </>
  );
}
