
const jwt = require("jsonwebtoken");
const Doc = require("../model/userSchema1");
const router = require("../router/auth");

const Authenticate = async (req, res, next) => {
    try {
        const token = req.cookies.jwtoken;
        const verifyToken = jwt.verify(token, process.env.SECRET_KEY);
        const rootUser = await Doc.findOne({ _id: verifyToken._id, "tokens.token": token });
        if (!rootUser) { throw new Error('User not found') }
        req.token = token;
        req.rootUser = rootUser;
        req.userID = rootUser._id; 
        next();
    }
    catch (err) {
        res.status(401).send('Unauthorised:No token provided');
        console.log(err);
    }
}
module.exports = Authenticate;

