import express from 'express';
import mongoose from 'mongoose';
import { error } from 'console';
import dotenv from "dotenv";
import userRouter from "../Backend/routes/userRoutes.js";
import authRouter from "../Backend/routes/authRoutes.js";
// import listing from "../Backend/routes/listingRoutes.js"
dotenv.config();

mongoose.connect(process.env.URL)
.then(() =>{
    console.log("mongoDB is connected")
})
.catch((error), () =>{
    console.log(error);
})

const app = express();
app.use(express.json())

app.listen(process.env.PORT, () =>{
    console.log("server is listening on port 3000");
})

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
// app.use("/api/listing", listing);


app.use((err, req, res,next) =>{
    const statusCode = err.statusCode || 500;
    const errorMessage = err.message || 'internal server error';
    res.status(statusCode).json({
        success: false,
        statusCode,
        errorMessage
    });
})