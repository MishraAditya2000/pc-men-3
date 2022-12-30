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
        const orders=await orderDetails.find().sort({_id:-1});
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
//UPDATE ORDER STATUS
export const updatePCorder=async(req,res)=>{
    try {
        const id=req.params.id;
        const post=req.body;
    
        console.log(id);
        console.log(post);
        if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('NO POST WITH THIS ID');
    
       const updatedPost=await orderDetails.findByIdAndUpdate(id,{...post,id},{new:true});
       res.json(updatedPost);
    } catch (error) {
        console.log(error);
    }

}

//ORDER HISTORY
export const orderHistory=async(req,res)=>{
    try {        
        const mail=req.params.mail;
        console.log(mail);
        const history= await orderDetails.find({"userdetails.mail":mail}).sort({_id:-1});
        res.status(200).json(history);
    } catch (error) {
        console.log(error);
    }

}