import React, { useState } from 'react'
import {FormControl,Select,InputLabel,MenuItem,OutlinedInput,Paper,Container} from "@mui/material";
import {useSelector,useDispatch} from "react-redux";
import { updateStatus } from '../../redux/features/checkSlice';
const Servicefilter = () => {
  const dispatch=useDispatch();
  const initialStatus=useSelector((state)=>state.checking.filterStatus);
  const [status,setStatus]=useState(initialStatus);
  function filterStatus(e){
    setStatus(e.target.value);
    dispatch(updateStatus(e.target.value));
  }
  return (
   <Container sx={{mt:"18px"}}>
        <FormControl sx={{width:"400px"}}>
        <InputLabel>Status</InputLabel>
        <Select
        input={<OutlinedInput label="Status" />}
        value={status}
        onChange={(e)=>filterStatus(e)}
        >
          <MenuItem value="all">All</MenuItem>
          <MenuItem value="Booked">Booked</MenuItem>
          <MenuItem value="On Process">On Process</MenuItem>
          <MenuItem value="Delivered">Delivered</MenuItem>
          <MenuItem value="Cancelled">Cancelled</MenuItem>
          </Select>
        </FormControl>
   </Container>
  )
}

export default Servicefilter