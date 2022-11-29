import React from "react";
import {AppBar,Typography,Toolbar,Tabs,Tab,Button,useMediaQuery,useTheme} from "@mui/material";
import ComputerIcon from '@mui/icons-material/Computer';
import { useState } from "react";
import Drawercomp from "./drawer";
import { BrowserRouter as Router,Routes,Route,Link } from "react-router-dom";


import AboutUs from "../pages/Aboutus";
import Prebuiltpc from "../pages/Prebuiltpc";
import Home from "../pages/Home";
import { ProductDetails } from "../pages/ProductDetails";
import { Ordersuccess } from "../pages/Ordersuccess";

const Header=()=>{
    const [value,SetValue]=useState(false);
    const theme=useTheme();
    const isMatch=useMediaQuery(theme.breakpoints.down('lg'));
    const routes=["/","/prebuiltpc","/orderservice","/aboutus"]
    const handleChange=(e,newvalue)=>{SetValue(newvalue)}
    
    return(
        <div>
            <React.Fragment>
                <AppBar position="relative">
                    <Toolbar>
                    <ComputerIcon sx={{marginLeft:"8px"}}/>
                    <Typography variant="body1" sx={{marginLeft:"8px",fontSize:"22px"}}> PC Mender</Typography>       


                        {
                        isMatch?(
                            <>
                    <Drawercomp/>                            
                            </>
  
                        ):(
                        
                        <Tabs  textColor="inherit" sx={{marginLeft:"auto"}} value={value} onChange={handleChange} indicatorColor="primary">
                            <Tab label="Home" to={routes[0]} component={Link}/>
                            <Tab label="Pre-Built PC" to={routes[1]} component={Link}/>
                            <Tab label="Orde a Service" to="/#service" component={Link}/>
                            <Tab label="About Us" to={routes[3]} component={Link} />
        
                            <Button variant="contained" sx={{marginLeft:"auto"}}>Log In</Button>
                            <Button variant="contained" sx={{marginLeft:"8px"}}>Sign Up</Button>
                        </Tabs>

                        )                            
                        }

                        
                    </Toolbar>
                </AppBar>
                <Routes>

                            <Route path="/" element={<Home/>}/>
                            <Route path="/prebuiltpc" element={<Prebuiltpc/>}/>
                            <Route path="#service" element={<Home/>}/>
                            <Route path="/aboutus" element={<AboutUs/>}/>
                            <Route path="/details/:productId" element={<ProductDetails/>}/>
                            <Route path="/ordersuccessful" element={<Ordersuccess/>}/>

                            
                </Routes> 
            </React.Fragment>
        </div>
    );
}
export default Header;
