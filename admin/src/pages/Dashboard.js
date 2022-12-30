import { Paper, Typography,Grid,Card } from '@mui/material';
import { Container } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, showOrders, showService } from '../redux/features/checkSlice';
const Dashboard = () => {
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(fetchProducts());
    dispatch(showOrders());
    dispatch(showService());
  },[dispatch])
  const allInfo=useSelector((state)=>state.checking);
  return (
    <Container>
   <Paper sx={{marginTop:"12px"}}><Typography variant='h4'>Dashboard</Typography></Paper>
    <Grid container spacing={4} direction="row" sx={{marginTop:"12px",marginBottom:"12px"}} align="center">
      <Grid item lg={4}>
        <Card sx={{width:"250px",height:"120px"}}>
        <Typography variant='h6'sx={{paddingBottom:"12px"}}>Total Products</Typography>
        <Typography variant='h6'>{allInfo.products.length}</Typography>
        </Card>
        
        
      </Grid>
      <Grid item lg={4}>
       <Card sx={{width:"250px",height:"120px"}}>
        <Typography variant='h6'sx={{paddingBottom:"12px"}}>Total Service Order</Typography>
        <Typography variant='h6'>{allInfo.services.length}</Typography>
       </Card>
        
        
      </Grid>
      <Grid item lg={4}>
       <Card sx={{width:"250px",height:"120px"}}>
        <Typography variant='h6'sx={{paddingBottom:"12px"}}>Total PC Order</Typography>
        <Typography variant='h6'>{allInfo.orders.length}</Typography>
       </Card>
      
      </Grid>
      {/* <Grid item lg={4}>
       <Card sx={{width:"250px",height:"120px"}}>
        <Typography variant='h6'sx={{paddingBottom:"12px"}}>PC Order Last Week</Typography>
        <Typography variant='h6'>2</Typography>
       </Card>
      
      </Grid>
      <Grid item lg={4}>
       <Card sx={{width:"250px",height:"120px"}}>
        <Typography variant='h6' sx={{paddingBottom:"12px"}}>PC Order Last Month </Typography>
        <Typography variant='h6'>6</Typography>
       </Card>
      
      </Grid>
      <Grid item lg={4}>
       <Card sx={{width:"250px",height:"120px"}}>
        <Typography variant='h6'sx={{paddingBottom:"12px"}}>Service Order Last Week</Typography>
        <Typography variant='h6'>4</Typography>
       </Card>
      
      </Grid> */}
    </Grid>
    </Container>
  )
}

export default Dashboard