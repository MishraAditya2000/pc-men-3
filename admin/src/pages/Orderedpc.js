import { Container } from '@mui/system';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Servicefilter from '../component/Filter/Servicefilter';
import { Orderlist } from '../component/Orderlist';
import { showOrders } from '../redux/features/checkSlice';
const Orderedpc = () => {

  const dispatch=useDispatch();
  const status=useSelector((state)=>state.checking.filterStatus);

  const orders=useSelector((state)=>state.checking.orders);

  const spreadedOrders=[...orders];

  const filteredOrders=spreadedOrders.filter(item=>{
    if(status==="all"){
      return true;
    }
    return item.status===status;
  })

  useEffect(()=>{
    dispatch(showOrders());
  },[orders])
  return (
    <Container>
      <Servicefilter/>
      {filteredOrders.map((orders)=>
      <Orderlist key={orders._id} orders={orders}/>
      )} 
    </Container>
  )
}

export default Orderedpc