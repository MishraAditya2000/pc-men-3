import { Container,Card,CardContent,CardMedia,Typography,Grid, useMediaQuery, useTheme, CardActions, Button } from '@mui/material'
import React from 'react';
import { useDispatch } from 'react-redux';
import {Link} from 'react-router-dom';
import { productDetails } from '../redux/features/userSlice';

export const ProductList = ({products}) => {
  const dispatch=useDispatch();
  const theme=useTheme();
  const isMatch=useMediaQuery(theme.breakpoints.down('md'));
  return (
    <Container align="center">
      {
        isMatch?(
          <Grid container>
            <Grid item md={8} sm={12}>
              <Card sx={{ maxWidth: 345,mt:"8px",mb:"8px" }}>
                <CardMedia
                  component="img"
                  height="280"
                  image={products.prodtimage}
                  alt={products._id}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                   {products.productname}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                   {products.subtitle}
                  </Typography>
                  <Typography variant="body2" color="text.primary">
                   Price:₹{products.price}/-
                  </Typography>
                </CardContent>
                <CardActions>
                {/* <Link to={`/details/${products._id}`}>View Details</Link> */}
                <Button component={Link} to={`/details/${products._id}`} >View Details</Button>
              </CardActions>
            </Card>
          </Grid>

          </Grid>
        ):
        (
      <Grid container spacing={35}>
          <Grid item md={2}>
            <Card sx={{width:"250px",marginTop:"8px",marginBottom:"8px"}}>
              <CardContent>
              <CardMedia component="img" image={products.prodtimage} height="100%" width="100%"/>
              </CardContent>
            </Card>
          </Grid>

          <Grid item md={8}>
            <Card sx={{marginTop:"8px",marginBottom:"8px"}}>
                  <CardContent>
                  <Typography variant="h6">{products.productname}</Typography>
                  <Typography variant="subtitle2">{products.subtitle}</Typography>
                  <Typography variant="body1" sx={{fontWeight:"bold"}}>Basic Specs</Typography>
                  <Typography variant="body1">Motherboard:{products?.basicspecs?.motherboard}</Typography>
                  <Typography variant="body1">Processor:{products?.basicspecs?.processor}-{products?.basicspecs?.chipset}</Typography>
                  <Typography variant="body1">Graphic:{products?.basicspecs?.graphic}</Typography>
                  <Typography variant="body1">RAM:{products?.customspecs?.ram?.default?.kit}</Typography>
                  <Typography variant="body1">Storage:{products?.customspecs?.storage?.default?.size}</Typography>
                  </CardContent>
              <CardContent>
                <Typography>Price:₹{products.price}/-</Typography>
                <Button component={Link} to={`/details/${products._id}`} size="large" variant='outlined'>View Details</Button>
              </CardContent>
            </Card>
          </Grid>
      </Grid>
        )
      }
    </Container>

  )
}
