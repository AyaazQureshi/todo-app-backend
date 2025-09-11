const mongoose = require("mongoose");

// env file process mei daal diya
require("dotenv").config();

exports.dbConnect = ()=>{
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then(()=>{
        console.log("db connect successful")
    })
    .catch((error)=>{
        console.log("issue in db connection");
        console.error(error.message);
        process.exit(1);
    })
}

// module.exports = dbConnect;  // bs index.js me dbconnect() import krke
