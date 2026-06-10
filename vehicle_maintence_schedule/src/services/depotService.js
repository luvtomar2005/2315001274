const axios = require("axios");
const getToken = require("./authService");

const getDepots = async () => {
  try {
    const token = await getToken();

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