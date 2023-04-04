import axios from "../axios";

const handleLoginApi = (userEmail, userPassword) => {
  return axios.post("/api/login", { email: userEmail, password: userPassword });
};

const getAllUsers = (inputId) => {
  //template string
  return axios.get(`/api/get-all-users?id=${inputId} `);
  // if (id )
};

const createNewUserService = (data) => {
  return axios.post("/api/create-new-user", data);
};

export { handleLoginApi, getAllUsers, createNewUserService };
