import mongoose from "mongoose";
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
    about: {
        type: String,
    }, product: {
        type: [String],
        default: []
    },
}, {
    timestamps: true,
}
);

export const User = mongoose.model('Users', users);