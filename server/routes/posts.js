import express from "express";
import { serviceRequest, showService } from "../controller/orderservice.js";
import { getPost,addProduct,deleteProduct, getProduct, ourPicks, allProducts } from "../controller/products.js";

const router=express.Router();
router.get('/getpost',getPost);
router.get('/getproduct/:id',getProduct);
router.post('/addproduct',addProduct);
router.delete('/deleteproduct/:id',deleteProduct);

router.get('/getpost/ourpicks',ourPicks);
router.get('/allproducts',allProducts);


//service route
router.post('/requestservice',serviceRequest);
router.get('/orderedservice',showService);

export default router;