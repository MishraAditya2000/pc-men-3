import mongoose from "mongoose";
import orderservice from "../models/serviceorder.js";


//ADD ORDERE SERVICE REQUEST
export const serviceRequest=async(req,res)=>{
    const service=req.body;
    try {
        const servicerequest=await orderservice(service).save();
        res.status(201).json(servicerequest);
        // res.body(alert(servicerequest._id));
        
    } catch (error) {
        console.log(error.message);
    }
}


//SHOW ORDERED SERVICE REQUEST
export const showService=async(req,res)=>{
try {
    const service=await orderservice.find().sort({ _id: -1 });
    res.status(200).json(service)
} catch (error) {
    console.log(error.message);
}
} 
//Update Service Order Status
export const updateService=async(req,res)=>{
    try {
        const id=req.params.id;
        const post=req.body;

            console.log(id);
            console.log(post);

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('NO POST WITH THIS ID');

            const updatedPost=await orderservice.findByIdAndUpdate(id,{...post,id},{new:true});
            res.json(updatedPost);

    } catch (error) {
        console.log(error);
    }
}
//------------------------------------------------------------------USER-----------------------------------------------------
//ORDER HISTORY
export const serviceHistory=async(req,res)=>{
    try {        
        const mail=req.params.mail;
        console.log(mail);
        const history= await orderservice.find({"user_mail":mail});
        res.status(200).json(history);
    } catch (error) {
        console.log(error);
    }

}