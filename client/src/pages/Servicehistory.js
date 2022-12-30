import { Button, FormControl, Paper, TextField, Typography,Card,CardContent } from '@mui/material'
import { Container } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { serviceHistory } from '../redux/features/userSlice';

export const Servicehistory = () => {
    const history=useSelector((state)=>state.userView.service);
    const [mail,setMail]=useState();
    // const[val,setVal]=useState("");
    const dispatch=useDispatch();
    function view(){
        console.log(mail);
        dispatch(serviceHistory(mail));
    }
    
    useEffect(()=>{
    },[history]);
  return (
    <Container align="center">
        <Paper sx={{align:"center",mt:"12px",mb:"12px"}}>
            <Typography variant='h5'> Track Your Service Order</Typography>
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
            <Typography variant="h6">Issue:{his.issue}</Typography>
            
          </CardContent>
          <CardContent>
            <Typography variant='body1' align='center'>ORDER DETAILS</Typography>
            <Typography variant='body1' align='center'>Name:{his.user_name}</Typography>
            <Typography variant='body1' align='center'>Email:{his.user_mail}</Typography>
            <Typography variant='body1' align='center'>Contact:{his.user_mob}</Typography>
            <Typography variant='body1' align='center'>Address:{his.address}</Typography>
            {/* <Typography variant='body1' align='center'>PIN:{his.user_pin}</Typography> */}
          </CardContent>
        </Card>
            </Paper>
        ))
        :console.log(history.length)}
    </Container>
  )
}

