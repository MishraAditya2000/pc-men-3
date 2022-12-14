import { Card, CardContent, CardHeader, Grid,List,ListItem,Paper, Typography,Button } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
const Footer=()=>{
    return(
         <Container  maxWidth="xxl" sx={{marginTop:"18px",paddingTop:"18px",borderTop:1,borderWidth:"64px",borderColor:"#1976D2"}}>

            <Grid container  spacing={3} sx={{paddingBottom:"18px"}} elevation={0}>
                <Grid item xs={12} md={6} lg={4} elevation={0}>
                <Card>
                    {/* <CardHeader>ABOUT</CardHeader> */}
                    <CardContent>
                     <Typography variant="h4">Contact Us</Typography>  
                     <List>
                    <ListItem>PC Mender PVT Limited</ListItem>
                    <ListItem>Main Branch:ID Market, Nayapalli, Ground Floor</ListItem>
                    <ListItem>Bhubaneswar-751003, Khordha</ListItem>
                    <ListItem>Phone No.91 8697743213 </ListItem>
                    </List> 
                    </CardContent>
                </Card></Grid>
                <Grid item xs={12} md={6} lg={4}>
                <Card>
                    <CardContent>
                    <Typography variant="h4">Privacy Policy</Typography>    
                    <Link   style={{ textDecoration: 'none' }}><ListItem>Order Policy</ListItem></Link>
                    <Link   style={{ textDecoration: 'none' }}><ListItem>Payment Policy</ListItem></Link>
                    <Link   style={{ textDecoration: 'none' }}><ListItem>Service Policy</ListItem></Link>
                    </CardContent>
                </Card>
                </Grid>

                <Grid item xs={12} md={6} lg={4}>
                <Card>
                    <CardContent>  
                    <Typography variant="h4">My Orders</Typography>    
                    <List>  
                        <Button component={Link} to="/orderhistory">PC Ordrer History</Button>  
                    </List>
                    <List>
                        <Button component={Link} to="/servicehistory">Service History</Button>  
                    </List>
                    </CardContent>
                </Card>
                </Grid>
            </Grid>
            {/* </Paper> */}

        </Container>           
  

    );
}
export default Footer;