import React, { useEffect, useRef, useState } from 'react';
import { Button, Container, Image, Modal } from 'react-bootstrap';
import ExpandableInput from '../../components/Profile/ExpandableInput';
import ExpandableExperience from '../../components/Profile/ExpandableExperience';
import default_avatar from '../../assets/icons/profile/avatar-default-symbolic-svgrepo-com.svg';
import UploadPicIcon from '../../assets/icons/profile/upload_pic.svg';
import { useNavigate, useParams } from 'react-router-dom';
import '../../components-css/Profile/EditProfileCSS.css';

function EditProfile() {
    // const { userId } = useParams();
    const userId = "6642605a39cd67056f64cec6";
    const navigate = useNavigate();
    const fileInputRef = useRef(null);

    const [profileData, setProfileData] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const getProfileData = async () => {
        try {
            const response = await fetch(`http://localhost:5050/users/${userId}`, {
                method: 'GET'
            });
            const result = await response.json();
            console.log(result);
            setProfileData(result.data || {});
        } catch (error) {
            console.error('Error fetching profile data:', error);
        }
    };

    useEffect(() => {
        getProfileData();
    }, [userId]);

    const handleSave = async () => {
        try {
            const response = await fetch(`http://localhost:5050/users/${userId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(profileData)
            });
            if (response.ok) {
                navigate(`/Profile/${userId}`);
            } else {
                console.error('Error updating profile data');
            }
        } catch (error) {
            console.error('Error updating profile data:', error);
        }
    };

    const handleCancel = () => {
        navigate(`/Profile/${userId}`);
    };

    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            setProfileData({ ...profileData, profilePic: reader.result });
            setShowModal(false);
        };
        if (file) {
            reader.readAsDataURL(file);
        }
    };

    const handleRemovePicture = async () => {
        try {
            const response = await fetch(`http://localhost:5050/users/${userId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ ...profileData, profilePic: '' })
            });
            if (response.ok) {
                setProfileData({ ...profileData, profilePic: '' });
                setShowModal(false);
            } else {
                console.error('Error removing profile picture');
            }
        } catch (error) {
            console.error('Error removing profile picture:', error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProfileData({ ...profileData, [name]: value });
    };

    const handleCategoryChange = (newCategories) => {
        setProfileData({ ...profileData, categories: newCategories });
    };

    const handleSkillChange = (newSkills) => {
        setProfileData({ ...profileData, skill: newSkills });
    };

    const handleExperienceChange = (newExperiences) => {
        setProfileData({ ...profileData, experience: newExperiences });
    };

    if (!profileData) {
        return <div>Loading...</div>;
    }

    return (
        <Container className="d-flex justify-content-center align-items-center">
            <div className="mt-5 w-50">
                <h5>Edit Profile</h5>
                <Container className="text-center">
                    <div className="profile-pic-container position-relative d-inline-flex justify-content-center">
                        <Image
                            src={profileData.profilePic ? profileData.profilePic : default_avatar}
                            roundedCircle
                            style={{ width: '150px', height: '150px' }}
                        />
                        <input
                            type="file"
                            ref={fileInputRef}
                            onChange={handleFileUpload}
                            style={{ display: 'none' }}
                        />
                        <img
                            src={UploadPicIcon}
                            alt="Upload Pic"
                            className="upload-icon position-absolute bottom-0 end-0"
                            style={{ width: '30px', height: '30px', cursor: 'pointer' }}
                            onClick={() => setShowModal(true)}
                        />
                    </div>
                </Container>

                <div className="d-flex gap-5 w-100" style={{ marginTop: '20px' }}>
                    <div style={{ width: '50%' }}>
                        <p style={{ fontWeight: '700' }}>First Name</p>
                        <input
                            className="smallInput"
                            type="text"
                            name="firstName"
                            value={profileData.firstName || ''}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div style={{ width: '50%' }}>
                        <p style={{ fontWeight: '700' }}>Last Name</p>
                        <input
                            className="smallInput"
                            type="text"
                            name="lastName"
                            value={profileData.lastName || ''}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>
                <div>
                    <p style={{ fontWeight: '700' }}>Headline</p>
                    <input
                        className="bigInput"
                        type="text"
                        name="headline"
                        value={profileData.headline || ''}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="d-flex gap-5">
                    <div style={{ width: '50%' }}>
                        <p style={{ fontWeight: '700' }}>City</p>
                        <input
                            className="smallInput"
                            type="text"
                            name="city"
                            value={profileData.city || ''}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div style={{ width: '50%' }}>
                        <p style={{ fontWeight: '700' }}>State</p>
                        <input
                            className="smallInput"
                            type="text"
                            name="state"
                            value={profileData.state || ''}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>
                <div>
                    <p style={{ fontWeight: '700' }}>University</p>
                    <input
                        className="bigInput"
                        type="text"
                        name="university"
                        value={profileData.university || ''}
                        onChange={handleInputChange}
                    />
                </div>

                <div className="mt-3">
                    <p style={{ fontWeight: '700' }}>Category</p>
                    <ExpandableInput
                        defaultWords={profileData.categories || []}
                        title="category"
                        onChange={handleCategoryChange}
                    />
                </div>
                <div>
                    <p style={{ fontWeight: '700' }}>Experience</p>
                    <ExpandableExperience
                        defaultWords={profileData.experience || []}
                        onChange={handleExperienceChange}
                        userId={userId}
                    />
                </div>
                <div>
                    <p style={{ fontWeight: '700' }}>Skill</p>
                    <ExpandableInput
                        defaultWords={profileData.skill || []}
                        title="skill"
                        onChange={handleSkillChange}
                    />
                </div>
                <div
                    style={{ display: 'flex', marginBottom: '50px' }}
                    className="gap-5 justify-content-center"
                >
                    <Button
                        onClick={handleSave}
                        style={{
                            background: '#2D4877',
                            width: '100px',
                            border: 'none',
                        }}
                    >
                        Save
                    </Button>
                    <Button
                        onClick={handleCancel}
                        style={{
                            color: '#2D4877',
                            background: '#FFFFFF',
                            width: '100px',
                            border: '1px solid #2D4877',
                        }}
                    >
                        Cancel
                    </Button>
                </div>
            </div>

            {/* Modal for Upload Picture */}
            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Update Profile Picture</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Button variant="primary" onClick={() => fileInputRef.current.click()}>
                        Upload Picture
                    </Button>
                    <Button variant="danger" onClick={handleRemovePicture} className="ms-2">
                        Remove Picture
                    </Button>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
}

export default EditProfile;
