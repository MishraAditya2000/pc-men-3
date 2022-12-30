import axios from 'axios';

const API=axios.create({baseURL:'http://localhost:5000/posts'});


export const getPost=()=>API.get("/getpost");
export const deleteProduct=(id)=>API.delete(`/deleteproduct/${id}`);
export const addProduct=(newProduct)=>API.post('/addproduct',newProduct);
export const showOrders=()=>API.get('/showorder');

export const showService=()=>API.get("/orderedservice");
export const productUpdate=(id,stock)=>API.patch(`/updateproduct/${id}`,stock);
export const serviceUpdate=(id,status)=>API.patch(`/updateservice/${id}`,status);
export const ordertUpdate=(id,status)=>API.patch(`/updateorder/${id}`,status);

