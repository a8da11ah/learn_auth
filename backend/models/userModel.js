import {Schema, model} from "mongoose";


const userSchema = Schema({
    name: {
        type: String,
        required: true,
        minlength: 3
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        required: false,
        default: false
    },
    lastLogin: {
        type: Date,
        required: false,
        default: Date.now
    },
    isVerified: {
        type: Boolean,
        required: false,
        default: false
    },
    resetPasswordToken:String,
    resetPasswordExpire:Date,
    verificationToken:String,
    verificationTokenExpire:Date

},{
    timestamps: true
})

const User = model("User", userSchema)
export default User



        // match: [
        //     /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        //     "Please add a valid email"
        // ]