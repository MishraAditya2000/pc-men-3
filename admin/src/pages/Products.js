import { Container, Grid } from '@mui/material'
import React from 'react'
import Addbutton from '../component/addbutton'
import Productfilter from '../component/Filter/Productfilter'

const Products = () => {
  return (
    <Container sx={{m:1}}>
      <Grid container justifyContent="flex-end">
        <Grid item md={8}>
             <Productfilter/>
        </Grid>
        <Grid item md={4}>
          <Addbutton/>
        </Grid>
      </Grid>
 
    
    </Container>
  )
}

export default Products