import { Button, Container } from '@mui/material'
import React from 'react'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import {Link} from 'react-router-dom'
const Addbutton = () => {
  return (
    <Container sx={{marginTop:"8px"}}>
        <Button variant="outlined" component={Link} to="/products/addproduct">
            ADD PRODUCT <AddCircleOutlineIcon/>
        </Button>
    </Container>
  )
}

export default Addbutton;