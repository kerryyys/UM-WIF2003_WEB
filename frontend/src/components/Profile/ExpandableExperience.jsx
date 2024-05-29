import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import CancelIcon from '../../assets/icons/profile/cancel.svg';
import WorkCaseIcon from '../../assets/icons/profile/work-case-svgrepo-com 1.svg'
import '../../components-css/Profile/EditProfileCSS.css'

function ExpandableExperience({ defaultWords = [], onChange, userId }) {
    const [inputs, setInputs] = useState([]);
    const [nextId, setNextId] = useState(2);
    const navigate = useNavigate();

    useEffect(() => {
        const initialInputs = defaultWords.map((word, index) => ({
            id: index + 1,
            value: word
        }));
        setInputs(initialInputs);
        if (initialInputs.length > 0) {
            setNextId(initialInputs[initialInputs.length - 1].id + 1);
        } else {
            setNextId(1);
        }
    }, [defaultWords]);

    const handleCancel = (id) => {
        const updatedInputs = inputs.filter(input => input.id !== id);
        setInputs(updatedInputs);
        onChange(updatedInputs.map(input => input.value));
    };

    const handleAddExperience = () => {
        navigate(`/AddNewExperience/${userId}`); // Navigate to AddNewExperience page
    };

    const handleEditExperience = (experienceId) => {
        navigate(`/EditExperience/${userId}/${experienceId}`); // Navigate to EditExperiences page
    };

    return (
        <div className="w-100">
            <div className="d-flex flex-column gap-3">
                {inputs.map((experience, index) => (
                    <div>
                    <div key={index} className="d-flex position-relative">
                        <div key={index} className="experience-item">
                            <div className="title-and-icon justify-item-center">
                                <img src={WorkCaseIcon} alt="Work Case Icon" className="work-case-icon" />
                                <h6>{experience.value.title}</h6>
                            </div>
                            <div className="details">
                                <p>
                                    {experience.value.company} | {experience.value.location} <br />
                                    {experience.value.employmentType} | {experience.value.locationType} <br />
                                    {experience.value.description}
                                </p>
                            </div>
                        </div>

                        <button
                            onClick={() => handleEditExperience(experience.value._id)}
                            className="position-absolute end-0 top-0 translate-middle edit-button"
                        >
                            Edit
                        </button>

                        <img
                            onClick={() => handleCancel(experience.id)}
                            src={CancelIcon}
                            style={{ width: '30px', height: '30px' }}
                            className="position-absolute end-0 top-50 translate-middle"
                        />
                    </div>
                    <div className="border" />
                    </div>
                ))}
            </div>

            <p onClick={handleAddExperience} style={{ color: '#2D4777' }}>+ Add new experience</p>
        </div>
    );
}

export default ExpandableExperience;
