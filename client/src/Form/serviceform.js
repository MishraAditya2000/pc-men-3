
import { Typography,TextField,Button,Paper, FormControl } from "@mui/material";
import React, { useState } from "react";
// import styled from "styled-components"
// // Styling For TextField
// const CustomTextField=styled(TextField)`
//     padding:18px;
//     margin:"40px";
// `;

const ServiceFrom=()=>{
         const serviceData=useState({
            user_name:'',
            user_mail:'',
            user_mob:'',
            address:'',
            issue:'',
            issuedate:''
         })
         const clear=()=>{
            serviceData({
                user_name:'',
                user_mail:'',
                user_mob:'',
                address:'',
                issue:'',
                issuedate:'' 
            })
         }
    return(
        <Paper sx={{
            '& .MuiTextField-root':{p:"12px"},
            padding:"8px",
            
        }} id="service">
        <FormControl autoComplete="off" noValidate onSubmit={()=>{alert("Working")}} fullWidth>
            
            <Typography variant="h6">Order a Service</Typography>
            <TextField name="user_name"
            variant="outlined"
            label="Name"
            value={serviceData.user_name} fullWidth
            sx={{"& label": {fontSize: "18px"}}}
            />

            <TextField name="user_mail"
            variant="outlined"
            label="Email"
            value={serviceData.user_mail}
            sx={{"& label": {fontSize: "18px"}}}
            />

            <TextField name="user_mob"
            variant="outlined"
            label="Mobile No"
            value={serviceData.user_mob}
            sx={{"& label": {fontSize: "18px"}}}
            />

            <TextField name="address"
            variant="outlined"
            label="Address"
            value={serviceData.address}
            multiline 
            rows={3}
            sx={{"& label": {fontSize: "18px"}}}
            />

            <TextField name="issue"
            variant="outlined"
            label="System Issue"
            value={serviceData.issue}
            helperText="Explain your problem"
            multiline 
            rows={3}
            sx={{"& label": {fontSize: "18px"}}}

            />

            <Button  variant="contained" color="primary" size="small" type="submit">SUBMIT</Button>
            <Button variant="outlined" color="secondary" size="small" onClick={clear}>CLEAR</Button>
            </FormControl>

        </Paper>
    );
}
export default ServiceFrom;