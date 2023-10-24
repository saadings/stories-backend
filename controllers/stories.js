const axiosInstance = require("../utils/services/axios");

const CACHE_TTL = 60 * 60 * 1000; // 1 hour in milliseconds

let cache = {
  data: null,
  lastUpdated: null,
};

exports.fetchStories = async (_, res) => {
  const currentTime = Date.now();

  if (cache.data && currentTime - cache.lastUpdated < CACHE_TTL) {
    return res.send(cache.data.status === "OK" ? cache.data : {});
  }

  try {
    const response = await axiosInstance.get("/home.json");
    cache = {
      data: response.data,
      lastUpdated: currentTime,
    };
    return res.send(response.data.status === "OK" ? response.data : {});
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
