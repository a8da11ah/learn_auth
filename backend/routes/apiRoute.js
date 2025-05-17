import express from "express";

const apiRouter = express.Router();

import authRouter from "./authRoute.js"


apiRouter.use("/auth", authRouter)




export default apiRouter
