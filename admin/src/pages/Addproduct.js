import { Container, Typography,Paper, FormControl, TextField,InputLabel,Select,MenuItem, Grid, Button } from '@mui/material'
import React, { useState } from 'react';
import FileBase from 'react-file-base64';
import { useDispatch } from 'react-redux';
import { addProduct } from '../redux/features/checkSlice';
const Addproduct  = () => {
  const dispatch=useDispatch();
  const [newProduct,setNewProduct]=useState({
    productname:"",
    subtitle:"",
    category:"",
    prodtimage:"",
    availability:"",
    price:"",
    ourpicks:"",
    basicspecs:{
        motherboard:"",
        processor:"",
        chipset:"",
        graphic:""
    },
    customspecs:{
        ram:{
            default:{
                kit:"",
                price:""
            },
            option1:{
                kit:"",
                price:""               
            },
            option2:{
                kit:"",
                price:""               
            }
        },
        storage:{
            default:{
                size:"",
                price:""
            },
            option1:{
                size:"",
                price:""
            }
        }
    }
  });


  function handleSubmit() {
   dispatch(addProduct(newProduct));
   handleClear();
   alert("Product Added Successfully");
  }
  function handleClear(){
    setNewProduct({
      productname:"",
      subtitle:"",
      category:"",
      prodtimage:"",
      availability:"",
      price:"",
      basicspecs:{
          motherboard:"",
          processor:"",
          chipset:"",
          graphic:""
      },
      customspecs:{
          ram:{
              default:{
                  kit:"",
                  price:""
              },
              option1:{
                  kit:"",
                  price:""               
              },
              option2:{
                  kit:"",
                  price:""               
              }
          },
          storage:{
              default:{
                  size:"",
                  price:""
              },
              option1:{
                  size:"",
                  price:""
              }
          }
      }

    });
  }
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
          value={newProduct.productname}
          onChange={(e)=>setNewProduct({...newProduct,productname:e.target.value})}
          />
          <TextField
          label="Subtitle"
          sx={textFieldStyle}
          value={newProduct.subtitle}
          onChange={(e)=>setNewProduct({...newProduct,subtitle:e.target.value})}
          />
          </FormControl>

         <FormControl sx={{minWidth:"150px",paddingRight:"8px"}}>
          <Typography align='left'sx={{mb:"8px"}}>Upload Product Image:</Typography>
          <FileBase
           type="file"
           multiple={false}
           onDone={({base64})=>setNewProduct({...newProduct,prodtimage:base64})}
           />
           {/* <TextField
           type="file"
           /> */}
           </FormControl>
          <FormControl sx={{minWidth:"300px",paddingRight:"8px", marginTop:"20px"}}>
          <InputLabel id="demo-simple-select-label">Category</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Category"
              value={newProduct.category}
              onChange={(e)=>setNewProduct({...newProduct,category:e.target.value})}
            >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
              <MenuItem value="Budget PC">Budget PC</MenuItem>
              <MenuItem value="Mid-Range PC">Mid Range PC</MenuItem>
              <MenuItem value="Weighty PC">Weighty PC</MenuItem>
            </Select>
          
          </FormControl>
          <FormControl sx={{minWidth:"120px",paddingRight:"8px", marginTop:"20px",}}>   
          <InputLabel id="demo-simple-select-label">Availability</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Availability"
              value={newProduct.availability}
              onChange={(e)=>setNewProduct({...newProduct,availability:e.target.value})}
            >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
              <MenuItem value={"In Stock"}>In Stock</MenuItem>
              <MenuItem value={"Out Of Stock"}>Out Of Stock</MenuItem>
            </Select>    
          </FormControl>
          <FormControl sx={{minWidth:"120px",paddingRight:"8px", marginTop:"12px"}}>
          <TextField
          label="Price"
          sx={textFieldStyle}
          value={newProduct.price}
          onChange={(e)=>setNewProduct({...newProduct,price:e.target.value})}
          /> 
          </FormControl>
          <FormControl sx={{minWidth:"120px",paddingRight:"8px", marginTop:"20px",}}>   
          <InputLabel id="demo-simple-select-label">Our Picks</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Our Picks"
              value={newProduct.ourpicks}
              onChange={(e)=>setNewProduct({...newProduct,ourpicks:e.target.value})}
            >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
              <MenuItem value={"Yes"}>Yes</MenuItem>
            </Select>    
          </FormControl>

          <FormControl fullWidth>
          {/* <TextField
          label="Full Set"
          sx={textFieldStyle}
          />       */}
        <Paper  sx={{marginTop:"8px",marginBottom:"8px",padding:"8px"}}>
          <Typography variant="h5" align="left">Basic Specifiaction</Typography>
        </Paper> 
        <TextField
          label="Motherboard"
          sx={textFieldStyle}
          value={newProduct?.basicspecs?.motherboard}
          onChange={(e)=>setNewProduct({...newProduct,
                          basicspecs:{...newProduct?.basicspecs,motherboard:e.target.value}})}
          />
          <TextField
          label="Processor"
          sx={textFieldStyle}
          value={newProduct?.basicspecs?.processor}
          onChange={(e)=>setNewProduct({...newProduct,
                          basicspecs:{...newProduct?.basicspecs,processor:e.target.value}})}
          />
          <TextField
          label="Chipset"
          sx={textFieldStyle}
                    value={newProduct?.basicspecs?.chipset}
          onChange={(e)=>setNewProduct({...newProduct,
                          basicspecs:{...newProduct?.basicspecs,chipset:e.target.value}})}
          />
          <TextField
          label="Graphic"
          sx={textFieldStyle}
          value={newProduct?.basicspecs?.graphic}
          onChange={(e)=>setNewProduct({...newProduct,
                          basicspecs:{...newProduct?.basicspecs,graphic:e.target.value}})}
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
              value={newProduct.customspecs.ram.default.kit}
              onChange={(e)=>{setNewProduct({...newProduct,
                            customspecs:{...newProduct.customspecs,
                            ram:{...newProduct.customspecs.ram,
                            default:{...newProduct.customspecs.ram.default,kit:e.target.value}}}})}}
              />
              {/* <TextField 
              label="Price"
              sx={customSpecsStyle}
              value={newProduct.customspecs.ram.default.price}
              onChange={(e)=>{setNewProduct({...newProduct,
                            customspecs:{...newProduct.customspecs,
                            ram:{...newProduct.customspecs.ram,
                            default:{...newProduct.customspecs.ram.default,price:e.target.value}}}})}}
              /> */}


              
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
              value={newProduct.customspecs.storage.default.size}
              onChange={(e)=>{setNewProduct({...newProduct,
                            customspecs:{...newProduct.customspecs,
                            storage:{...newProduct.customspecs.storage,
                            default:{...newProduct.customspecs.storage.default,size:e.target.value}}}})}}
              
              />
              {/* <TextField 
              label="Price"
              sx={customSpecsStyle}
              value={newProduct.customspecs.storage.default.price}
              onChange={(e)=>{setNewProduct({...newProduct,
                            customspecs:{...newProduct.customspecs,
                            storage:{...newProduct.customspecs.storage,
                            default:{...newProduct.customspecs.storage.default,price:e.target.value}}}})}}
              /> */}

              
          </Grid>
          {/* <Grid item md={6}>
          <TextField 
              label="Option 2"
              sx={customSpecsStyle}
              />
              <TextField 
              label="Price"
              sx={customSpecsStyle}
              />
          </Grid> */}
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
          <Button variant="contained"align="center" width="400px" sx={textFieldStyle} onClick={handleSubmit}>SUBMIT</Button>
          <Button variant="outlined"align="center" width="400px" sx={textFieldStyle} onClick={handleClear}>RESET</Button>
      </FormControl>
    </Container>
    
  )
}

export default Addproduct 