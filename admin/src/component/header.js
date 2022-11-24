import React from "react";
import { useState } from "react";
import {AppBar,Typography,Toolbar,Tabs,Tab,Button} from "@mui/material";
import ComputerIcon from '@mui/icons-material/Computer';
// import Drawercomp from "./drawer";
import { BrowserRouter as Router,Routes,Route,Link } from "react-router-dom";


import Dashboard from "../pages/Dashboard";
import Orderedpc from "../pages/Orderedpc";
import Products from "../pages/Products";
import Service from "../pages/Service";import Addproduct from "../pages/Addproduct";
;




const Header=()=>{
    const routes=["/","/products","/orderservice","/orderspc","/addproduct"]
    const handleChange=(e,newvalue)=>{SetValue(newvalue)}
    const [value,SetValue]=useState(false);
    
    return(
        <div>
            <React.Fragment>
                <AppBar position="relative">
                    <Toolbar>
                    <ComputerIcon sx={{marginLeft:"8px"}}/>
                    <Typography variant="body1" sx={{marginLeft:"8px",fontSize:"22px"}}> PC Mender-Admin</Typography>       


                        {/* {
                        isMatch?(
                            <>
                    <Drawercomp/>                            
                            </>
  
                        ):( */}
                        
                        <Tabs  textColor="inherit" sx={{marginLeft:"auto"}} value={value} onChange={handleChange} indicatorColor="primary">
                            <Tab label="Dashboard" to={routes[0]} component={Link}/>
                            <Tab label="Products" to={routes[1]} component={Link}/>
                            <Tab label="Ordered Service" to={routes[2]} component={Link}/>
                            <Tab label="Ordered PC" to={routes[3]} component={Link}/>
        
                            <Button variant="contained" sx={{marginLeft:"auto"}}>Log In</Button>
                            <Button variant="contained" sx={{marginLeft:"8px"}}>Sign Up</Button>
                        </Tabs>


                        
                    </Toolbar>
                </AppBar>
                <Routes>

                            <Route path="/" element={<Dashboard/>}/>
                            <Route path="/products" element={<Products/>}/>
                            <Route path="/orderspc" element={<Orderedpc/>}/>
                            <Route path="/orderservice" element={<Service/>}/>
                            <Route path="/products/addproduct" element={<Addproduct/>}/>
                            
                </Routes> 
            </React.Fragment>
        </div>
    );
}
export default Header;
