import { Container, Typography,Paper, FormControl, TextField,InputLabel,Select,MenuItem,OutlinedInput, Grid, Button } from '@mui/material'
import React from 'react'

const Addproduct  = () => {
  const textFieldStyle={
    marginTop:"8px",
    marginBottom:"8px",
  }
  const customSpecsStyle={
    margin:"8px",
    // marginTop:"8px"
  }
  return (
    <Container align="center">
      <Paper sx={{marginTop:"18px",width:"500px",padding:"8px"}} elevation={4} align="center">
        <Typography variant="h4">ADD PRODUCT DETAILS</Typography>
      </Paper>



    

        <Paper sx={{marginTop:"8px",marginBottom:"8px",padding:"8px"}}>
          <Typography variant="h5" align="left">Product Information</Typography>

        </Paper>
            <FormControl fullWidth>
          <TextField 
          label="Product Name"
          sx={textFieldStyle}
          placeholder="PC Mender Pocket Friendly PC"
          />
          <TextField
          label="Subtitle"
          sx={textFieldStyle}
          />
          </FormControl>
          <FormControl sx={{minWidth:"300px",paddingRight:"8px", marginTop:"8px"}}>
          <InputLabel id="demo-simple-select-label">Category</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              // value={age}
              label="Category"
              // onChange={handleChange}
            >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
              <MenuItem defaultValue={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          
          </FormControl>
          <FormControl sx={{minWidth:"150px",paddingRight:"8px", marginTop:"8px",}}>   
          <InputLabel id="demo-simple-select-label">Availability</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              // value={age}
              label="Availability"
              // onChange={handleChange}
            >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
              <MenuItem value={"In Stock"}>In Stock</MenuItem>
              <MenuItem value={"Out Of Stock"}>Out Of Stock</MenuItem>
            </Select>    
          </FormControl>
          <FormControl>
          <TextField
          label="Price"
          sx={textFieldStyle}
          />  </FormControl>
          <FormControl fullWidth>
          <TextField
          label="Full Set"
          sx={textFieldStyle}
          />      
        <Paper  sx={{marginTop:"8px",marginBottom:"8px",padding:"8px"}}>
          <Typography variant="h5" align="left">Basic Specifiaction</Typography>
        </Paper> 
        <TextField
          label="Motherboard"
          sx={textFieldStyle}
          />
          <TextField
          label="Processor"
          sx={textFieldStyle}
          />
          <TextField
          label="Chipset"
          sx={textFieldStyle}
          />
          <TextField
          label="Graphic"
          sx={textFieldStyle}
          />
        <Paper  sx={{marginTop:"8px",marginBottom:"8px",padding:"8px"}}>
          <Typography variant="h5" align="left">Custom Specifiaction</Typography>
        </Paper>
        <Grid container spacing={1} >
          <Grid item md={6}>
            <Typography variant="h6">RAM</Typography>
            <Grid container direction="column">
            <Grid item  md={6}>
              {/* <Typography variant="h5">RAM</Typography> */}
              <TextField 
              label="Default"
              sx={customSpecsStyle}
              />
              <TextField 
              label="Price"
              sx={customSpecsStyle}
              />


              
          </Grid>
          <Grid item md={6}>
          <TextField 
              label="Option 1"
              sx={customSpecsStyle}
              />
              <TextField 
              label="Price"
              sx={customSpecsStyle}
              />
          </Grid>
          <Grid item md={6}>
          <TextField 
              label="Option 2"
              sx={customSpecsStyle}
              />
              <TextField 
              label="Price"
              sx={customSpecsStyle}
              />
          </Grid>
            </Grid>
          </Grid>
          <Grid item md={6}>
          <Typography variant="h6">Storage</Typography>
          <Grid container direction="column">
            <Grid item md={6}>
              {/* <Typography variant="h5">RAM</Typography> */}
              <TextField 
              label="Default"
              sx={customSpecsStyle}
              />
              <TextField 
              label="Price"
              sx={customSpecsStyle}
              />


              
          </Grid>
          <Grid item md={6}>
          <TextField 
              label="Option 1"
              sx={customSpecsStyle}
              />
              <TextField 
              label="Price"
              sx={customSpecsStyle}
              
              />
          </Grid>
          <Grid item md={6}>
          <TextField 
              label="Option 2"
              sx={customSpecsStyle}
              />
              <TextField 
              label="Price"
              sx={customSpecsStyle}
              />
          </Grid>
            </Grid>
          </Grid>
        </Grid>
        {/* <Paper  sx={{marginTop:"8px",marginBottom:"8px",padding:"8px"}}>
          <Typography variant="h5" align="left">Connectivity</Typography>
        </Paper>
          <TextField
          label="IO Ports USB"
          sx={textFieldStyle}
          />
          <TextField
          label="IO Ports Connectivity "
          sx={textFieldStyle}
          />
          <TextField
          label="IO Ports Others"
          sx={textFieldStyle}
          />
          <TextField
          label="Monitor"
          sx={textFieldStyle}
          />
          <TextField
          label="Keyboard-Mouse"
          sx={textFieldStyle}
          /> */}
          <Button variant="contained"align="center" width="400px" sx={textFieldStyle}>SUBMIT</Button>
          <Button variant="outlined"align="center" width="400px" sx={textFieldStyle}>RESET</Button>
      </FormControl>
    </Container>
  )
}

export default Addproduct 