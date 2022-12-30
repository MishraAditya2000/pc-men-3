import express from "express";
import { userLogin, userRegister } from "../controller/auth.js";
import { serviceHistory, serviceRequest, showService, updateService } from "../controller/orderservice.js";
import { addOrder,orderHistory,showOrder, updatePCorder } from "../controller/productorder.js";
import { getPost,addProduct,deleteProduct, getProduct, ourPicks, allProducts, updateStock} from "../controller/products.js";

const router=express.Router();
router.get('/getpost',getPost);
router.get('/getproduct/:id',getProduct);
router.post('/addproduct',addProduct);
router.delete('/deleteproduct/:id',deleteProduct);

//orders routes
router.post('/addorder',addOrder);
router.get('/showorder',showOrder);
router.delete('/delete/:id',deleteProduct);
router.patch('/updateproduct/:id',updateStock);
router.patch('/updateservice/:id',updateService);
router.patch('/updateorder/:id',updatePCorder);



router.get('/getpost/ourpicks',ourPicks);
router.get('/allproducts',allProducts);
router.get('/history/:mail',orderHistory);
router.get('/servicehistory/:mail',serviceHistory);

//service route
router.post('/requestservice',serviceRequest);
router.get('/orderedservice',showService);

//Authentication Routes
router.post('/login',userLogin);
router.post('/register',userRegister);

export default router;