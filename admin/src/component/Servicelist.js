import { Typography,Grid,Container,Card,CardContent, Paper } from '@mui/material'
import React from 'react'
import moment from "moment";
export const Servicelist = ({services}) => {
  return (
    <Container>
        <Paper sx={{marginTop:"8px",marginBottom:"8px"}} elevation={4}>
        <Card>
          <CardContent >
          <Typography variant="h6" text="text.primary">Order ID:{services._id}--Status:{services.status}</Typography>
          <Typography>Name:{services.user_name}</Typography>
          <Typography>Mail:{services.user_mail}</Typography>
          <Typography>Contact:{services.user_mob}</Typography>
          <Typography>Address:{services.address}</Typography>
          <Typography>Date:{services.issuedate}-{moment(services.issuedate).fromNow()}</Typography>
          <Typography>Issue:{services.issue}</Typography>

          </CardContent>
        </Card>
        </Paper>
      </Container>
  )
}
