import { Typography,Grid,Container,Card,CardContent, Paper,InputLabel,MenuItem,Select,OutlinedInput,Button} from '@mui/material'
import React,{useState} from 'react';
import { useDispatch } from 'react-redux';
import moment from "moment";
import { serviceUpdate } from '../redux/features/checkSlice';
export const Servicelist = ({services}) => {
  const dispatch=useDispatch();
  const [status,setStatus]=useState(
    {
    status:""
  }
  );
  function serviceStatus(id,status){
    if(status.status!==""){
      dispatch(serviceUpdate({id:id,status:status}));
      setStatus({...status,status:""});
      alert("Status Updated Successfully")
    }
  }
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
              onClick={()=>{serviceStatus(services._id,status)}}>Update Status</Button>
          </CardContent>
        </Card>
        </Paper>
      </Container>
  )
}
