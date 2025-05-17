import express from "express";
import {register,login,logout,verifyEmail,resendCode} from "../controllers/authController.js"
const router = express.Router();
import {validateBody}from "../middlewares/validate.js"
import {registerSchema,loginSchema,verifiyEmailSchema,resendCodeSchema} from "../validationsSchemas/authSchema.js"





//@desc register user
//@route POST /api/auth/register
//@access public
router.post("/register",validateBody(registerSchema), register)



//@desc login user
//@route POST /api/auth/login
//@access public
router.post("/login",validateBody(loginSchema), login)



//@desc logout user
//@route POST /api/auth/logout
//@access public
router.post("/logout", logout)




//@desc verify user email
//@route POST /api/auth/verify-email
//@access public    
router.post("/verify-email",validateBody(verifiyEmailSchema),verifyEmail)



//@desc resend verification email
//@route POST /api/auth/resend-verification-email
//@access public
router.post("/resend-code",validateBody(resendCodeSchema),resendCode) 


export default router