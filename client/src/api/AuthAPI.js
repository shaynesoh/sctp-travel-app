import axios from "axios";

const authAPI = axios.create({
  baseURL: "http://localhost:8080",
});

const authService = {
  async authenticateUser(username, password) {
    const requestBody = {
      username: username,
      password: password,
    };

    const response = await authAPI.post("/login", requestBody);
    console.log(response);
    return response.data;
  },
};

export default authService;
