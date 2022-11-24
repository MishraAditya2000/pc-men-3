import mongoose from "mongoose";
import productDetails from "../models/productmodel.js";

//Add Product For Admin API
export const addProduct=async(req,res)=>{
    const product=await new productDetails(req.body).save();
    res.status(201).json(product)
}

//Delete Product For Admin API
export const deleteProduct=async(req,res)=>{
const id=req.params.id;
// console.log(req.params.id);
    try {
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).send("Product Not found on this id");
        }
        await productDetails.findByIdAndRemove(id);
        res.status(200).send("Delete Successfully")
    } catch (error) {
        console.log(error.message);
    }
}

//SHOW PRODUCTs API FOR ADMIN PAGES
export const getPost=async(req,res)=>{
    try{
        const post=await productDetails.find();
        res.status(200).json(post);
    }
    catch(error){
        console.log(error.message);
    }
}




//-------------------------------------------------USER APIs-------------------------------------------------------------------



export const ourPicks=async(req,res)=>{
    try {
        const post=await productDetails.find({availability:"In Stock",ourpicks:"Yes"});
        res.status(200).json(post);
    } catch (error) {
        console.log(error.message);
    }
}


// SHOW PRODUCT DETAILS IN SINGLE PAGE
export const getProduct=async(req,res)=>{
    try {
        const id=req.params.id;
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(400).send("NO PRODUCT WITH THIS ID");
        }
        const product=await productDetails.findById(id);
        res.status(200).json(product);
    } catch (error) {
        console.log(error.message);
        }
}