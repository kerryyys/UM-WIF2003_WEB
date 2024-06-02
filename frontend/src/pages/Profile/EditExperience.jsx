import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Container } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../../components-css/Profile/EditProfileCSS.css';

function EditExperience() {
    const { userId, experienceId } = useParams();
    const navigate = useNavigate();

    const [info, setInfo] = useState({
        title: '',
        employmentType: '',
        company: '',
        location: '',
        locationType: '',
        description: '',
        current: false,
        from: new Date(),
        until: null
    });

    useEffect(() => {
        const fetchExperience = async () => {
            try {
                const response = await fetch(`http://localhost:5050/users/${userId}/experience/${experienceId}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                });

                if (response.ok) {
                    const experience = await response.json();
                    setInfo({
                        title: experience.title,
                        employmentType: experience.employmentType,
                        company: experience.company,
                        location: experience.location,
                        locationType: experience.locationType,
                        description: experience.description,
                        current: experience.current,
                        from: experience.from ? new Date(experience.from) : new Date(),
                        until: experience.until ? new Date(experience.until) : null
                    });
                } else {
                    console.error('Error fetching experience data');
                }
            } catch (error) {
                console.error('Error fetching experience data:', error);
            }
        };

        fetchExperience();
    }, [userId, experienceId]);

    const handleSave = async () => {
        try {
            const response = await fetch(`http://localhost:5050/users/${userId}/editExperience/${experienceId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(info)
            });
            if (response.ok) {
                navigate(`/EditProfile/${userId}`);
            } else {
                console.error('Error updating experience data');
            }
        } catch (error) {
            console.error('Error updating experience data:', error);
        }
    };

    const handleCancel = () => {
        navigate(`/EditProfile/${userId}`); // Navigate to EditProfile page
    };

    const employmentTypeOptions = [
        'Part-time',
        'Freelance',
        'Self-employed',
        'Contract',
        'Internship',
        'Apprenticeship',
        'Seasonal'
    ];

    const locationTypeOptions = [
        'On-site',
        'Hybrid',
        'Remote',
    ];

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setInfo(prevInfo => ({
            ...prevInfo,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleDateChange = (name, date) => {
        setInfo(prevInfo => ({
            ...prevInfo,
            [name]: date
        }));
    };

    return (
        <Container className='d-flex justify-content-center align-items-center'>
            <div className='mt-5 w-50'>
                <h5>Edit Experience</h5>
                <div style={{ marginLeft: '3px' }}>
                    <div>
                        <p>Title</p>
                        <input 
                            className="bigInput" 
                            type="text" 
                            name="title" 
                            value={info.title} 
                            onChange={handleChange} 
                        />
                    </div>

                    <div>
                        <p>Employment type</p>
                        <select 
                            className="bigInput" 
                            name="employmentType" 
                            value={info.employmentType} 
                            onChange={handleChange}
                        >
                            <option value="">Select employment type</option>
                            {employmentTypeOptions.map(option => (
                                <option key={option} value={option}>{option}</option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <p>Company</p>
                        <input 
                            className="bigInput" 
                            type="text" 
                            name="company" 
                            value={info.company} 
                            onChange={handleChange} 
                        />
                    </div>

                    <div>
                        <p>Location</p>
                        <input 
                            className="bigInput" 
                            type="text" 
                            name="location" 
                            value={info.location} 
                            onChange={handleChange} 
                        />
                    </div>

                    <div>
                        <p>Location type</p>
                        <select 
                            className="bigInput" 
                            name="locationType" 
                            value={info.locationType} 
                            onChange={handleChange}
                        >
                            <option value="">Select location type</option>
                            {locationTypeOptions.map(option => (
                                <option key={option} value={option}>{option}</option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <p>Description</p>
                        <textarea 
                            rows={5} 
                            className="w-100" 
                            name="description" 
                            value={info.description} 
                            onChange={handleChange} 
                        />
                    </div>

                    <div className="form-check mt-3">
                        <input 
                            className="form-check-input" 
                            type="checkbox" 
                            id="currentlyWorkingCheckbox" 
                            name="current" 
                            checked={info.current} 
                            onChange={handleChange} 
                        />
                        <label className="form-check-label" htmlFor="currentlyWorkingCheckbox">
                            I am currently working in this role
                        </label>
                    </div>

                    <div style={{ display: 'flex'}} className='gap-5 mt-3'>
                    <div>
                        <p>From</p>
                        <DatePicker
                            selected={info.from}
                            onChange={date => handleDateChange('from', date)}
                            className="bigInput"
                            dateFormat="MMMM yyyy"
                            showMonthYearPicker
                        />
                    </div>

                    <div>
                        <p>Until</p>
                        <DatePicker
                            selected={info.until}
                            onChange={date => handleDateChange('until', date)}
                            className="bigInput"
                            disabled={info.current}
                            dateFormat="MMMM yyyy"
                            showMonthYearPicker
                        />
                    </div></div>
                </div>

                <div style={{ display: 'flex', marginBottom: '50px' }} className='gap-5 justify-content-center mt-5'>
                    <Button onClick={handleSave} style={{ background: '#2D4777', width: '100px', border: "none" }}>Save</Button>
                    <Button onClick={handleCancel} style={{ color: '#2D4777', background: '#FFFFFF', width: '100px', border: "1px solid #2D4877" }}>Cancel</Button>
                </div>
            </div>
        </Container>
    );
}

export default EditExperience;
