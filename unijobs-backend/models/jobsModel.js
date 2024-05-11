import mongoose from "mongoose";
const jobSchema = mongoose.Schema(
  {
    requester: { type: String, required: true },
    name: { type: String, required: true },
    deadline: { type: Date, required: true },
    requiredSkills: [String],
  },
  { timestamps: true }
);
export const Job = mongoose.model("Job", jobSchema);
