import React, { useState } from "react";
import "../../components-css/jobscape/ProjectDetailsModal.css";

const ProjectDetailsModal = ({
  project,
  onClose,
  onAccept,
  onReject,
  fileAccepted,
  fileRejected,
}) => {
  const [isFileAccepted, setIsFileAccepted] = useState(fileAccepted);
  const [isFileRejected, setIsFileRejected] = useState(fileRejected);

  const handleDownloadAll = () => {
    project.uploadedFiles.forEach((file) => {
      if (file.fileUrl) {
        const link = document.createElement("a");
        link.href = file.fileUrl;
        link.download = file.fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    });
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  return (
    <div className="projectModal">
      <div className="project-modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>{project.projectTitle}</h2>
        <p>
          <strong>Company:</strong>
        </p>
        <p className="details-content">{project.companyName}</p>
        <p>
          <strong>Description:</strong>
        </p>
        <p className="details-content">{project.projectDescription}</p>
        <p>
          <strong>Location:</strong>
        </p>
        <p className="details-content">{project.location}</p>
        <p>
          <strong>Category:</strong>
        </p>
        <p className="details-content">{project.projectCategory}</p>
        <p>
          <strong>Duration:</strong>
        </p>
        <p className="details-content">{project.projectDuration}</p>
        <p>
          <strong>Budget:</strong>
        </p>
        <p className="details-content">{project.projectBudget}</p>
        <p>
          <strong>Deadline:</strong>
        </p>
        <p className="details-content">{formatDate(project.deadline)}</p>
        <p>
          <strong>Skills Required:</strong>
        </p>
        <p className="details-content">{project.requiredSkills.join(", ")}</p>
        <p>
          <strong>Additional Notes:</strong>
        </p>
        <p className="details-content">{project.additionalNotes}</p>
        <p style={{ gridColumn: "1 / -1" }}>
          <strong>Uploaded Files</strong>
        </p>
        {project.uploadedFiles && project.uploadedFiles.length > 0 ? (
          <ul style={{ gridColumn: "1 / -1" }}>
            {project.uploadedFiles.map((file, index) => (
              <li
                key={index}
                className={!file.fileUrl ? "file-not-available" : ""}
              >
                {file.fileName}
              </li>
            ))}
          </ul>
        ) : (
          <p style={{ gridColumn: "1 / -1", color: "red" }}>
            No files uploaded
          </p>
        )}
        {isFileAccepted && (
          <div className="file-accepted-message">
            You have accepted the Submission, please make payment.
          </div>
        )}
        
        {project.uploadedFiles &&
          project.uploadedFiles.length > 0 &&
          !isFileAccepted && (
            <div className="button-container">
              <button
                onClick={() => {
                  onAccept();
                  setIsFileAccepted(true);
                  setIsFileRejected(false);
                }}
                className="accept"
                disabled={isFileRejected}
              >
                ACCEPT
              </button>
              <button
                onClick={() => {
                  onReject();
                  setIsFileRejected(true);
                  setIsFileAccepted(false);
                }}
                className="reject"
                disabled={isFileAccepted}
              >
                REJECT
              </button>
            </div>
          )}
        {project.uploadedFiles && project.uploadedFiles.length > 0 && (
          <div className="download-container">
            <button onClick={handleDownloadAll} className="download">
              DOWNLOAD
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectDetailsModal;