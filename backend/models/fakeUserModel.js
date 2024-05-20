// THIS IS FAKE USER FOR TESTING, DO NOT USE THIS!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
import mongoose, { Schema, mongo } from "mongoose";
const fakeUserSchema = mongoose.Schema({
  userId: { type: String },
  username: { type: String },
  email: { type: String },
  password: { type: String },
  favoriteProjects: [
    {
      type: Schema.Types.ObjectId,
      ref: "Project",
    },
  ],
  takenProjects: [
    {
      type: Schema.Types.ObjectId,
      ref: "Project",
    },
  ],
  completedProjects: [
    {
      type: Schema.Types.ObjectId,
      ref: "Project",
    },
  ],
});
export const FakeUser = mongoose.model("FakeUser", fakeUserSchema);
