// const axios = require("axios");
// const getAuthToken = require("./authService");
const axios = require("axios");
const getAuthToken = require("./authservice");

// const Log = async (stack, level, packageName, message) => {
//   try {
//     const token = await getAuthToken();

//     const response = await axios.post(
//       "http://4.224.186.213/evaluation-service/logs",
//       {
//         stack,
//         level,
//         package: packageName,
//         message,
//       },
//       {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       }
//     );

//     console.log("Log created:", response.data);

//     return response.data;
//   } catch (error) {
//     console.error(
//       "Logger Error:",
//       error.response?.data || error.message
//     );
//   }
// };

// module.exports = Log;