const mongooose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userSchema = new mongooose.Schema({
    name: {
        type: String,
        required:true
    },
    email: {
         type: String,
        required:true
    },
    phone: {
        type: Number,
        required:true
    },
    age: {
         type: Number,
        required:true
    },
    medicalh: {
        type: String,
       required:true
   },
    address: {
        type: String,
       required:true
    },
    password: {
         type: String,
        required:true
    },
    cpassword: {
         type: String,
        required:true
    },
    tokens:[
        {
            token:{
                type: String,
                required:true
            }
        }
    ]
})

userSchema.pre('save', async function(next){
    console.log("hello")
    if(this.isModified('password')){
        this.password=bcrypt.hash(this.password, 12);
        this.cpassword=bcrypt.hash(this.cpassword, 12);
    }
    next();
});

userSchema.methods.generateAuthToken = async function(){
    try{
        let token= jwt.sign({_id:this._id}, process.env.SECRET_KEY);
        this.tokens= this.tokens.concat({token:token});
         await this.save();
         return token;
    }catch(err){
        console.log(err);
    }
}
const User = mongooose.model('USER', userSchema);

module.exports = User;