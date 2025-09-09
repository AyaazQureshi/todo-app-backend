

const express = require('express');
const app = express();

require("dotenv").config();

const PORT = process.env.PORT || 4000;

app.use(express.json());

const todoRoutes = require("./routes/todos");
app.use("/api/v1",todoRoutes)

app.listen(PORT,()=>{
    console.log(`server started at ${PORT}`)
})

const dbConnect = require("./conffig/database")
dbConnect.dbConnect();

app.get((req,res)=>{
    res.send("hello ki haal chaal")
})

