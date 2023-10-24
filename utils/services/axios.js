require("dotenv").config();
const axios = require("axios");

const axiosInstance = axios.create({
  baseURL: process.env.T_DEVELOPERS_API_URL,
  params: {
    "api-key": process.env.T_DEVELOPERS_API_KEY,
  },
  timeout: 5000,
  headers: { "Content-Type": "application/json" },
});

module.exports = axiosInstance;
