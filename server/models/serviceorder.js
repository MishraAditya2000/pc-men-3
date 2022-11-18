import mongoose from "mongoose";

const orderService=mongoose.Schema({
    user_name:String,
    user_mail:String,
    user_mob:String,
    address:String,
    issue:String,
    issuedate:Date
})

const orderservice=mongoose.model("orderservice",orderService);

export default orderservice;