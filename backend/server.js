import express from "express"
import dotenv from "dotenv"
dotenv.config()
import connectDb from "./config/connectDB.js"
import apiRouter  from "./routes/apiRoute.js"
const app = express()
import errorHandler from "./middlewares/errorHandler.js"



// Middleware
app.use(express.json()) // allow us to access req.body in json

app.use(express.urlencoded({extended:false})) // allow us to access req.body in form data




// Routes
app.use("/api",apiRouter )




// Error Handler
app.use(errorHandler)


// start the server 
const port = process.env.PORT || 5000
app.listen(port, () => {
        connectDb()

    console.log(`Server is running on port ${port}`)
})
