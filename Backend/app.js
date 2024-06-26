import express from"express";
import cors from "cors";
import dotenv from "dotenv";
import {dbConnection} from "./database/dbConnections.js"
import mongoose from "mongoose";
import { errorMiddleware } from "./error/error.js";
import router from "./routes/reservationRoute.js";
const app=express();
dotenv.config({path: "./config/config.env"});
app.use(cors({
    origin:[process.env.FRONTEND_URL],
    methods:["POST"],
    credentials: true,
}));

app.use(express.json()); //converts string to object
app.use(express.urlencoded({extended: true}))//determines the type of data
app.use('/api/v1/reservation',router)
dbConnection();//for mongoDB


app.use(errorMiddleware);// mainly for error page 


export default app;