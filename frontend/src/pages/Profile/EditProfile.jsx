import React, { useEffect, useRef, useState } from 'react';
import { Button, Container, Image, Modal } from 'react-bootstrap';
import ExpandableInput from '../../components/Profile/ExpandableInput';
import ExpandableExperience from '../../components/Profile/ExpandableExperience';
import default_avatar from '../../assets/icons/profile/avatar-default-symbolic-svgrepo-com.svg';
import UploadPicIcon from '../../assets/icons/profile/upload_pic.svg';
import { useNavigate, useParams } from 'react-router-dom';
import '../../components-css/Profile/EditProfileCSS.css';

function EditProfile() {
    const { userId } = useParams();
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
            console.log("hi", profileData)
            const response = await fetch(`http://localhost:5050/users/${userId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(profileData),
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
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfileData({
                    ...profileData, profilePic: reader.result.split(',')[1],
                    // profilePic: {
                    //     data: reader.result.split(',')[1], // Extracting base64 string from Data URL
                    //     contentType: file.type
                    // }
                });
                setShowModal(false);
            };
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
                body: JSON.stringify({ ...profileData, profilePic: '', profilePicContentType: '' })
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
                        
                            src={profileData.profilePic ? `data:${profileData.profilePic};base64,${profileData.profilePic}` : default_avatar}
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
                    <p style={{ fontWeight: '700' }}>Skills</p>
                    <ExpandableInput
                        defaultWords={profileData.skill || []}
                        title="skills"
                        onChange={handleSkillChange}
                    />
                </div>
                <div>
                    <p style={{ fontWeight: '700' }}>Experiences</p>
                    <ExpandableExperience
                        defaultWords={profileData.experience || []}
                        userId={userId}
                        onChange={handleExperienceChange}
                    />
                </div>

                <Modal show={showModal} onHide={() => setShowModal(false)} centered>
                    <Modal.Header closeButton>
                        <Modal.Title>Upload Profile Picture</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="d-flex flex-column align-items-center">
                        <Button onClick={() => fileInputRef.current.click()}>Choose Picture</Button>
                        <Button variant="danger" className="mt-3" onClick={handleRemovePicture}>Remove Picture</Button>
                    </Modal.Body>
                </Modal>

                <div className="mt-5 mb-5 d-flex justify-content-center gap-5">
                    <Button variant="outline-primary" onClick={handleCancel}>Cancel</Button>
                    <Button onClick={handleSave}>Save</Button>
                </div>
            </div>
        </Container>
    );
}

export default EditProfile;
