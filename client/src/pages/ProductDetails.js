import { Card, CardContent, CardMedia, Container,Grid, Typography,Paper, FormControl,Select,MenuItem,OutlinedInput,InputLabel } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { productDetails } from '../redux/features/userSlice';

export const ProductDetails = () => {
    const dispatch=useDispatch();
    const {productId}=useParams();
    useEffect(()=>{
        console.log("Calling");
        dispatch(productDetails(productId))
    },[]);

    const products=useSelector((state)=>state.userView.selectedProduct);
    const [product,setProduct]=useState({
      productid:products?._id,
      productname:products.productname,
      productsubtitle:products.subtitle,
      prodtimg:products.prodtimage,
      basicspecs:products.basicspecs,
      ram:"",//name add
      storage:"",//name add
      oldprice:products.price,
      newprice:products.price,//price change
      os:"",
    });


    function selectRam(e){
      const val=e.target.value;
      console.log(val);
      console.log(e.target.name);
      // setProduct(...product,ram:e.target.value); setproduct karile kn error show karu thila ki->error kichhi nai features add kemiti heba mu thik se jani paruni
    }
    function ramPrice(e){
      
    }

  return (
        <Container>
        <div sx={{mt:"40px"}}>ProductDetails:{productId}</div>
        {console.log(product)}
        {products?
        <>
       
         <Typography variant="h6" text="text.secondary" sx={{marginTop:"8px",marginBottom:"8px"}}>Pre-Built PC-{products.category}</Typography>
        <Grid container spacing={4}>
        <Grid item>
            
        <Card>
            <CardMedia component="img" image={products.prodtimage} height="380px"/>
        </Card>
        </Grid>
        <Grid item>
        <Card sx={{marginBottom:"8px"}}>
            <CardContent>
                <Typography variant="h5" >Lenovo Desktop-{products.productname}</Typography>
                <Typography variant="subtitle2" >{products.subtitle}</Typography>
                <Typography variant="h6">Price:{product.oldprice}/- + (Free Shipping)</Typography> here also               
                <Typography variant="h6" >Base Specification:</Typography>
                <Typography variant="body1">Motherboard:{products?.basicspecs?.motherboard}</Typography>
                <Typography variant="body1">Processor:{products?.basicspecs?.processor}</Typography>
                <Typography variant="body1">chipset:{products?.basicspecs?.chipset}</Typography>
                <Typography variant="body1">Graphic:{products?.basicspecs?.graphic}</Typography>
            </CardContent>
        </Card>
        <Paper sx={{mr:"8px",mb:"8px",mt:"8px"}} align="center"><Typography variant="h5">Customize Your PC</Typography></Paper>
        <FormControl fullWidth sx={{marginTop:"8px",marginBottom:"8px"}}>
        <InputLabel>RAM</InputLabel>
        <Select
        input={<OutlinedInput label="RAM" />}
        value={product.ram}
        onChange={(e)=>selectRam(e)}
        >
          <MenuItem value={products?.customspecs?.ram?.default?.kit} >{products?.customspecs?.ram?.default?.kit}</MenuItem>
          <MenuItem value={products?.customspecs?.ram?.option1?.kit}>{products?.customspecs?.ram?.option1?.kit}</MenuItem>
          <MenuItem value={products?.customspecs?.ram?.option2?.kit}>{products?.customspecs?.ram?.option2?.kit}</MenuItem>

          </Select>
        </FormControl>
        <FormControl fullWidth sx={{marginTop:"8px",marginBottom:"8px"}}>
        <InputLabel>Storage</InputLabel>
        <Select
        input={<OutlinedInput label="Storage" />}
        value={product.storage}
        >
          <MenuItem value={products?.customspecs?.storage?.default?.size}>{products?.customspecs?.storage?.default?.size}-{products?.customspecs?.storage?.default?.price}</MenuItem>
          <MenuItem value={products?.customspecs?.storage?.option1?.size}>{products?.customspecs?.storage?.option1?.size}</MenuItem>
          <MenuItem value={products?.customspecs?.storage?.option2?.size}>{products?.customspecs?.storage?.option2?.size}</MenuItem>

          </Select>
        </FormControl>
        <FormControl fullWidth sx={{marginTop:"8px",marginBottom:"8px"}}>
        <InputLabel>Operating System</InputLabel>
        <Select
        input={<OutlinedInput label="Operating System"/>}
        value={product.storage}
        >
          <MenuItem value="Windows 10">Windows 10</MenuItem>
          <MenuItem value="Windows 11">Windows 11 22H2</MenuItem>

          </Select>
        </FormControl>
        </Grid>
        </Grid>
        </>:null}
       {console.log(products?.customspecs?.storage?.default?.price)}
        </Container>


  )
}
