const axios = require("axios");

const getAuthToken = require("./authService");

const getNotifications = async () => {

  const token = await getAuthToken();

  const response = await axios.get(
    "http://4.224.186.213/evaluation-service/notifications",
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );

  return response.data.notifications;
};

module.exports = getNotifications;