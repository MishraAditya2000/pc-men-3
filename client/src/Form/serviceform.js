
import { Typography,TextField,Button,Paper, FormControl } from "@mui/material";
import React, { useState } from "react";
import { useDispatch} from "react-redux";
import { serviceRequest } from "../redux/features/userSlice";
import {Link} from "react-router-dom"
// import styled from "styled-components"
// // Styling For TextField
// const CustomTextField=styled(TextField)`
//     padding:18px;
//     margin:"40px";
// `;


const ServiceFrom=()=>{
    const dispatch=useDispatch();
    const [serviceData,setServiceData]=useState({
        user_name:'',
        user_mail:'',
        user_mob:'',
        address:'',
        issue:'',
    });
    const handleSubmit=()=>{
        dispatch(serviceRequest(serviceData));
        clear();
        // window.location.href = '/ordersuccessful';
        alert("Service Order Successful");
    }
         const clear=()=>{
            setServiceData({
                user_name:'',
                user_mail:'',
                user_mob:'',
                address:'',
                issue:'',
                status:"Booked"
            })
         }
    return(
        <Paper sx={{
            '& .MuiTextField-root':{m:"12px"},
            padding:"8px"
            
        }} id="service">
        <FormControl autoComplete="off" noValidate  fullWidth required={true}>
            
            <Typography variant="h6">Order a Service</Typography>
            <TextField required
            name="user_name"
            variant="outlined"
            label="Name"
            value={serviceData.user_name} fullWidth
            onChange={(e)=>setServiceData({...serviceData,user_name:e.target.value})}
            type="text"
            sx={{"& label": {fontSize: "18px"}}}
            />

            <TextField name="user_mail"
            required
            variant="outlined"
            label="Email"
            value={serviceData.user_mail}
            sx={{"& label": {fontSize: "18px"}}}
            onChange={(e)=>setServiceData({...serviceData,user_mail:e.target.value})}
            type="email"
            />

            <TextField name="user_mob"
            required
            variant="outlined"
            label="Mobile No"
            value={serviceData.user_mob}
            sx={{"& label": {fontSize: "18px"}}}
            onChange={(e)=>setServiceData({...serviceData,user_mob:e.target.value})}
            type="number"
        
            />

            <TextField name="address"
            required
            variant="outlined"
            label="Address"
            value={serviceData.address}
            multiline 
            rows={3}
            sx={{"& label": {fontSize: "18px"}}}
            onChange={(e)=>setServiceData({...serviceData,address:e.target.value})}
            type="text"
            />

            <TextField name="issue"
            required
            variant="outlined"
            label="System Issue"
            value={serviceData.issue}
            onChange={(e)=>setServiceData({...serviceData,issue:e.target.value})}
            helperText="Explain your problem"
            multiline 
            rows={3}
            sx={{"& label": {fontSize: "18px"}}}
            type="text"

            />

            <Button onClick={handleSubmit} 
            variant="contained" 
            color="primary" 
            size="medium" 
            type="submit" 
            sx={{mt:"8px",mb:"8px"}}
            >SUBMIT</Button>
            <Button variant="outlined" color="secondary" size="small" onClick={clear} sx={{mt:"8px",mb:"8px"}}>CLEAR</Button>
            </FormControl>
        </Paper>
    );
}
export default ServiceFrom;