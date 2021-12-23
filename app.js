const dotenv=require('dotenv');
const mongoose =require('mongoose')
const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

const cookie = require('cookie-parser');
dotenv.config({path: './config.env'});
require('./db/conn');
app.use(cookie());
app.use(express.json());

app.use(require('./router/auth'));
// const User = require('./model/userSchema');
const PORT = process.env.PORT || 5000;

if (process.env.NODE_ENV == "production"){
    app.use(express.static("homepage/build"));
    // const path =require("path");
}

app.listen(PORT, () => {
    console.log(`server is runnig at port no ${PORT}`);
})
