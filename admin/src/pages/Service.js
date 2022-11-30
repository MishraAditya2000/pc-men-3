import React, { useEffect, useState } from 'react'
import {Card,CardContent, Container,Paper, Typography} from "@mui/material";
import {useSelector,useDispatch} from "react-redux";
import { showService } from '../redux/features/checkSlice';
import Servicefilter from '../component/Filter/Servicefilter';
import { Servicelist } from '../component/Servicelist';
const Service = () => {
  const dispatch=useDispatch();
  const status=useSelector((state)=>state.checking.filterStatus);

  const services=useSelector((state)=>state.checking.services);

  const spreadedService=[...services];

  const filteredService=spreadedService.filter(item=>{
    if(status==="all"){
      return true;
    }
    return item.status===status;
  })

  useEffect(()=>{
    dispatch(showService());
  },[])

  return (
    <Container>
      <Servicefilter/>
     {filteredService.map((services)=>
      <Servicelist key={services._id} services={services}/>
      )} 
    {console.log(filteredService)}
   </Container>
  )
}

export default Service;