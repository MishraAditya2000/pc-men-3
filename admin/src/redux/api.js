import axios from 'axios';

const API=axios.create({baseURL:'http://localhost:5000/posts'});


export const getPost=()=>API.get("/getpost");
export const deleteProduct=(id)=>API.delete(`/deleteproduct/${id}`);
export const addProduct=(newProduct)=>API.post('/addproduct',newProduct);

export const showService=()=>API.get("/orderedservice");