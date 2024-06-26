import ErrorHandeling from "../error/error.js";
import { reservation } from "../models/reservationSchema.js";


export const sendReservation = async(req,res,next)=>{
    const{ firstName,lastName,email,phone,date,time }=req.body; //will call these variables from front end
    if(!firstName || !lastName||!email||!phone||!date||!time){
        return next(new ErrorHandeling("Plese fill the reservation form properly" ,400));
    }
    try {
        await reservation.create({firstName,lastName,email,phone,date,time});
        res.status(201).json({
            success:true,
            message:"Reservation done successfully!!!",
        });
    } catch (error) {
         if(error.name === "ValidationError"){
            const validationErrors = Object.values(error.errors).map(
                (err)=> err.message
            );
            return next(new ErrorHandeling(validationErrors.join(" , "), 400));
         }
         return next(error);
    }
};
