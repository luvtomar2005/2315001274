const axios = require("axios");
require("dotenv").config();

const access_token = async() =>{
    try{
        const response = await axios.post(
            "http://4.224.186.213/evaluation-service/auth",
            {
                email : process.env.EMAIL,
                name : process.env.NAME,
                rollNo : process.env.ROLL_NO,
                accessCode : process.env.ACCESS_CODE,
                clientID : process.env.CLIENT_ID,
                clientSecret : process.env.CLIENT_SECRET,

            }
        );

        return response.data.access_token;
    }
    catch(error){
        console.log("There is some error in the processs");
    }
}


module.exports = access_token;
