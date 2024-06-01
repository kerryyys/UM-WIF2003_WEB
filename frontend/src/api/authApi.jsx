import axios from "axios";

export const postRegistration = async (email, username, password, navigate) => {
  try {
    console.log(email + " " + password + " " + username);
    const res = await axios.post("http://localhost:5050/auth/signup", {
      email,
      username,
      password,
    });
    console.log(res);
    navigate("/Login");
  } catch (err) {
    console.error("postRegistration error: " + err);
  }
};

export const getUser = async (email, password) => {
  try {
    const res = await axios.post("http://localhost:5050/auth/login", {
      email,
      password,
    });
    console.log(res.headers);
    console.log(document.cookie);
    if (!res.data.user) return console.error("User not found");
    return res.data.user;
  } catch (error) {
    console.error(error);
  }
};
