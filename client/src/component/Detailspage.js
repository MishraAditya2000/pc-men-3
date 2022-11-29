import React from 'react'
import { Container,Card,CardContent,CardMedia,Typography,Grid, useMediaQuery, useTheme, CardActions, Button,Paper } from '@mui/material'

export const Detailspage = ({product}) => {
  return (
    <Container>
    {/* <div sx={{mt:"40px"}}>ProductDetails:{productId}</div> */}
    {console.log(product.availability)}
    {console.log(product)}

    <Typography variant="h6" text="text.secondary" sx={{margin:"8px"}}>Pre-Built PC-{product.category}</Typography>
    <Grid container spacing={4}>
    <Grid item>
        
    <Card>
        <CardMedia component="img" image={product.prodtimage} height="380px"/>
    </Card>
    </Grid>
    <Grid item>
    <Card sx={{marginBottom:"8px"}}>
        <CardContent>
            <Typography variant="h5" >Lenovo Desktop-{product.productname}</Typography>
            <Typography variant="subtitle2" >{product.subtitle}</Typography>
            <Typography variant="h6">Price:{product.price}/- + (Free Shipping)</Typography>                
            <Typography variant="h6" >Base Specification:</Typography>
            <Typography variant="body1">Motherboard:{product.basicspecs.motherboard}</Typography>
            <Typography variant="body1">Processor:{product.basicspecs.processor}</Typography>
            <Typography variant="body1">chipset:{product.basicspecs.chipset}</Typography>
            <Typography variant="body1">Graphic:{product.basicspecs.graphic}</Typography>
        </CardContent>
    </Card>
    <Paper sx={{mr:"8px",mb:"8px"}} align="center"><Typography variant="h5">Customize Your PC</Typography></Paper>
    </Grid>
    </Grid>
    </Container>
  )
}
