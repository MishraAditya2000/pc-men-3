import React, { useState } from "react";
import { Drawer, IconButton, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import List from '@mui/material/List';
import MenuIcon from '@mui/icons-material/Menu';
import {Link} from "react-router-dom";
  const Drawercomp=()=>{
    const [openDrawer,setOpenDrawer]=useState(false);
    // const pages=["Pre-Built PC","Order a Service","About Us","Log In","Sign Up"];
    const routes=["/prebuiltpc","/orderservice","/aboutus"]

      return(
        <React.Fragment>

            <Drawer open={openDrawer} onClose={()=>setOpenDrawer(false)} >
                <List>
                    {/* {
                        pages.map((pages,index)=>(
                       <ListItemButton key={index} onClick={()=>setOpenDrawer(false)}>
                        <ListItemIcon>
                            <ListItemText>
                                   {pages}
                            </ListItemText>
                        </ListItemIcon>
                    </ListItemButton>                             
                        ))
                    
                    } */}
                    <Link to="/"  style={{ textDecoration: 'none' }}>
                    <ListItemButton  onClick={()=>setOpenDrawer(false)} >
                        <ListItemIcon>
                            <ListItemText primary="Home"/>
                        </ListItemIcon>
                    </ListItemButton>                    
                    </Link>

                    <Link to={routes[0]}  style={{ textDecoration: 'none' }}>
                    <ListItemButton  onClick={()=>setOpenDrawer(false)} >
                        <ListItemIcon>
                            <ListItemText primary="Pre-Built PC"/>
                        </ListItemIcon>
                    </ListItemButton>                    
                    </Link>
                    <Link to="/#service" style={{ textDecoration: 'none' }}>
                    <ListItemButton  onClick={()=>setOpenDrawer(false)} >
                        <ListItemIcon>
                            <ListItemText primary="Order a Service"/>
                        </ListItemIcon>
                    </ListItemButton> </Link>

                    <Link to={routes[2]}  style={{ textDecoration: 'none' }}>
                      <ListItemButton onClick={()=>setOpenDrawer(false)} >
                        <ListItemIcon>
                            <ListItemText primary="About Us"/>
                        </ListItemIcon>
                    </ListItemButton>                   
                    </Link>

                </List>
            </Drawer>

            <IconButton onClick={()=>{setOpenDrawer(!openDrawer)}} sx={{marginLeft:"auto",color:"white"}}>
            <MenuIcon/>
            </IconButton>
        </React.Fragment>
    )
}
export default Drawercomp;