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
