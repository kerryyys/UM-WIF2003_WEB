import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import ProfileHeader from "../../components/Profile/ProfileHeader";
import Experience from "../../components/Profile/Experience";
import Skill from "../../components/Profile/Skill";
import JobHistory from "../../components/Profile/JobHistory";
import "../../pages-css/Profile/Profile.css";
import { useParams } from "react-router-dom";

function Profile() {
  // const { userId } = useParams();
  const userId = "6642605a39cd67056f64cec6";
  const [profile, setProfile] = useState({});

  const getProfileData = async () => {
    try {
      const response = await fetch(`http://localhost:5000/users/${userId}`, {
        method: "GET"
      });
      const result = await response.json();
      setProfile(result.data);
    } catch (error) {
      console.error('Error fetching profile data:', error);
    }
  };

  useEffect(() => {
    getProfileData();
  }, []);

  return (
    <Container fluid style={{ maxWidth: "70%" }}>
      <Container className="mt-5">
        <ProfileHeader
          name={`${profile.firstName} ${profile.lastName}`}
          university={profile.university}
          location={`${profile.city}, ${profile.state}`}
          avatarSrc={profile.profilePic}  
          headline={profile.headline}
          tags={profile.categories}
          userId={userId}
        />
      </Container>
      <Container className="mt-5">
        <Row className="justify-content-center">
          <Col md={5} xs={12}>
            <div className="section-header">
              <h6 className="text-center">EXPERIENCE</h6>
              <hr />
            </div>
            <Experience experiences={profile.experience} />
            <div className="section-header">
              <h6 className="text-center mt-4">SKILL</h6>
              <hr />
            </div>
            <Skill skills={profile.skill} />
          </Col>
          <Col md={7} xs={12}>
            <div className="section-header">
              <h6 className="text-center">JOB HISTORY</h6>
              <hr />
            </div>
            <JobHistory jobInfos={profile.jobHistory} />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Profile;
