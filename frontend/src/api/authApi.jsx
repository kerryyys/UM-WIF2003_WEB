import axios from "../utils/customAxios";

export const postRegistration = async (
  email,
  username,
  password,
  userType,
  navigate
) => {
  try {
    console.log(email + " " + password + " " + username);
    const res = await axios.post("http://localhost:5050/auth/signup", {
      email,
      username,
      password,
      userType,
    });
    console.log(res);
    navigate("/Login");
  } catch (err) {
    console.error("postRegistration error: " + err);
  }
};

export const getUser = async (email, password) => {
  try {
    const res = await axios.post(
      "http://localhost:5050/auth/login",
      {
        email,
        password,
      },
      { withCredentials: true }
    );
    console.log(res.headers);
    console.log(document.cookie);
    if (!res.data.user) return console.error("User not found");
    return res.data.user;
  } catch (error) {
    console.error(error);
  }
};

export const verifyUserToken = async () => {
  try {
    const response = await axios.get("http://localhost:5050/auth/verify", {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.error("Token verification failed: " + error);
    return { status: false };
  }
};

export const logoutUser = async () => {
  try {
    const response = await axios.get("http://localhost:5050/auth/logout", {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.error("Logout failed: " + error);
    return { status: false };
  }
};
