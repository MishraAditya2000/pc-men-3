import mongoose from "mongoose";

const orderSchema=mongoose.Schema({
    productid:String,
    productname:String,
    productsubtitle:String,
    prodtimg:String,
    ram:String,
    storage:String,
    price:Number,
    userdetails:{
        name:String,
        mail:String,
        mob:String,
        address:String,
        pin:String 
    },
    date:{
        type:Date,
        default:new Date()
    },
    status:String
}
);
const orderDetails=mongoose.model('orderDetails',orderSchema);
export default orderDetails;