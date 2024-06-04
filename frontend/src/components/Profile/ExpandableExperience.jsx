import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import CancelIcon from '../../assets/icons/profile/cancel.svg';
import WorkCaseIcon from '../../assets/icons/profile/work-case-svgrepo-com 1.svg';
import '../../components-css/Profile/EditProfileCSS.css';

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
        navigate(`/AddNewExperience/${userId}`);
    };

    const handleEditExperience = (experienceId) => {
        navigate(`/EditExperience/${userId}/${experienceId}`);
    };

    return (
        <div className="w-100">
            <div className="d-flex flex-column gap-3">
                {inputs.map((experience, index) => (
                    <div key={index}>
                        <div className="d-flex position-relative">
                            <div className="experience-item">
                                <div className="title-and-icon justify-item-center">
                                    <img src={WorkCaseIcon} alt="Work Case Icon" className="work-case-icon" />
                                    <p>
                                        {experience.value.title}
                                    </p>

                                </div> <p className="details">
                                    {new Date(experience.value.from).toLocaleString('default', { month: 'long', year: 'numeric' })} -
                                    {experience.value.current ? ' Present' : ` ${new Date(experience.value.until).toLocaleString('default', { month: 'long', year: 'numeric' })}`}
                                </p>
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
                                alt="Cancel Icon"
                                style={{ width: '30px', height: '30px' }}
                                className="position-absolute end-0 top-50 translate-middle-y"
                            />
                        </div>
                    </div>
                ))}
            </div>
            <p onClick={handleAddExperience} className="edit-button"
                style={{
                    color: '#2D4777',
                    border: 'none',
                    padding: '5px 10px',
                    cursor: 'pointer',
                    marginRight: '10px'
                }}>+ Add new experience</p>
        </div>
    );
}

export default ExpandableExperience;
