const express = require("express");
const app = express();
const cors= require("cors");
const cookieparser = require("cookie-parser");
const session = require("express-session");
const dotenv = require("dotenv");
dotenv.config({
    path:"./config/env/config.env"
})

const connectDatabase =require("./Database/connectDatabase.js");

const index = require("./routers/index.js");

connectDatabase();

app.use(cookieparser());

app.use(cors({

    origin:"http://localhost:5173",
    methods:"*"

}));

app.use((req,res,next)=>{console.log(req.cookies)});

/*app.use(function(req,res,next){

    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader("Access-Control-Allow-Methods","*");
    next();
});

*/



app.use(express.json());


const port = process.env.PORT;



app.use("/api",index)

app.listen(port,console.log("it worked"));