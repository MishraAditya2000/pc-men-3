import { Container, FormControl, MenuItem, Select,InputLabel,OutlinedInput  } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { filterStatus } from '../redux/features/userSlice';

export const Prodctfilter = () => {
    const dispatch=useDispatch();
    const initialCat=useSelector((state)=>state.userView.filterCat);
    const [catStatus,setCatStatus]=useState(initialCat);

    function filterCat(e){
        setCatStatus(e.target.value);
        dispatch(filterStatus(e.target.value));
    
    }

  return (
    <Container align="Center" sx={{margin:"8px"}}>
        <FormControl  sx={{ width: 300,mt:"8px"}}>
            <InputLabel>Category</InputLabel>
        <Select
        input={<OutlinedInput label="Category" />}
        value={catStatus}
        onChange={(e)=>filterCat(e)}
        >
          <MenuItem value="All">All</MenuItem>
          <MenuItem value="Budget PC">Budget PC</MenuItem>
          <MenuItem value="Mid-Range PC">Mid-Range PC</MenuItem>
          <MenuItem value="Weighty PC">Weighty PC</MenuItem>
          </Select>
        </FormControl>
        {/* {console.log(catStatus)} */}
    </Container>
  )
}
