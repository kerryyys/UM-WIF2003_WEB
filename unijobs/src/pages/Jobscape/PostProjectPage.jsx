import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/PostProjectPage.css";
import SmallTitle from "../../components/jobscape/SmallTitle";
import "../../components-css/jobscape/Notification.css";

const Notification = ({ message, onClose }) => (
  <div className="overlay">
    <div className="notification">
      <p>{message}</p>
      <button onClick={onClose}>Close</button>
    </div>
  </div>
);

const PostProjectPage = () => {
    const [showNotification, setShowNotification] = useState(false);
  const [projectTitle, setProjectTitle] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [projectCategory, setProjectCategory] = useState("");
  const [projectType, setProjectType] = useState("");
  const [projectDuration, setProjectDuration] = useState("");
  const [requiredSkills, setRequiredSkills] = useState([]);
  const [newSkill, setNewSkill] = useState("");
  const [projectBudget, setProjectBudget] = useState("");
  const [deadline, setDeadline] = useState("");
  const [contactInformation, setContactInformation] = useState("");
  const [additionalNotes, setAdditionalNotes] = useState("");
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const handleSkillsChange = (e) => {
    const value = e.target.value;
    setRequiredSkills((prevSkills) => [...prevSkills, value]);
  };

  const handleSkillsRemove = (index) => {
    setRequiredSkills((prevSkills) =>
      prevSkills.filter((skill, i) => i !== index)
    );
  };

  const handleAddSkill = () => {
    if (newSkill.trim() !== "") {
      setRequiredSkills((prevSkills) => [...prevSkills, newSkill]);
      setNewSkill("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to submit project details
    setShowNotification(true);
    // Reset form fields or perform other actions
  };

  
  return (
    <div className="PostProjectPage">
      <div className="header">
        <Link to="/SeekTalentPage" className="BackButton">
          &lt; BACK
        </Link>
        <SmallTitle title="Project Details" fontWeight="700" fontSize="36px" />
      </div>
      <div className="FormContainer">
        <p>
          To ensure clarity and accuracy in project submissions, please adhere
          to the following guidelines: Provide a descriptive title and detailed
          description of the project, outlining its objectives, scope, and
          deliverables. Specify the required skills and technologies needed to
          complete the project, ensuring compatibility with potential
          candidates' expertise. Clearly state the project duration, budget, and
          deadline for completion to manage expectations and facilitate
          efficient project planning. Include accurate contact information for
          communication purposes and any additional notes or requirements
          relevant to the project.
        </p>
        <form className="ProjectForm" onSubmit={handleSubmit}>
          <div className="FormRow">
            <label htmlFor="projectTitle">Project Title:</label>
            <input
              type="text"
              id="projectTitle"
              value={projectTitle}
              onChange={(e) => setProjectTitle(e.target.value)}
            />
          </div>
          <div className="FormRow">
            <label htmlFor="projectDescription">Project Description:</label>
            <textarea
              id="projectDescription"
              value={projectDescription}
              onChange={(e) => setProjectDescription(e.target.value)}
            />
          </div>
          <div className="FormRow">
            <label htmlFor="projectCategory">Project Category:</label>
            <select
              id="projectCategory"
              value={projectCategory}
              onChange={(e) => setProjectCategory(e.target.value)}
            >
              <option value="">Select category</option>
              <option value="Tech & IT">Tech & IT</option>
              <option value="Creative & Design">Creative & Design</option>
              <option value="Content Writing">Content Writing</option>
              <option value="Education & Training">Education & Training</option>
            </select>
          </div>
          <div className="FormRow">
            <label htmlFor="projectType">Project Type:</label>
            <select
              id="projectType"
              value={projectType}
              onChange={(e) => setProjectType(e.target.value)}
            >
              <option value="">Select type</option>
              <option value="Web Development">Web Development</option>
              <option value="Mobile App Development">
                Mobile App Development
              </option>
              <option value="Graphic Design">Graphic Design</option>
            </select>
          </div>
          <div className="FormRow">
            <label htmlFor="projectDuration">Project Duration:</label>
            <select
              id="projectDuration"
              value={projectDuration}
              onChange={(e) => setProjectDuration(e.target.value)}
            >
              <option value="">Select duration</option>
              <option value="Short Term">Short Term</option>
              <option value="Long Term">Long Term</option>
              <option value="OnGoing">OnGoing</option>
            </select>
          </div>
          <div className="FormRow">
            <label>Required Skills:</label>
            <div className="SkillsContainer">
              {requiredSkills.map((skill, index) => (
                <div key={index} className="Skill">
                  {skill}
                  <button
                    type="button"
                    onClick={() => handleSkillsRemove(index)}
                  >
                    X
                  </button>
                </div>
              ))}
              <input
                type="text"
                placeholder="Add skill"
                value={newSkill}
                onChange={(e) => setNewSkill(e.target.value)}
              />
              <button type="button" onClick={handleAddSkill}>
                Add
              </button>
            </div>
          </div>
          <div className="FormRow">
            <label htmlFor="projectBudget">Project Budget:</label>
            <select
              id="projectBudget"
              value={projectBudget}
              onChange={(e) => setProjectBudget(e.target.value)}
            >
              <option value="">Select budget...</option>
              <option value="RM1K">RM1,000 - RM3,000</option>
              <option value="RM3K">RM3,00 - RM5,000</option>
              <option value="RM5K">RM5,001 - RM8,000</option>
              <option value="RM8K">RM8,001 - RM10,000</option>
            </select>
          </div>
          <div className="FormRow">
            <label htmlFor="deadline">Deadline for Completion:</label>
            <input
              type="date"
              id="deadline"
              value={deadline}
              onChange={(e) => setDeadline(e.target.value)}
            />
          </div>
          <div className="FormRow">
            <label htmlFor="contactInformation">Contact Information:</label>
            <input
              type="text"
              id="contactInformation"
              value={contactInformation}
              onChange={(e) => setContactInformation(e.target.value)}
            />
          </div>
          <div className="FormRow">
            <label htmlFor="additionalNotes">Additional Notes:</label>
            <textarea
              id="additionalNotes"
              value={additionalNotes}
              onChange={(e) => setAdditionalNotes(e.target.value)}
            />
          </div>
          <div className="FormRow">
            <label htmlFor="termsCheckbox">
              <input
                type="checkbox"
                id="termsCheckbox"
                checked={agreedToTerms}
                onChange={(e) => setAgreedToTerms(e.target.checked)}
              />
              By selecting this, you agree to our terms and conditions.
            </label>
          </div>
          <button type="submit" className="SubmitButton">
            Submit
          </button>
        </form>
        {/* Notification */}
        {showNotification && (
          <Notification
            message="Your project details have been successfully submitted!"
            onClose={() => setShowNotification(false)}
          />
        )}
      </div>
    </div>
  );
};

export default PostProjectPage;
