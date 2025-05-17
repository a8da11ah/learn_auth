import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs"


const generateTokenAndCookie = (res,id)=>{

    const token = jwt.sign({id},process.env.JWT_SECRET , {expiresIn:"1d"})

    res.cookie("jwt", token, {
        httpOnly: true, // accessible only by the web server , protect from xss
        secure: process.env.NODE_ENV !== "development",
        sameSite: "strict", // accessible only by the same site , protect from csrf
        maxAge: 1 * 24 * 60 * 60 * 1000 // 1 day
    })
    return token
}




// 🔐 Hashing the password
const hashPassword = async (password) => {
    const saltRounds = 10;
    const hashed = await bcrypt.hash(String(password), saltRounds);
    return hashed;
  };
  
  // 🔍 Verifying password
  const comparePassword = async (password, hashed) => {
    const match = await bcrypt.compare(password, hashed);
    return match; // true or false
  };


  export {generateTokenAndCookie,hashPassword,comparePassword}