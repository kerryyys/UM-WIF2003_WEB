import mongoose from "mongoose";
import { Schema } from "mongoose";
const getDefaultFilter = function () {
  return [this.projectCategory, this.projectDuration, this.location];
};
const projectSchema = mongoose.Schema(
  {
    companyLogo: { data: Buffer, contentType: String },
    companyName: { type: String, required: true },
    projectTitle: { type: String, required: true },
    projectDescription: { type: String, required: true },
    location: { type: String, required: true },
    projectCategory: { type: String, required: true },
    projectDuration: { type: String, required: true },
    filter: { type: [String], required: true, default: getDefaultFilter },
    contactInformation: { type: String, required: true },
    additionalNotes: String,
    deadline: { type: Date, required: true },
    projectBudget: { type: Number, required: true },
    requiredSkills: { type: [String], required: true, default: [] },
    agreedToTerms: { type: Boolean, required: true },
    posted: { type: Boolean, default: true },
    taken: { type: Boolean, default: false },
    completed: { type: Boolean, default: false },
    applicants: { type: [Schema.Types.ObjectId], ref: "FakeUser" }, //should store freelancer userID
    // PIC: { type: Schema.Types.ObjectId, ref: "FakeUser" }, I renamed it to serviceProvider
    serviceProvider: { type: Schema.Types.ObjectId, ref: "FakeUser" },
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

    uploadedFiles: [
      {
        fileUrl: String,
        fileName: String,
        submittedAt: { type: Date, default: Date.now },
        _id: false,
      },
    ],
  },
  { timestamps: true }
);
export const Project = mongoose.model("Project", projectSchema);
