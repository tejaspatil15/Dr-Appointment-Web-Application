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
const PORT = process.env.PORT;

// const middleware = (req,res, next) => {
//     console.log(`Hello my Middleware`);
//     next();
// }

// app.get('/', (req, res) => {
//     res.send(`Hello world from the server app js`);
// });

// app.get('/profileD', middleware, (req, res ) => {
//     console.log('hello');
//     res.send(`Hello  world from the server`);    
// });

// app.get('/contact', (req, res) => {
//     res.send(`Hello  world from the server`);
// });

// app.get('/login1', (req, res) => {
//     res.send(`Hello  world from the server`);
// });

// app.get('/register', (req, res) => {
//     res.send(`Hello  world from the server`);
// });

app.listen(PORT, () => {
    console.log(`server is runnig at port no ${PORT}`);
})
