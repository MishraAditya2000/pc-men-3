import React, { useEffect } from "react";
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Grow, Typography,Grid,Card,CardContent,CardMedia, Box,CardActions,Button } from "@mui/material";
import { Container } from "@mui/material";
import ServiceFrom from "../Form/serviceform";
import { useDispatch,useSelector } from "react-redux";
import { ourPick } from "../redux/features/userSlice";
import { Link } from "react-router-dom";
const Home=()=> {
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(ourPick());
    },[dispatch])
    const ourPicks=useSelector((state)=>state.userView.products);
    const id=useSelector((state)=>state.userView.serviceFrom);

        return (
            <Container sx={{padding:"0",marginTop:"18px",marginBottom:"18px"}} >
            <Carousel showThumbs={false} width="100%">
                <div>
                    <img src="https://img.freepik.com/free-vector/code-testing-cartoon-banner-functional-test-methodology-programming-search-errors-bugs-website-platform-development-dashboard-usability-optimization-computer-pc-vector-illustration_107791-3766.jpg?w=1380&t=st=1666878740~exp=1666879340~hmac=640883dc66025c045c844c8c1af47887b44c8da2e49381be79dc293088b8d5eb"/>
                </div>
                <div>
                    <img src="https://www.freepik.com/free-vector/software-testing-cartoon-banner-functional-test-methodology-programming-search-errors-bugs-website-platform-development-dashboard-usability-optimization-computer-pc-illustration_9498906.htm#query=computer%20banner&position=7&from_view=keyword" />
                </div>
            </Carousel> 
            <Grow in>
             <Container >         
             <Grid container spacing={1} justifyContent="space-between" alignItems="stretch" >
                <Grid item xs={12} sm={7}>
                <Typography variant="h5" sx={{alignContent:"center",mb:"8px",mt:"8px"}}>Our Picks</Typography>
                <Grid container>
                  <Grid container  spacing={4}>
                    {ourPicks.map((product)=>
                             <Grid key={product._id} item md={6} sm={12}>
                               <Card sx={{ maxWidth: 345,mt:"8px",mb:"8px"}}>
                                 <CardMedia
                                   component="img"
                                   height="120px"
                                   image={product.prodtimage}
                                   alt={product._id}
                                 />
                                 <CardContent>
                                   <Typography gutterBottom variant="h5" component="div">
                                    {product.productname}
                                   </Typography>
                                   <Typography variant="body2" color="text.secondary">
                                    {product.subtitle}
                                   </Typography>
                                   <Typography variant="body2" color="text.primary">
                                    Price:{product.price}/-
                                   </Typography>
                                 </CardContent>
                                 <CardActions align="center">
                                 {/* <Link to={`/details/${products._id}`}>View Details</Link> */}
                                 <Button component={Link} to={`/details/${product._id}`} >View Details</Button>
                               </CardActions>
                             </Card>
                           </Grid>
                 )}
                 </Grid>

                </Grid>
                </Grid>
                <Grid item xs={12} sm={4}>
                     <ServiceFrom/>
                </Grid>
                </Grid> 
                
                </Container >                
            </Grow>  
            </Container>


    )
}
export default Home;