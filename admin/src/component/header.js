import React from "react";
import { useState } from "react";
import {AppBar,Typography,Toolbar,Tabs,Tab,Button} from "@mui/material";
import ComputerIcon from '@mui/icons-material/Computer';
// import Drawercomp from "./drawer";
import { BrowserRouter as Router,Routes,Route,Link } from "react-router-dom";


import Dashboard from "../pages/Dashboard";
import Orderedpc from "../pages/Orderedpc";
import Products from "../pages/Products";
import Service from "../pages/Service";
import Addproduct from "../pages/Addproduct";
import Login from "../pages/Login/login.js";



const Header=()=>{
    const routes=["/","/products","/orderservice","/orderspc","/addproduct"]
    const handleChange=(e,newvalue)=>{SetValue(newvalue)}
    const [value,SetValue]=useState(false);
    const [ user, setLoginUser] = useState({})
    
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
        
                            {user && user._id?<Button onClick={() => setLoginUser({})} variant="contained" sx={{marginLeft:"auto"}}>Log Out</Button>:null}
                        </Tabs>


                        
                    </Toolbar>
                </AppBar>
                <Routes>

                            <Route path="/" element={
                             user && user._id?<Dashboard setLoginUser={setLoginUser}/>:<Login setLoginUser={setLoginUser}/>    
                            
                            }/>
                            <Route path="/products" element={user && user._id?<Products setLoginUser={setLoginUser}/>:<Login setLoginUser={setLoginUser}/>}/>
                            <Route path="/orderspc" element={user && user._id?<Orderedpc setLoginUser={setLoginUser}/>:<Login setLoginUser={setLoginUser}/>}/>
                            <Route path="/orderservice" element={user && user._id?<Service setLoginUser={setLoginUser}/>:<Login setLoginUser={setLoginUser}/>}/>
                            <Route path="/products/addproduct" element={<Addproduct/>}/>
                            <Route path="/login" element={<Login setLoginUser={setLoginUser}/>}/>
                            
                </Routes> 
            </React.Fragment>
        </div>
    );
}
export default Header;
