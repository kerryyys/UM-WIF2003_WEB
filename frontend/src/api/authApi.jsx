import axios from "axios";

export const postRegistration = async (email, username, password) => {
  try {
    const res = await axios.post("http://localhost:5050/auth/signup", {
      email,
      username,
      password,
    });
    console.log(res);
  } catch (err) {
    console.error(err);
  }
};

export const getUser = async (email, password) => {
  try {
    const res = await axios.post("http://localhost:5050/auth/login", {
      email,
      password,
    });
    console.log(res);
    if (!res.data.user) return console.error("User not found");
    return res.data.user;
  } catch (error) {
    console.error(error);
  }
};
