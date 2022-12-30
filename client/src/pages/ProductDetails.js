import { Box,Card, CardContent, CardMedia, Container,Grid, Typography,Paper, FormControl,Select,MenuItem,OutlinedInput,InputLabel, TextField, Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { orderProduct, productDetails } from '../redux/features/userSlice';

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
      ram:products?.customspecs?.ram?.default?.kit,
      storage:products?.customspecs?.storage?.default?.size,
      price:products.price,
      status:"Booked",
      userdetails:{
        name:"",
        mail:"",
        mob:"",
        address:"",
        pin:""
      }
    });
    
    
    useEffect(()=>{
      
      const newP=JSON.parse(localStorage.getItem("details"));
      if(newP){
        setProduct((prev)=>({...prev,...newP}))
      }
      
    },[])
    useEffect(()=>{
      localStorage.setItem("details",JSON.stringify(product))
    },[product])
    
    function placeOrder(){
      dispatch(orderProduct(product));
      clear()
      alert("Order Successful");

    }
    function clear(){
      setProduct({
        userdetails:{
          name:"",
          mail:"",
          mob:"",
          address:"",
          pin:""
        }
      });
    }
    return (
      <Container>
        {/* <div sx={{mt:"40px"}}>ProductDetails:{productId}</div> */}
        {console.log(product)}
        {products?
        <>
       
         <Typography variant="h6" text="text.secondary" sx={{marginTop:"8px",marginBottom:"8px"}}>Pre-Built PC-{products.category}</Typography>
        <Grid container spacing={4}>
        <Grid item align="center">      
        <Card elevation={4}>
            <CardMedia component="img" image={products.prodtimage} height="340px"/>
        </Card>
        </Grid>
        <Grid item>
        <Card sx={{marginBottom:"8px"}}>
            <CardContent>
                <Typography variant="h5" >Lenovo Desktop-{products.productname}</Typography>
                <Typography variant="subtitle2" >{products.subtitle}</Typography>
                <Typography variant="h6">Price:₹{products.price}/- + (Free Shipping)</Typography>            
            </CardContent>
            <CardContent>
            <Typography variant="h6" >Base Specification:</Typography>
                <Typography variant="body1">Motherboard:{products?.basicspecs?.motherboard}</Typography>
                <Typography variant="body1">Processor:{products?.basicspecs?.processor}</Typography>
                <Typography variant="body1">chipset:{products?.basicspecs?.chipset}</Typography>
                <Typography variant="body1">Graphic:{products?.basicspecs?.graphic}</Typography>
                <Typography variant="body1">RAM:{products?.customspecs?.ram?.default?.kit}</Typography>
                <Typography variant="body1">Storage:{products?.customspecs?.storage?.default?.size}</Typography>
            </CardContent>
        </Card>
        {/* <Paper sx={{mr:"8px",mb:"8px",mt:"8px"}} align="center"><Typography variant="h5">Customize Your PC</Typography></Paper>
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
        </FormControl> */}

        <Paper  sx={{mb:"12px",mt:"12px"}} align="center"><Typography variant="h5">One Step Checkout</Typography></Paper>

        <FormControl fullWidth>
        <TextField name="name"
            variant="outlined"
            label="Name"
            value={product.userdetails.name} fullWidth
            onChange={(e)=>setProduct({...product,userdetails:{...product?.userdetails,name:e.target.value}})}
            type="text"
            sx={{"& label": {fontSize: "18px"},marginTop:"8px",marginBottom:"8px"}}
            />

            <TextField name="Email"
            variant="outlined"
            label="Email"
            value={product.userdetails.mail} fullWidth
            onChange={(e)=>setProduct({...product,userdetails:{...product?.userdetails,mail:e.target.value}})}
            type="text"
            sx={{"& label": {fontSize: "18px"},marginTop:"8px",marginBottom:"8px"}}
            />

            <TextField name="Mobile No."
            variant="outlined"
            label="Mobile No."
            value={product.userdetails.mob} fullWidth
            onChange={(e)=>setProduct({...product,userdetails:{...product?.userdetails,mob:e.target.value}})}
            type="number"
            sx={{"& label": {fontSize: "18px"},marginTop:"8px",marginBottom:"8px"}}
            />

          <TextField name="Address."
            variant="outlined"
            label="Address"
            value={product.userdetails.address} 
            onChange={(e)=>setProduct({...product,userdetails:{...product?.userdetails,address:e.target.value}})}
            type="text"
            sx={{"& label": {fontSize: "18px"},marginTop:"8px",marginBottom:"8px"}}
            rows={4}
            multiline
            />
            <TextField name="PIN"
            variant="outlined"
            label="PIN"
            value={product.userdetails.pin}
            onChange={(e)=>setProduct({...product,userdetails:{...product?.userdetails,pin:e.target.value}})}
            />
        </FormControl>
        <Box align="center" sx={{marginTop:"12px"}}>
        <Button  onClick={placeOrder} variant="contained" sx={{marginRight:"8px"}}>Place Order</Button>
        <Button onClick={clear} variant="outlined" sx={{marginLeft:"8px"}}>Clear</Button>
        </Box>
        </Grid>
        </Grid>
        </>:null}
       {console.log(products?.customspecs?.storage?.default?.price)}
        </Container>


  )
}
