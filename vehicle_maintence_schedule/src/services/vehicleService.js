const axios = require("axios");
const getAuthToken = require("./authService");

const getVehicles = async () => {
  try {
    const token = await getAuthToken();

    const response = await axios.get(
      "http://4.224.186.213/evaluation-service/vehicles",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data.vehicles;

  } catch (error) {
    console.error(error.response?.data || error.message);
  }
};

module.exports = getVehicles;