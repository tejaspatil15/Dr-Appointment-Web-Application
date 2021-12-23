const jwt = require('jsonwebtoken');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const authenticate = require('../middleware/authenticate')
const authenticate1 = require('../middleware/authenticate1')

require('../db/conn');
const User = require("../model/userSchema");
const Doc =require("../model/userSchema1")
const BOOK =require("../model/userSchema2")

router.get('/', (req, res) => {
    res.send(`Hello world from the server rotuer js`);
});
 
router.post('/register', async (req, res) => {
    
    const { name, email, phone, age,medicalh, address, password, cpassword}=req.body;

    if(!name || !email || !phone || !age ||!medicalh|| !address || !password|| !cpassword){
        return res.status(422).json({error:"Plz fill all the details properly"});
    }

    try{
        const userExist = await User.findOne({email:email});
        
        if(userExist){
            return res.status(422).json({error:"Email already Exist"});
        }else if(password!=cpassword){
            return res.status(422).json({error:"password are not"});
        }else{

        const user = new User({ name, email, phone, age, medicalh, address, password, cpassword});
        user.password = await bcrypt.hash(user.password , 10);
        user.cpassword = await bcrypt.hash(user.cpassword , 10);
        await user.save();
        res.status(201).json({message:"user registered successfuly"});
        }
    }catch(err){
        console.log(err);
    }
    
});


router.post('/register1', async (req, res) => {
    
    const { name, email, phone, age, address,qualification,specilization, password, cpassword}=req.body;

    if(!name || !email || !phone || !age|| !qualification || !specilization || !address || !password|| !cpassword){
        return res.status(422).json({error:"Plz fill all the details properly"});
    }

    try{
        const userExist = await Doc.findOne({email:email});
        
        if(userExist){
            return res.status(422).json({error:"Email already Exist"});
        }else if(password!=cpassword){
            return res.status(422).json({error:"password not match"});
        }else{

        const user = new Doc({ name, email, phone, age, address, qualification,specilization, password, cpassword});
        user.password = await bcrypt.hash(user.password , 10);
        user.cpassword = await bcrypt.hash(user.cpassword , 10);
        await user.save();
        res.status(201).json({message:"user registered successfuly"});
        }
    }catch(err){
        console.log(err);
    }
    
});

// login route

router.post('/signin',async (req,res)=>{
    try{
        let token;
        const{ email, password}=req.body;

        if(!email || !password){
            return res.status(400).json({error:"Plz Fill the data"})
        }

        const userLogin = await User.findOne({email:email});
        // console.log(userLogin);

        if(userLogin){
           const isMatch = await bcrypt.compare(password,userLogin.password);
           token = await userLogin.generateAuthToken();
           console.log(token);

           res.cookie("jwtoken", token,{
                 expires:new Date(Date.now()+25892000000),
                 httpOnly:true
           });
           
           if(!isMatch){
               res.status(400).json({error:"invalid credirntial"});
           }else{
            res.json({message:"user Signin Successfully"});

           }
        }else{
            res.status(400).json({error:"invalid credirntial"});
        }

    }catch(err){
        console.log(err);
    }
});

router.post('/signin1',async (req,res)=>{
    try{
        let token;
        const{ email, password}=req.body;

        if(!email || !password){
            return res.status(400).json({error:"Plz Fill the data"})
        }

        const userLogin = await Doc.findOne({email:email});
        // console.log(userLogin);

        if(userLogin){
           const isMatch = await bcrypt.compare(password,userLogin.password);
           token = await userLogin.generateAuthToken();
           console.log(token);

           res.cookie("jwtoken", token,{
                 expires:new Date(Date.now()+25892000000),
                 httpOnly:true
           });
           
           if(!isMatch){
               res.status(400).json({error:"invalid credirntial"});
           }else{
            res.json({message:"user Signin Successfully"});

           }
        }else{
            res.status(400).json({error:"invalid credirntial"});
        }

    }catch(err){
        console.log(err);

    }

});

router.post('/book', async (req, res) => {

    const { name, date,time,reason}=req.body;

    if(!name || !date || !time || !reason){

        return res.status(422).json({error:"Plz fill all the details properly"});

    }

    try{

        const user = new BOOK({ name,date, time,reason});

        await user.save();

        res.status(201).json({message:"booking successfuly"});

    }catch(err){

        console.log(err);

    }

   

});

//Doctors Aboutus content
router.get('/profile1', authenticate,(req,res) => {
    console.log('doctor profile');
    res.send(req.rootUser);
});


router.get('/profile2', authenticate1,(req,res) => {
    console.log('patient profile');
    res.send(req.rootUser);
});

router.get('/logout',(req,res) => {
    console.log('Hello my logout');
    res.clearCookie('jwtoken');
    res.status(200).send('user logout');
});



// Patients Aboutus content
// router.get('/profile2',authenticate,(req,res)=>{
//     console.log('Patient profile');
//     res.send('patient profile from the server');
// });
module.exports = router;
