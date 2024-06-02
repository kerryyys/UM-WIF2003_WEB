import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Container } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../../components-css/Profile/EditProfileCSS.css';

function AddNewExperience() {
    const { userId } = useParams();
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
        until: new Date()
    });

    const handleSave = async () => {
        try {
            const response = await fetch(`http://localhost:5050/users/${userId}/addExperience`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(info)
            });
            if (response.ok) {
                navigate(`/EditProfile/${userId}`);
            } else {
                console.error('Error updating profile data');
            }
        } catch (error) {
            console.error('Error updating profile data:', error);
        }
    };

    const handleCancel = () => {
        navigate(`/EditProfile/${userId}`);
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

    const handleDateChange = (date, field) => {
        setInfo(prevInfo => ({
            ...prevInfo,
            [field]: date
        }));
    };

    return (
        <Container className='d-flex justify-content-center align-items-center'>
            <div className='mt-5 w-50'>
                <p style={{ fontSize:'20px' }}>Add Experience</p>
                <div style={{ marginLeft: '3px',marginTop:'10px' }}>
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
                            onChange={date => handleDateChange(date,'from' )}
                            className="bigInput"
                            dateFormat="MMMM yyyy"
                            showMonthYearPicker
                        />
                    </div>

                    <div>
                        <p>Until</p>
                        <DatePicker
                            selected={info.until}
                            onChange={date => handleDateChange(date, 'until')}
                            className="bigInput"
                            dateFormat="MMMM yyyy"
                            showMonthYearPicker
                            disabled={info.current}
                        />
                    </div>
                    </div>
                </div>

                <div style={{ display: 'flex', marginBottom: '50px' }} className='gap-5 justify-content-center mt-5'>
                    <Button onClick={handleSave} style={{ background: '#2D4777', width: '100px', border: "none" }}>Save</Button>
                    <Button onClick={handleCancel} style={{ color: '#2D4777', background: '#FFFFFF', width: '100px', border: "1px solid #2D4877" }}>Cancel</Button>
                </div>
            </div>
        </Container>
    );
}

export default AddNewExperience;
