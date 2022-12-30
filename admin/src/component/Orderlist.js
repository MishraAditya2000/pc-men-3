import { Typography,Grid,Container,Card,CardContent, Paper, CardActions,Select,InputLabel,OutlinedInput,MenuItem,Button } from '@mui/material'
import React, { useState } from 'react'
import moment from "moment";
import { useDispatch } from 'react-redux';
import { orderUpdate } from '../redux/features/checkSlice';

export const Orderlist = ({orders}) => {
  const dispatch=useDispatch();
  const [status,setStatus]=useState({
    status:""
  });
  function orderStatus(id,status){
    if(status.status!==""){
      dispatch(orderUpdate({id:id,status:status}));
      setStatus({...status,status:""});
    }
  }
  return (
    <Container>
        <Paper sx={{marginTop:"8px",marginBottom:"8px"}} elevation={4}>
        <Card>
          <CardContent align='left'>
            <Typography variant="h6">Order ID:{orders._id} Order Date:{orders.date}--Status:{orders.status}</Typography>
            <Typography variant="h6">Product Name:{orders.productname}</Typography>
            <Typography variant='h6'>Order Price:{orders.price}/-</Typography>
          </CardContent>
          <CardContent>
            <Typography variant='body1' align='center'>ORDER DETAILS</Typography>
            <Typography variant='body1' align='center'>{moment(orders.date).fromNow()}</Typography>
            <Typography variant='body1' align='center'>Name:{orders.userdetails.name}</Typography>
            <Typography variant='body1' align='center'>Email:{orders.userdetails.mail}</Typography>
            <Typography variant='body1' align='center'>Contact:{orders.userdetails.mob}</Typography>
            <Typography variant='body1' align='center'>Address:{orders.userdetails.address}</Typography>
            <Typography variant='body1' align='center'>PIN:{orders.userdetails.pin}</Typography>

          <InputLabel>Status</InputLabel>
        <Select
        input={<OutlinedInput  />}
        sx={{width:"150px",mb:"8px"}}
        value={status.status}
        onChange={(e)=>setStatus({...status,status:e.target.value})}
        >
          <MenuItem value="Booked">Booked</MenuItem>
          <MenuItem value="On Process">On Process</MenuItem>
          <MenuItem value="Delivered">Delivered</MenuItem>
          <MenuItem value="Cancelled">Cancelled</MenuItem>
          </Select>
              <Button variant="contained" sx={{ml:"8px",mr:"8px",position:"inherit"}}
              onClick={()=>orderStatus(orders._id,status)}>Update Status</Button>
          </CardContent>
        </Card>
        </Paper>
      </Container>
  )
}
