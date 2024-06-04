import React, { useEffect, useState } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "../../components-css/Profile/JobHistoryCSS.css";
import { useNavigate } from "react-router-dom";
// import axios from "../utils/customAxios";

const JobHistory = ({ userId }) => {
  const [jobInfos, setJobInfos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCompletedProjects = async () => {
      try {
        // const response = await axios.get(`/api/completed-projects/${userId}`);
        // setJobInfos(response.data.completedProjects);
      } catch (error) {
        console.error("Error fetching completed projects:", error);
      }
    };

    fetchCompletedProjects();
  }, [userId]);

  const handleClick = (projectId) => {
    navigate(`/JobDetailsPage/${projectId}`);
  };

  return (
    <>
      {jobInfos.map((jobInfo, index) => (
        <div key={index} className="job-history-card">
          <Row className="header">
            <Col xs={2} className="avatar-column">
              <Image
                src={`data:${jobInfo.companyLogo.contentType};base64,${jobInfo.companyLogo.data}`}
                roundedCircle
                style={{ width: "70px" }}
              />
            </Col>
            <Col xs={7} className="info-column">
              <h3 className="fs-5">{jobInfo.projectTitle}</h3>
              <p>{jobInfo.companyName}</p>
            </Col>
            <Col xs={3} className="status-column fs-6">
              <p>{jobInfo.completed ? "Completed" : "Ongoing"}</p>
            </Col>
          </Row>
          <Row className="JobHistoryContent">
            <Col>
              <p>
                <strong>Project Description:</strong>
                <br />
                {jobInfo.projectDescription}
              </p>
              <p>
                <strong>Project Duration:</strong> {jobInfo.projectDuration}
              </p>
              <p>
                <strong>Deadline for completion:</strong> {jobInfo.deadline}
              </p>
              <p>
                <strong>Contact Information:</strong>
                <br /> {jobInfo.contactInformation}
              </p>
            </Col>
          </Row>
          <Row className="see-more" onClick={() => handleClick(jobInfo._id)}>
            <Col>
              <p>See More...</p>
            </Col>
          </Row>
        </div>
      ))}
    </>
  );
};

export default JobHistory;

// import React from "react";
// import { Container, Row, Col, Image } from "react-bootstrap";
// import "../../components-css/Profile/JobHistoryCSS.css";
// import { useNavigate } from "react-router-dom";
// import JobDetailsPage from "../../pages/Jobscape/JobDetailsPage";

// const JobHistory = ({ jobInfos=[] }) => {
//   const navigate = useNavigate();

//   const handleClick = () => {
//     navigate("/JobDetailsPage");
//   };

//   return (
//     <>
//       {jobInfos.map((jobInfo, index) => (
//         <div key={index} className="job-history-card">
//           <Row className="header">
//             <Col xs={2} className="avatar-column">
//               <Image
//                 src={jobInfo.avatar}
//                 roundedCircle
//                 style={{ width: "70px" }}
//               />
//             </Col>
//             <Col xs={7} className="info-column">
//               <h3 className="fs-5">{jobInfo.jobTitle}</h3>
//               <p>{jobInfo.company}</p>
//             </Col>
//             <Col xs={3} className="status-column fs-6">
//               <p>{jobInfo.status}</p>
//             </Col>
//           </Row>
//           <Row className="JobHistoryContent">
//             <Col>
//               <p>
//                 <strong>Job Description:</strong>
//                 <br />
//                 {jobInfo.description}
//               </p>
//               <p>
//                 <strong>Project Duration:</strong> {jobInfo.duration}
//               </p>
//               <p>
//                 <strong>Deadline for completion:</strong> {jobInfo.deadline}
//               </p>
//               <p>
//                 <strong>Contact Information:</strong>
//                 <br /> {jobInfo.contact}
//               </p>
              
//             </Col>
//           </Row>
//           <Row className="see-more" onClick={handleClick}>
//             <Col>
//               <p>See More...</p>
//             </Col>
//           </Row>
//         </div>
//       ))}
//     </>
//   );
// };

// export default JobHistory;
