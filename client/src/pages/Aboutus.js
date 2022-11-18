import { Card, CardContent, Grid, Paper, Typography,Box } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
const AboutUs=()=>{
    return(
        <Container sx={{mt:"18px"}}>
            <Paper elevation={4} sx={{paddingBottom:"18px",paddingTop:"18px"}}>
                <div id="heading">
                <Typography variant="h5" align="left" sx={{paddingLeft:"12px",paddingBottom:"12px"}}>About Us</Typography>
                </div>
                <div id="content">
                <Typography variant="body1" align="left" sx={{paddingLeft:"12px"}} >
                 PC Mender  is based in the Capital of Odisha,Bhubaneswar and specializes in  performance custom built computers.
                 We emphasize customization over every aspect of each computer, offering personal consulting and support that is becoming quite rare in the industry. 
                 Our goal is to provide each client with the best possible computer for their needs and budget.  
               
                PC Mender is a both product and service based platform where all your PC needs can be fulfilled. We offer custom-made PC and also provide doorstep 
                solutions to your pc issues.                
                </Typography>
                <Typography variant="h6" align="left" sx={{paddingLeft:"12px"}} lineHeight={3}>Why choose PC Mender?</Typography>
                <Typography variant="body1" align="left" sx={{paddingLeft:"12px",paddingBottom:"18px"}}>
                This is a legitimate question, because there are many good choices out there. We are happy to be part of an industry with such healthy competition, 
                and we are confident that even with the tough competition we are a clear leader in our field.
                We are constantly self improving. Just as important to product line selection, is what we do with those products.

                The whole process is based on a constant communication with buyers to deliver better results.
                </Typography>
                </div>

            </Paper>
                <Box sx={{paddingTop:"18px"}}>
                    <Typography variant="h6" align="center">Our Branches</Typography>    
                     <Grid container spacing={3} >
                        <Grid item xs={12} md={6} lg={4}  elevation={8}>
                            <Card>
                            <CardContent>
                                <Typography align="center">Bhubaneswar</Typography>
                                <Typography align="center" variant="subtitle2">PC Mender PVT. LTD</Typography>  
                                <Typography align="center"  variant="body2">ID Market, Nayapalli, Ground Floor </Typography >  
                                <Typography align="center" variant="body2"> Bhubaneswar-751003, Khordha</Typography>
                                <Typography align="center" variant="body2">Ph: +91 8697743213 </Typography>
                            </CardContent>
                            </Card></Grid>
                            <Grid item xs={12} md={6} lg={4}  elevation={8}>
                            <Card>
                            <CardContent>
                                <Typography align="center">Behrampur</Typography>
                                <Typography align="center" variant="subtitle2">PC Mender PVT. LTD</Typography>  
                                <Typography align="center"  variant="body2">ID Market, Nayapalli, Ground Floor </Typography >  
                                <Typography align="center" variant="body2"> Bhubaneswar-751003, Khordha</Typography>
                                <Typography align="center" variant="body2">Ph: +91 8697743213 </Typography>
                            </CardContent> 
                            </Card>
                            </Grid>
                        <Grid item xs={12} md={12} lg={4}  elevation={8}>
                            <Card>
                            <CardContent>
                                <Typography align="center">Sambalpur</Typography>
                                <Typography align="center" variant="subtitle2">PC Mender PVT. LTD</Typography>  
                                <Typography align="center" variant="body2">ID Market, Nayapalli, Ground Floor </Typography >  
                                <Typography align="center" variant="body2"> Bhubaneswar-751003, Khordha</Typography>
                                <Typography align="center" variant="body2">Ph: +91 8697743213 </Typography>
                            </CardContent>
                            </Card>
                        </Grid>
                        </Grid>                 
                </Box>
        </Container>
    )
}
export default AboutUs;