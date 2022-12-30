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
import Login from "../pages/login/login";
import Register from "../pages/register/register";
import { Orderhistory } from "../pages/Orderhistory";
import { Servicehistory } from "../pages/Servicehistory";


const Header=()=>{
    const [value,SetValue]=useState(false);
    const [ user, setLoginUser] = useState({})
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
                    <Typography variant="body1" sx={{marginLeft:"8px",fontSize:"22px"}}>PC Mender-PC Sale & Service</Typography>       


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
                            {user && user._id?<Button onClick={() => setLoginUser({})} variant="contained" sx={{marginLeft:"auto"}}>Log Out</Button>:null
                            }
                
                        </Tabs>

                        )                            
                        }

                        
                    </Toolbar>
                </AppBar>
                <Routes>

                            <Route  path="/"
                            element={
                                user && user._id?<Home setLoginUser={setLoginUser}/>:<Login setLoginUser={setLoginUser}/>
                            }
                            />
                            <Route path="/prebuiltpc" element={
                            user&&user._id?<Prebuiltpc setLoginUser={setLoginUser}/>:<Login setLoginUser={setLoginUser}/>}/>
                            <Route path="#service" element={<Home/>}/>
                            <Route path="/aboutus" element={<AboutUs/>}/>
                            <Route path="/details/:productId" element={<ProductDetails/>}/>
                            <Route path="/servicehistory" element={<Servicehistory/>}/>
                            <Route path="/login" element={<Login setLoginUser={setLoginUser}/>} />
                            <Route path="/register" element={<Register/>}/>
                            <Route path="/orderhistory" element={<Orderhistory/>}/>
                </Routes> 
            </React.Fragment>
        </div>
    );
}
export default Header;
