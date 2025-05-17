
import User from "../models/userModel.js"
import { sendEmailVerification } from "../mailtrap/emails.js"
import { generateTokenAndCookie, hashPassword, comparePassword } from "../utils/authUtils.js"


const register = async(req, res) => {
    const { name, email, password } = req.body;

    try {
      
        // check if user exists in db
        const userExists = await User.findOne({ email });
        if (userExists) {
            res.status(400)
            throw new Error("User already exists");
        }

        // hash password 
        const hashedPassword = await hashPassword(password);
        const verificationToken = Math.floor(100000+Math.random() * 900000).toString();

        // create user in db
        const user = await User.create(
            {
            name: name,
            email:email,
            password:hashedPassword,
            verificationToken:verificationToken,
            verificationTokenExpires:Date.now() + 24 *60 * 60 * 1000 // 24 hour
        });
        // generate token and set cookie
        const token = generateTokenAndCookie(res,user._id);

        await sendEmailVerification(user.email,user.verificationToken)

        // send a 201 status code with user details
        res.status(201).json(
            { email:user.email,token:token });

    } catch (error) {
        res.status(400)
        throw new Error(error.message);
    }

}
const login = async(req, res) => {
    const { email, password } = req.body;

    try {
      
        // check if user exists in db
        const user = await User.findOne({ email });
        if (!user) {
            res.status(400)
            throw new Error("User does not exist");
        }
        // check if password is correct
        const match = await comparePassword(password,user.password);
        if (!match) {
            res.status(400)
            throw new Error("Invalid password");
        }


        // update last login
        user.lastLogin = Date.now()
        await user.save()

        // generate token and set cookie
        const token = generateTokenAndCookie(res,user._id);

        // send a 200 status code with user details
        res.status(200).json(
            { user:user,token:token });
    } catch (error) {
        res.status(400)
        throw new Error(error.message);
    }

}


const logout = async(req, res) => {
    res.send("logout")
}


const verifyEmail = async(req, res) => {        
    const {email , code } = req.body;

    const user = await User.findOne({email});
    if (!user) {
        res.status(404)
        throw new Error("User does not exist");
    }
    if (user.isVerified) {
        res.status(400)
        throw new Error("User is already verified");
        
    }
    if (user.verificationTokenExpires < Date.now()) {
    res.status(400)
    throw new Error("Verification code has expired");
    }
    if (user.verificationToken !== code) {
        res.status(400)
        throw new Error("Invalid verification code");
    }
    
    user.isVerified = true;
    user.verificationToken = null;
    user.verificationTokenExpires = null;
    await user.save();
    res.status(200).json({ message: "Email verified successfully" });


}

const resendCode = async(req, res) => {
    const {email} = req.body;
    const user = await User.findOne({email});
    if (!user) {
        res.status(404)
        throw new Error("User does not exist");
    }
    if (user.isVerified) {
        res.status(400)
        throw new Error("User is already verified");
    }
    const verificationToken = Math.floor(100000+Math.random() * 900000).toString();

    user.verificationToken = verificationToken;
    user.verificationTokenExpires = Date.now() + 24 *60 * 60 * 1000 // 24 hour
    await user.save();

    await sendEmailVerification(user.email,user.verificationToken)
    res.json({ message: "New verification code sent!" });
}
const resetPassword = async(req, res) => {
    res.send("reset password")
}




export {register, login, logout, verifyEmail, resendCode, resetPassword}