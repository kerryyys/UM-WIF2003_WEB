import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container, Image } from 'react-bootstrap';
import '../../components-css/Profile/EditProfileCSS.css';

function AddNewExperience() {
    const navigate = useNavigate();

    const handleSave = () => {
      //handleSubmit
            navigate('/EditProfile'); // Navigate to EditProfile page
        
    };

    const handleCancel = () => {
        navigate('/EditProfile'); // Navigate to EditProfile page
    };

    const info = {
        title: 'Internship in Dell Technologies',
        employmentType: 'Employment type',
        company: 'Dell Technologies',
        location: 'Cyberjaya,Selangor',
        location_type: 'Remote',
        description: 'Work as frontend developer using React'
    };

    const [selectedEmploymentType, setSelectedEmploymentType] = useState('');
    const [selectedLocationType, setSelectedLocationType] = useState('');

    // Options for employment type dropdown
    const employmentTypeOptions = [
        'Part-time',
        'Freelance',
        'Self-employed',
        'Contract',
        'Internship',
        'Apprenticeship',
        'Seasonal'
    ];

    // Options for location type dropdown
    const locationTypeOptions = [
        'On-site',
        'Hybrid',
        'Remote',

    ];

    // Function to handle changes in the dropdown selection
    const handleEmploymentTypeChange = (event) => {
        setSelectedEmploymentType(event.target.value);
    };

    const handleLocationTypeChange = (event) => {
        setSelectedLocationType(event.target.value);
    };

    return (
        <Container className='d-flex justify-content-center align-items-center  '>
            <div className='mt-5 w-50'>
                <h5>Add Experience</h5>
            <div  style={{ marginLeft: '3px' }}>
                <div>
                    <p>Title</p>
                    <input className="bigInput" type="text"  />
                </div>

                <div>
                    <p>Employment type</p>
                    <select className="bigInput" value={selectedEmploymentType} onChange={handleEmploymentTypeChange}>
                        <option value="">Select employment type</option>
                        {employmentTypeOptions.map(option => (
                            <option key={option} value={option}>{option}</option>
                        ))}
                    </select>
                </div>

                <div>
                    <p>Location</p>
                    <input className="bigInput" type="text"  />
                </div>

                <div>
                    <p>Location type</p>
                    <select className="bigInput" value={selectedLocationType} onChange={handleLocationTypeChange}>
                        <option value="">Select location type</option>
                        {locationTypeOptions.map(option => (
                            <option key={option} value={option}>{option}</option>
                        ))}
                    </select>
                </div>

                <div>
                    <p>Description</p>
                    <textarea rows={5} className="w-100" />
                </div>

                <div className="form-check mt-3">
                    <input className="form-check-input " type="checkbox" id="currentlyWorkingCheckbox" />
                    <label className="form-check-label" htmlFor="currentlyWorkingCheckbox">
                        I am currently working in this role
                    </label>
                </div>

                </div>

                <div style={{display:'flex',marginBottom:'50px'}} className='gap-5 justify-content-center mt-5'>
                <Button onClick={handleSave} style={{background:'#2D4777',width:'100px',border:"none"}}>Save</Button>
                <Button onClick={handleCancel} style={{color:'#2D4777',background:'#FFFFFF',width:'100px',border:"1px solid #2D4877"}}>Cancel</Button>


            </div>



            </div>
        </Container>
    );
}

export default AddNewExperience;
