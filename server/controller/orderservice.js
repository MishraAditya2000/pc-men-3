import mongoose from "mongoose";
import orderservice from "../models/serviceorder.js";


//ADD ORDERE SERVICE REQUEST
export const serviceRequest=async(req,res)=>{
    const service=req.body;
    try {
        const servicerequest=await orderservice(service).save;
        res.status(201).json(servicerequest);
    } catch (error) {
        console.log(error.message);
    }
}


//SHOW ORDERED SERVICE REQUEST
export const showService=async(req,res)=>{
try {
    const service=await orderservice.find();
    res.status(200).json(service)
} catch (error) {
    console.log(error.message);
}
} 