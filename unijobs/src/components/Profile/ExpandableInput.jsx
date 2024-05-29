import React, { useState, useEffect } from "react";
import CancelIcon from '../../assets/icons/profile/cancel.svg';
import '../../components-css/Profile/EditProfileCSS.css';

function ExpandableInput({ defaultWords, title, onChange }) {
    const [inputs, setInputs] = useState([]);
    const [nextId, setNextId] = useState(2);

    useEffect(() => {
        const initialInputs = defaultWords.map((word, index) => ({
            id: index + 1,
            value: word
        }));
        setInputs(initialInputs);
    }, [defaultWords]);

    useEffect(() => {
        const values = inputs.map(input => input.value);
        onChange(values);
    }, [inputs, onChange]);  

    const handleAdd = () => {
        setInputs([...inputs, { id: nextId, value: '' }]);
        setNextId(nextId + 1);
    };

    const handleCancel = (id) => {
        setInputs(inputs.filter(input => input.id !== id));
    };

    const handleInputChange = (id, value) => {
        setInputs(inputs.map(input =>
            input.id === id ? { ...input, value: value } : input
        ));
    };

    return (
        <div className="w-100">
            <div className="d-flex flex-column gap-3">
                {inputs.map(input => (
                    <div key={input.id} className="d-flex position-relative">
                        <input
                            type="text"
                            value={input.value}
                            onChange={(e) => handleInputChange(input.id, e.target.value)}
                            className="mh-40 p-2 flex-fill"
                        />
                        <img
                            onClick={() => handleCancel(input.id)}
                            src={CancelIcon}
                            alt="Cancel"
                            style={{ width: '30px', height: '30px' }}
                            className="position-absolute end-0 top-50 translate-middle"
                        />
                    </div>
                ))}
            </div>
            <p onClick={handleAdd} style={{ color: '#2D4777' }}>
                + Add new {title}
            </p>
        </div>
    );
}

export default ExpandableInput;
