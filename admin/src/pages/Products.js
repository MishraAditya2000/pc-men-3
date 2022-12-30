import { Container, Grid,Paper } from '@mui/material'
import React, { useState } from 'react'
import Addbutton from '../component/addbutton'
import Productfilter from '../component/Filter/Productfilter'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchProducts,deleteProduct } from '../redux/features/checkSlice';
import { ProductList } from '../component/ProductList';

const Products = () => {
  const product=useSelector((state)=>(state.checking.products));
  const dispatch=useDispatch();
  useEffect(()=>{ 
      dispatch(fetchProducts())
  },[product]);
  const catStatus=useSelector((state)=>state.checking.filterCat);
  const stockStatus=useSelector((state)=>state.checking.filterStock);

  const finalProduct=[...product];

  const filter1Product=finalProduct.filter(item=>{
    if(catStatus==="all"){
      return true;
    }
      return item.category===catStatus;
  })

  const filteredProduct=filter1Product.filter(item=>{
    if(stockStatus==="all"){
      return true;
    }
    return item.availability===stockStatus;
  })


  return (
    <Container sx={{marginTop:"12px",marginBottom:"18px"}}>

      <Paper elevation={4}>
      <Grid container justifyContent="flex-end" key="filter">
        <Grid item md={8}>
             <Productfilter/>
        </Grid>
        <Grid item md={4}>
          <Addbutton/>
        </Grid>
      </Grid>
      </Paper>

      <Paper elevation={0} sx={{mt:"18px"}} >
        
      {filteredProduct&&filteredProduct.length>0?
          filteredProduct.map((product)=>(
            <ProductList key={product._id} product={product}/>
          )):null
      }
      </Paper>
    </Container>
  )
}

export default Products