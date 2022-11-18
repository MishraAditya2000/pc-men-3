import express from "express";
import { getPost,addProduct,deleteProduct, getProduct } from "../controller/products.js";

const router=express.Router();
router.get('/getpost',getPost);
router.get('/getproduct/:id',getProduct);
router.post('/addproduct',addProduct);
router.delete('/deleteproduct/:id',deleteProduct);
export default router;