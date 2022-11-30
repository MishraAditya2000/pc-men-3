import mongoose from "mongoose";

const orderService=mongoose.Schema({
    user_name:String,
    user_mail:String,
    user_mob:String,
    address:String,
    issue:String,
    status:String,
    issuedate:{
        type:Date,
        default:new Date()
    }
})

const orderservice=mongoose.model("orderservice",orderService);

export default orderservice;