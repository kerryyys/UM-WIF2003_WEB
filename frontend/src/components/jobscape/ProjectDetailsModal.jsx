import React from "react";
import "../../components-css/jobscape/ProjectDetailsModal.css";

const ProjectDetailsModal = ({ project, onClose }) => {
  const handleDownload = (fileUrl, fileName) => {
    if (fileUrl) {
      const link = document.createElement("a");
      link.href = fileUrl;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      alert("File not available for download.");
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-based
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
        <p>{project.companyName}</p>
        <p>
          <strong>Description:</strong>
        </p>
        <p>{project.projectDescription}</p>
        <p>
          <strong>Location:</strong>
        </p>
        <p>{project.location}</p>
        <p>
          <strong>Category:</strong>
        </p>
        <p>{project.projectCategory}</p>
        <p>
          <strong>Duration:</strong>
        </p>
        <p>{project.projectDuration}</p>
        <p>
          <strong>Budget:</strong>
        </p>
        <p>{project.projectBudget}</p>
        <p>
          <strong>Deadline:</strong>
        </p>
        <p>{formatDate(project.deadline)}</p>
        <p>
          <strong>Skills Required:</strong>
        </p>
        <p>{project.requiredSkills.join(", ")}</p>
        <p>
          <strong>Additional Notes:</strong>
        </p>
        <p>{project.additionalNotes}</p>
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
                <button
                  onClick={() => handleDownload(file.fileUrl, file.fileName)}
                >
                  Download
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p style={{ gridColumn: "1 / -1", color: "red" }}>
            No files uploaded
          </p>
        )}
      </div>
    </div>
  );
};

export default ProjectDetailsModal;
