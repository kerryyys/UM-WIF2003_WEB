import mongoose from "mongoose";
const projectSchema = mongoose.Schema(
  {
    companyLogo: { data: Buffer, contentType: String },
    companyName: { type: String, required: true },
    projectTitle: { type: String, required: true },
    projectDesc: { type: String, required: true },
    category: { type: String, required: true },
    duration: { type: String, required: true },
    filters: { type: [String], required: true, default: [] },
    contactInfo: { type: String, required: true },
    additionalInfo: String,
    deadline: { type: Date, required: true },
    budget: { type: Number, required: true },
    requiredSkills: { type: [String], required: true, default: [] },
  },
  { timestamps: true }
);
export const Project = mongoose.model("Project", projectSchema);
