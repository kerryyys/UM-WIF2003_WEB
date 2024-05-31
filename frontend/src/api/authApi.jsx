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
