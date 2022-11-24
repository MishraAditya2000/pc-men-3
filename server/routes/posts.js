import express from "express";
import { getPost,addProduct,deleteProduct, getProduct, ourPicks } from "../controller/products.js";

const router=express.Router();
router.get('/getpost',getPost);
router.get('/getproduct/:id',getProduct);
router.post('/addproduct',addProduct);
router.delete('/deleteproduct/:id',deleteProduct);

router.get('/getpost/ourpicks',ourPicks);

export default router;