const axios = require("axios");
const access_token = require("./authservice");


const Log = async(stack , level , packageName, message) => {
    try{
        const token = await access_token();

        const response = await axios.post(
            "http://4.224.186.213/evaluation-service/logs",
            {
                stack,
                level,
                package : packageName,
                message,

            },
            {
                 headers : {
                Authorization : `Bearer ${token}`,
            },
            }
           
        )
        return response.data;
    }
    catch(error){
        console.log(error)
            "Logger Error:",
            error.response?.data || error.message
        
    }
}




