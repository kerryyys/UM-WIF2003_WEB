import mongoose from "mongoose";

const getDefaultFilter = function () {
  return [this.projectCategory, this.projectDuration, this.location];
};

// accept input from recruiter from FORM
const projectDetailsSchema = mongoose.Schema(
  {
    companyLogo: { data: Buffer, contentType: String }, 
    companyName: String, // Company name as string
    projectTitle: { type: String, required: true },
    projectDescription: { type: String, required: true },
    location: { type: String, require: true },
    projectCategory: { type: String, required: true },
    projectDuration: { type: String, required: true },
    filter: { type: [String], required: true, default: getDefaultFilter },
    requiredSkills: { type: [String], required: true },
    deadline: { type: Date, required: true },
    projectBudget: { type: Number, required: true },
    contactInformation: { type: String, required: true },
    additionalNotes: String,
    agreedToTerms: { type: Boolean, required: true },
    posted: { type: Boolean, default: true },
    taken: { type: Boolean, default: false },
    completed: { type: Boolean, default: false },
    applicants: { type: [String] }, //should store freelancer userID
    review: [
      {
        satisfactionRating: Number,
        projectRating: Number,
        projectFeedback: String,
        collaboratorRating: Number,
        collaboratorFeedback: String,
        _id: false,
      },
    ],
  },
  { timestamps: true }
);
export const ProjectDetails = mongoose.model(
  "ProjectDetails",
  projectDetailsSchema
);
