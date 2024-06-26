//file to store informations that need to be stored in the mongoDB (like first name,last name)

import mongoose from "mongoose";
import validator from "validator";

const reservationSchema=new mongoose.Schema({
    firstName:{
    type: String,
    required:true,
    minLength:[3,"Name must contain atleast 3 letters"],
    maxLength:[20,"Name must not exceed 20 letters"],
    },

    lastName:{
        type: String,
        required:true,
        minLength:[3,"Last Name must contain atleast 3 letters"],
        maxLength:[20,"Last Name must not exceed 20 letters"],
    },
    email:{
        type: String,
        required:true,
        validate:[validator.isEmail,"Provide a valid E-mail"]
    },
    phone:{
        type: String,
        required:true,
        minLength:[10,"Mobile Number must contain 10 digits"],
        maxLength:[10,"Mobile Number must not exceed 10 digits"],
    },
    time:{
        type:String,
        required:true,
    },
    date:{
        type:String,
        required:true,
    },
    
});

export const reservation=mongoose.model("Reservation",reservationSchema);