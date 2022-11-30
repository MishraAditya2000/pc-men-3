import mongoose from "mongoose";
import orderDetails from "../models/ordermodel.js";

//ADD USER ORDER TO DATABASE
export const addOrder=async(req,res)=>{
    const order=await new orderDetails(req.body).save();
    res.status(201).json(order);
}


//SHOW ORDERS FROM DATABASE
export const showOrder=async(req,res)=>{
    try{
        const orders=await orderDetails.find();
        res.status(200).json(orders);
    }
    catch(error){
        console.log(error.message);
    }
}

//DELETE ORDER FROM DATABASE
export const deleteOrder=async(req,res)=>{
    const id=req.params.id;
    try{
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).send("Product Not found on this id");
        }
        await orderDetails.findByIdAndRemove(id);
        res.status(200).send("Delete Successfully")
    }
    catch(error){
        console.log(error.message);
    }
}