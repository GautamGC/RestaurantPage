import mongoose from "mongoose";

export const dbConnection=()=>{
    mongoose
    .connect(process.env.MONGO_URI,{
        dbName:"Restraunt_Page"
    })
    .then(()=>{
        console.log("Connected to MongoDB successfully");
    })
    .catch((err) =>{
        console.log(`Error connecting to the MongoDB!! ${err}`);
    });
};
