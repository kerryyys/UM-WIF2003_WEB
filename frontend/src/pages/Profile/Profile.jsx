import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import ProfileHeader from "../../components/Profile/ProfileHeader";
import Experience from "../../components/Profile/Experience";
import ProfilePic from "../../assets/images/profile_pic.svg";
import Skill from "../../components/Profile/Skill";
import JobHistory from "../../components/Profile/JobHistory";
import Dell from "../../assets/icons/jobscape/DellLogo.svg";
import "../../pages-css/Profile/Profile.css";
function Profile() {
  const profileData = {
    name: "Mehrab Bozorgi",
    university: "University of Malaya",
    location: "Petaling Jaya, Selangor",
    avatarSrc: ProfilePic,
    headline: "2nd Year Software Engineering Student of University of Malaya",
    tags: ["IT&Technology", "Creative and Design"],
  };

  const experiences = [
    {
      title: "Software Developer Intern",
      company: "Tech Company",
      location: "Kuala Lumpur, Malaysia",
      employmentType: "Internship",
      locationType: "On-site",
      description:
        "Worked on developing web applications using React and Node.js.",
    },
    {
      title: "Freelance Web Designer",
      company: "Freelance",
      location: "Remote",
      employmentType: "Freelance",
      locationType: "Remote",
      description:
        "Designed and developed responsive websites for various clients.",
    },
  ];

  const skills = ["React", "HTML", "CSS"];

  const jobInfos = [
    {
      avatar: Dell,
      jobTitle: "Web Development",
      company: "Dell Technology",
      status: "Completed",
      description:
        "Worked on developing web applications using React and Node.js.",
      duration: "Long Term",
      deadline: "Before August",
      skills: ["React", "Node.js", "JavaScript", "HTML", "CSS"],
      contact: "John Doe (john.doe@example.com)",
      additionalInfo: "Received Employee of the Month award in December 2023.",
    },
    {
      avatar: Dell,
      jobTitle: "Web Development",
      company: "Dell Technology",
      status: "Completed",
      description:
        "Worked on developing web applications using React and Node.js.",
      duration: "Long Term",
      deadline: "Before August",
      skills: ["React", "Node.js", "JavaScript", "HTML", "CSS"],
      contact: "John Doe (john.doe@example.com)",
      additionalInfo: "Received Employee of the Month award in December 2023.",
    },
  ];

  return (
    <Container fluid style={{ maxWidth: "70%" }}>
      <Container className="mt-5">
        <ProfileHeader {...profileData} />
      </Container>
      <Container className="mt-5">
        <Row className="justify-content-center">
          <Col md={5} xs={12}>
            <div className="section-header">
              <h6 className="text-center">EXPERIENCE</h6>
              <hr />
            </div>
            <Experience experiences={experiences} />
            <div className="section-header">
              <h6 className="text-center mt-4">SKILL</h6>
              <hr />
            </div>
            <Skill skills={skills} />
          </Col>
          <Col md={7} xs={12}>
            <div className="section-header">
              <h6 className="text-center">JOB HISTORY</h6>
              <hr />
            </div>
            <JobHistory jobInfos={jobInfos} />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Profile;
