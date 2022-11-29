import { Container, Grow} from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Prodctfilter } from "../component/Prodctfilter";
import { ProductList } from "../component/ProductList";
import { fetchProducts } from "../redux/features/userSlice";
const Prebuiltpc=()=>{
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(fetchProducts())
    },[dispatch])
    const products=useSelector((state)=>state.userView.products);

    const categorySelceted=useSelector((state)=>state.userView.filterCat);

    const spreadProduct=[...products];

    const filteredProducts=spreadProduct.filter((item)=>{
        if(categorySelceted==="All"){
            return true;
        }
        return item.category===categorySelceted;
    })


    return(
            <Grow in>
            <Container sx={{mt:"18px"}}>
            <Prodctfilter/>
            {filteredProducts.map((products)=>
            <ProductList key={products._id} products={products}/>
            )}
            </Container>
            </Grow>
    )
}
export default Prebuiltpc;