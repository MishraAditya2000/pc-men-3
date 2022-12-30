import { Button, FormControl, Paper, TextField, Typography,Card,CardContent } from '@mui/material'
import { Container } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { orderHistory } from '../redux/features/userSlice';

export const Orderhistory = () => {
    const history=useSelector((state)=>state.userView.history);
    const [mail,setMail]=useState();
    // const[val,setVal]=useState("");
    const dispatch=useDispatch();
    function view(){
        console.log(mail);
        dispatch(orderHistory(mail));
    }
    
    useEffect(()=>{
    },[history]);
  return (
    <Container align="center">
        <Paper sx={{align:"center",mt:"12px",mb:"12px"}}>
            <Typography variant='h5'> Track Your PC Orders</Typography>
            </Paper>
            <FormControl>
                <TextField
                label="Mail Address"
                value={mail}
                onChange={(e)=>setMail(e.target.value)}
                />
            </FormControl>
                <Button onClick={view}variant="contained" sx={{mt:"8px",ml:"8px"}}>Search</Button>
        <Paper sx={{marginBottom:"48px"}}>
        Your Orders
        </Paper>
        {history.length>0?
        history.map((his)=>(
            <Paper sx={{mt:"12px",mb:"12px"}}>
        <Card>
          <CardContent align='left'>
            <Typography variant="h6">Order ID:{his._id} Order Date:{his.date}--Status:{his.status}</Typography>
            <Typography variant="h6">Product Name:{his.productname}</Typography>
            <Typography variant='h6'>Order Price:{his.price}/-</Typography>
          </CardContent>
          <CardContent>
            <Typography variant='body1' align='center'>ORDER DETAILS</Typography>
            <Typography variant='body1' align='center'>Name:{his.userdetails.name}</Typography>
            <Typography variant='body1' align='center'>Email:{his.userdetails.mail}</Typography>
            <Typography variant='body1' align='center'>Contact:{his.userdetails.mob}</Typography>
            <Typography variant='body1' align='center'>Address:{his.userdetails.address}</Typography>
            <Typography variant='body1' align='center'>PIN:{his.userdetails.pin}</Typography>
          </CardContent>
        </Card>
            </Paper>
        ))
        :console.log(history.length)}
    </Container>
  )
}
