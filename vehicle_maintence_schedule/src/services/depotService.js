const axios = require("axios");
const getAuthToken = require("./authService");

const getDepots = async () => {
  try {
    const token = await getAuthToken();

    const response = await axios.get(
      "http://4.224.186.213/evaluation-service/depots",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data.depots;

  } catch (error) {
    console.error(error.response?.data || error.message);
  }
};

module.exports = getDepots;