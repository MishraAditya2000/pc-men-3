import axios from "axios";

const API=axios.create({baseURL:'http://localhost:5000/posts'});

export const ourPicks=()=>API.get("/getPost/ourpicks");
export const fetchProduct=()=>API.get("/allproducts");
export const productDetails=(id)=>API.get(`/getproduct/${id}`);
export const requestService=(serviceData)=>API.post("/requestservice",serviceData);
export const orderProduct=(product)=>API.post("/addorder",product);
export const orderHistory=(mail)=>API.get(`/history/${mail}`,mail);
export const serviceHistory=(mail)=>API.get(`/servicehistory/${mail}`,mail);