import mongoose from "mongoose";

// accept input from recruiter from FORM
//i not sure how to get the user's data, like company logo & name
const projectDetailsSchema = mongoose.Schema(
    {
        companyLogo: { data: Buffer, contentType: String }, // Company logo as binary data
        companyName: String, // Company name as string
        projectTitle: { type: String, required: true },
        projectDescription: { type: String, required: true },
        location: { type: String, require: true},
        projectCategory: { type: String, required: true },
        projectType: { type: String, required: true },
        projectDuration: { type: String, required: true },
        requiredSkills: { type: [String], required: true },
        deadline: { type: Date, required: true },
        projectBudget: { type: Number, required: true },
        contactInformation: { type: String, required: true },
        additionalNotes: String,
        agreedToTerms: { type: Boolean, required: true },
        taken: { type: Boolean, default: false },
        complete: { type: Boolean, default: false},
        PIC: {type: String}
    },
    { timestamps: true }
);
export const ProjectDetails = mongoose.model("ProjectDetails", projectDetailsSchema);