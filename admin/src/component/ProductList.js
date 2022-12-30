import { Container,Grid,Paper,Card, Typography, Button, CardContent, CardMedia,InputLabel,MenuItem,Select,OutlinedInput } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteProduct,productUpdate} from '../redux/features/checkSlice';
export const ProductList = ({product}) => {
    const dispatch=useDispatch();
    const [stock,setStock]=useState({
      availability:""
    }
    );
    function updateStock(id,stock) {
      if(stock.availability!==""){
        console.log(stock);
       dispatch(productUpdate({id:id,stock:stock}));
      }
    }
  return (
        <Container>

          <Grid container  spacing={4} >
            <Grid item md={4} >
              <Card sx={{width:"250px"}}>
                <CardContent>
                <CardMedia component="img" image={product.prodtimage} height="100%" width="100%"/>
                </CardContent>
              </Card>
            </Grid>
            <Grid item md={6}>
              <Card sx={{marginTop:"8px",marginBottom:"8px"}}>
                    <CardContent>
                    <Typography variant="h6">{product.productname}--({product.availability})</Typography>
                    <Typography variant="subtitle2">{product.subtitle}</Typography>
                    <Typography variant="subtitle2">{product._id}</Typography>

                    <Typography variant="subtitle1">Price:₹{product.price}/-</Typography>
                    <Typography variant="body1" sx={{fontWeight:"bold"}}>Basic Specs</Typography>
                    <Typography variant="body1">Motherboard:{product?.basicspecs?.motherboard}</Typography>
                    <Typography variant="body1">Processor:{product?.basicspecs?.processor}-{product?.basicspecs?.chipset}</Typography>
                    <Typography variant="body1">Graphic:{product?.basicspecs?.graphic}</Typography>

                    </CardContent>
               </Card>
            </Grid>
            <Grid item md={2}>
          <InputLabel>Status</InputLabel>
        <Select
        input={<OutlinedInput  />}
        sx={{width:"150px",mb:"8px"}}
        value={stock.availability}
        onChange={(e)=>setStock({...stock,availability:e.target.value})}
        >
          <MenuItem value="">
            <em></em>
          </MenuItem>
          <MenuItem value="In Stock">In Stock</MenuItem>
          <MenuItem value="Out Of Stock">Out Of Stock</MenuItem>
          </Select>
              <Button variant="contained" sx={{ml:"8px",mr:"8px",position:"inherit"}} onClick={()=>updateStock(product._id,stock)}>Update Stock</Button>
              <Button variant="text" sx={{color:"red"}} 
              onClick={()=>dispatch(deleteProduct(product._id))}>Delete</Button>
            </Grid>
          </Grid>
        </Container>
  )
}
