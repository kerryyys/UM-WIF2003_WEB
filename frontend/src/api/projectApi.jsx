// Will include backend api functions for "project/" in this file
// For better code separation

import axios from "axios";
export const API_URL = "http://localhost:5050/projects";

export const favoriteProject = async (userId, projectId) => {
  try {
    const response = await axios.post(`${API_URL}/favorite-project`, {
      userId,
      projectId,
    });
    return response.data;
  } catch (error) {
    console.error("Error favorite project: " + error);
    throw error;
  }
};

export const removeFavoriteProject = async (userId, projectId) => {
  try {
    const response = await axios.post(`${API_URL}/remove-favorite-project`, {
      userId,
      projectId,
    });
    return response.data;
  } catch (error) {
    console.error("Error remove favorite project: " + error);
    throw error;
  }
};

export const setTakenProject = async (userId, projectId) => {
  try {
    const response = await axios.post(`${API_URL}/taken-project`, {
      userId,
      projectId,
    });
    return response.data;
  } catch (error) {
    console.error("Error set taken project: " + error);
  }
};
export const getTakenProjects = async (userId) => {
  try {
    console.log("I'm in projectApi getTakenProjects");
    const response = await axios.get(`${API_URL}/taken-project/${userId}`);
    return response.data;
  } catch (error) {
    console.error("Error get taken project: " + error);
  }
};
export const setCompletedProject = async (userId, projectId) => {
  try {
    const response = await axios.post(`${API_URL}/completed-project`, {
      userId,
      projectId,
    });
    return response.data;
  } catch (error) {
    console.error("Error set completed project: " + error);
  }
};
export const getCompletedProjects = async (userId) => {
  try {
    console.log("I'm in projectApi getCompletedProjects");
    const response = await axios.get(`${API_URL}/completed-project/${userId}`);
    return response.data;
  } catch (error) {
    console.error("Error get completed project: " + error);
  }
};

// (files) is an array of uploaded files
// For .post(), first parameter is the URL, 2nd parameter is request body,
// 3rd parameter is the options or headers
export const uploadCompletedWorks = async (files, projectId, userId) => {
  const formData = new FormData();
  for (let i = 0; i < files.length; i++) {
    console.log("Is object? " + files[i].name);
    formData.append("files", files[i], files[i].name);
  }
  formData.append("projectId", projectId);
  formData.append("userId", userId);
  for (const pair of formData.entries()) {
    console.log(pair[0], pair[1]);
  }
  try {
    const response = await axios.post(`${API_URL}/upload-works`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log(
      "File uploaded successfully from frontend api: " + response.data
    );
  } catch (error) {
    console.log("Error in uploadCompletedWorks, frontend api: " + error);
  }
};
