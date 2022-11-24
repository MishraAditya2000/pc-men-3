import mongoose from "mongoose";

const productSchema=mongoose.Schema({
    productname:String,
    subtitle:String,
    category:String,
    prodtimage:String,
    availability:String,
    price:Number,
    ourpicks:String,
    basicspecs:{
        motherboard:String,
        processor:String,
        chipset:String,
        graphic:String
    },
    customspecs:{
        ram:{
            default:{
                kit:String,
                price:Number
            },
            option1:{
                kit:String,
                price:Number               
            },
            option2:{
                kit:String,
                price:Number               
            }
        },
        storage:{
            default:{
                size:String,
                price:Number
            },
            option1:{
                size:String,
                price:Number
            }
        }
    }
});
const productDetails=mongoose.model('productDetails',productSchema);
export default productDetails;