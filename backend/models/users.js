import mongoose, { Schema, mongo } from "mongoose";
const experience = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    employmentType: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    locationType: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    current: {
        type: Boolean,
        default: false
    }
});

const users = mongoose.Schema({
    userId: { type: String },
    email: { type: String },
  password: { type: String },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    profilePic: {
        type: String
    }, headline: {
        type: String
    }, city: {
        type: String,
        required: true
    }, state: {
        type: String,
        required: true
    }, categories: {
        type: [String],
        default: []
    }, role: {
        type: String,
        required: true
    }, university: {
        type: String
    }, skill: {
        type: [String],
        default: []
    }, experience: [experience],
    rating: {
        type: [String],
        default:["5"]
    },
    about: {
        type: String,
    }, product: {
        type: [String],
        default: []
    },favoriteProjects: [
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
      applyingProjects: [
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
}, {
    timestamps: true,
}
);

export const User = mongoose.model('Users', users);