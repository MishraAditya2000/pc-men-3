import { Container,Grid,Paper,Card, Typography, Button, CardContent, CardMedia } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteProduct } from '../redux/features/checkSlice';
export const ProductList = ({product}) => {
    const dispatch=useDispatch();
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
                    <Typography variant="h6">{product.productname}</Typography>
                    <Typography variant="subtitle2">{product.subtitle}</Typography>
                    <Typography variant="subtitle2">{product._id}</Typography>

                    <Typography variant="subtitle1">Price:{product.price}/-</Typography>
                    <Typography variant="body1" sx={{fontWeight:"bold"}}>Basic Specs</Typography>
                    <Typography variant="body1">Motherboard:{product?.basicspecs?.motherboard}</Typography>
                    <Typography variant="body1">Processor:{product?.basicspecs?.processor}-{product?.basicspecs?.chipset}</Typography>
                    <Typography variant="body1">Graphic:{product?.basicspecs?.graphic}</Typography>

                    </CardContent>
               </Card>
            </Grid>
            <Grid item md={2}>
              <Button variant="contained" sx={{ml:"8px",mr:"8px",position:"inherit"}}>Edit Product</Button>
              <Button variant="text" sx={{color:"red"}} onClick={()=>dispatch(deleteProduct(product._id))}>Delete</Button>
            </Grid>
          </Grid>
        </Container>
  )
}
