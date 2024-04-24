import React, { useRef } from 'react';
import { Button, Container, Image } from 'react-bootstrap';
import ExpandableInput from '../../components/Profile/ExpandableInput';
import ExpandableExperience from '../../components/Profile/ExpandableExperience';
import ProfilePic from '../../assets/images/profile_pic.svg';
import UploadPicIcon from '../../assets/icons/profile/upload_pic.svg';
import { useNavigate } from "react-router-dom";
import '../../components-css/Profile/EditProfileCSS.css';
import Profile from './Profile';

function EditProfile() {
    const info = {
        FirstName: 'Mehrab',
        LastName: 'Bozorgi',
        Headline: '2nd Year Software Engineering Student of University of Malaya',
        City: 'Petaling Jaya',
        State: 'Selangor',
        University: 'University of Malaya'
    };
    const navigate = useNavigate();
    const fileInputRef = useRef(null);

    const handleSave = () => {
        //handleSubmit
        navigate('/Profile'); // Navigate to Profile page
    };

    const handleCancel = () => {
        navigate('/Profile'); // Navigate to Profile page
    };

    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        // Process the uploaded file here
    };

    return (
      <>
        <Container className="d-flex justify-content-center align-items-center ">
          <div className="mt-5 w-50">
            <h5>Edit Profile</h5>

            <Container className="text-center">
              <div className="profile-pic-container position-relative d-inline-flex justify-content-center ">
                <Image
                  src={ProfilePic}
                  roundedCircle
                  style={{ width: "150px", height: "150px" }}
                />
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileUpload}
                  style={{ display: "none" }}
                />
                <img
                  src={UploadPicIcon}
                  alt="Upload Pic"
                  className="upload-icon position-absolute bottom-0 end-0"
                  style={{ width: "30px", height: "30px", cursor: "pointer" }}
                  onClick={() => fileInputRef.current.click()}
                />
              </div>
            </Container>

            <div class="d-flex gap-5 w-100 " style={{marginTop:"20px"}}>
              <div style={{ width: "50%" }}>
                <p style={{ fontWeight: "700" }}>First Name</p>
                <input
                  className="smallInput"
                  type="text"
                  defaultValue={info.FirstName}
                />
              </div>

              <div style={{ width: "50%" }}>
                <p style={{ fontWeight: "700" }}>Last Name</p>
                <input
                  className="smallInput"
                  type="text"
                  defaultValue={info.LastName}
                />
              </div>
            </div>

            <div>
              <p style={{ fontWeight: "700" }}>Headline</p>
              <input
                className="bigInput"
                type="text"
                defaultValue={info.Headline}
              />
            </div>

            <div class="d-flex gap-5">
              <div style={{ width: "50%" }}>
                <p style={{ fontWeight: "700" }}>City</p>
                <input
                  className="smallInput"
                  type="text"
                  defaultValue={info.City}
                />
              </div>

              <div style={{ width: "50%" }}>
                <p style={{ fontWeight: "700" }}>State</p>
                <input
                  className="smallInput"
                  type="text"
                  defaultValue={info.State}
                />
              </div>
            </div>
            <div>
              <p style={{ fontWeight: "700" }}>University</p>
              <input
                className="bigInput"
                type="text"
                defaultValue={info.University}
              />
            </div>

            <div className="mt-3">
              <p style={{ fontWeight: "700" }}>Category</p>
              <ExpandableInput
                defaultWords={["IT & Technology", "Creative and Design"]}
                title="category"
              />
            </div>

            <div>
              <p style={{ fontWeight: "700" }}>Experience</p>
              <ExpandableExperience defaultWords={["1", "2"]} />
            </div>
            <div>
              <p style={{ fontWeight: "700" }}>Skill</p>
              <ExpandableInput
                defaultWords={["React", "HTML", "CSS", "Java"]}
                title="skill"
              />
            </div>

            <div
              style={{ display: "flex", marginBottom: "50px" }}
              className="gap-5 justify-content-center "
            >
              <Button
                onClick={handleSave}
                style={{
                  background: "#2D4877",
                  width: "100px",
                  border: "none",
                }}
              >
                Save
              </Button>
              <Button
                onClick={handleCancel}
                style={{
                  color: "#2D4877",
                  background: "#FFFFFF",
                  width: "100px",
                  border: "1px solid #2D4877",
                }}
              >
                Cancel
              </Button>
            </div>
          </div>
        </Container>
      </>
    );
}

export default EditProfile;
