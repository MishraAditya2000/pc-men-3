import { Typography,Grid,Container,Card,CardContent, Paper } from '@mui/material'
import React from 'react'
import moment from "moment";
export const Orderlist = ({orders}) => {
  return (
    <Container>
        <Paper sx={{marginTop:"8px",marginBottom:"8px"}} elevation={4}>
        <Card>
          <CardContent align='left'>
            <Typography variant="h6">Order ID:{orders._id} Order Date:{orders.date}</Typography>
            <Typography variant="h6">Product Name:{orders.productname}</Typography>
            <Typography variant='h6'>Order Price:{orders.price}/-</Typography>
          </CardContent>
          <CardContent>
            <Typography variant='body1' align='center'>ORDER DETAILS</Typography>
            <Typography variant='body1' align='center'>Name:{orders.userdetails.name}</Typography>
            <Typography variant='body1' align='center'>Email:{orders.userdetails.mail}</Typography>
            <Typography variant='body1' align='center'>Contact:{orders.userdetails.mob}</Typography>
            <Typography variant='body1' align='center'>Address:{orders.userdetails.address}</Typography>
            <Typography variant='body1' align='center'>PIN:{orders.userdetails.pin}</Typography>



          </CardContent>
        </Card>
        </Paper>
      </Container>
  )
}
