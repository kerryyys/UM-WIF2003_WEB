import mongoose from "mongoose";

// NOT SURE is retrieve from user part or have to fill in more
const freelanceInfoSchema = mongoose.Schema(
    {
        profilePic: { data: Buffer, contentType: String },
        freelanceName: String,
        rating: { type: String, required: true },
        projectDescription: { type: String, required: true },
        experienceLevel: { type: String, require: true},
        location: { type: String, required: true },
        skills: { type: [String], required: true },
        selfDescription: { type: String, required: true },
    },
);
export const FreelanceInfo = mongoose.model("freelance", freelanceInfoSchema);