import { Button, FormControl, InputLabel,MenuItem,Select } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';

const Productfilter = () => {
  return (
    <Container >
        <FormControl  sx={{ width: 300,padding:"8px" }}>
            <InputLabel>Category</InputLabel>
        <Select
        input={<OutlinedInput label="Category" />}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem>All</MenuItem>
          <MenuItem>Category 1</MenuItem>
          <MenuItem>Category 2</MenuItem>
          <MenuItem>Category 3</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{width:150,padding:"8px" }}>
          <InputLabel>Status</InputLabel>
        <Select
        input={<OutlinedInput label="Status" />}
        
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem>Available</MenuItem>
          <MenuItem>Unavailable</MenuItem>

          </Select>
          
        </FormControl>
        <Button variant="contained" sx={{m:1,width:"200px",height:"52px"}}>FILTER</Button>
    </Container>
  )
}

export default Productfilter