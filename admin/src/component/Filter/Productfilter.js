import { Button, FormControl, InputLabel,MenuItem,Select } from '@mui/material'
import { Container } from '@mui/system'
import React, { useState } from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import { useDispatch, useSelector } from 'react-redux';
import { updateCat, updateStock } from '../../redux/features/checkSlice';
const Productfilter = () => {
    const dispatch=useDispatch();
    const initialCat=useSelector((state)=>state.checking.filterCat);
    const [catStatus,setCatStatus]=useState(initialCat);

    const initalStock=useSelector((state)=>state.checking.filterStock);
    const [stockStatus,setStockStatus]=useState(initalStock);
    
    function filterCat(e){
      setCatStatus(e.target.value);
      dispatch(updateCat(e.target.value));
    }
    function filterStock(e){
      setStockStatus(e.target.value);
      setCatStatus(e.target.value);
      dispatch(updateStock(e.target.value));
    }

  return (
    <Container sx={{pt:"16px",pb:"16px"}} >
        <FormControl  sx={{ width: 300,mr:"8px"}}>
            <InputLabel>Category</InputLabel>
        <Select
        input={<OutlinedInput label="Category" />}
        value={catStatus}
        onChange={(e) => filterCat(e)}
        >
          <MenuItem value="all">All</MenuItem>
          <MenuItem value="Budget PC">Budget PC</MenuItem>
          <MenuItem value="Mid-Range PC">Mid-Range PC</MenuItem>
          <MenuItem value="Weighty PC">Weighty PC</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{width:150,mr:"8px"}}>
          <InputLabel>Status</InputLabel>
        <Select
        input={<OutlinedInput label="Status" />}
        value={stockStatus}
        onChange={(e) => filterStock(e)}
        >
          <MenuItem value="all">
            <em>All</em>
          </MenuItem>
          <MenuItem value="In Stock">In Stock</MenuItem>
          <MenuItem value="Out Of Stock">Out Of Stock</MenuItem>

          </Select>
          
        </FormControl>
        <Button variant="contained" sx={{width:"200px",height:"52px"}}>FILTER</Button>
    </Container>
  )
}

export default Productfilter