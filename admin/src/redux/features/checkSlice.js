import { createAsyncThunk,createSlice } from '@reduxjs/toolkit';
import * as api from "../api";
//state declaration 
const initialState={
    loading:false,
    products:[],
    selectedProduct:[],
    filterCat:"all",
    filterStock:"all",
    error:''
}

//Generate pending,fullfilled,rejected action types
export const fetchProducts=createAsyncThunk('product/fetchProducts',async ()=>{
    try {        
        const response = await api.getPost();
         return response.data;
    } catch (error) {
        console.log(error);
    }
});// user/fetchUser is the action type FETCH ALL USERS FORM API

export const deleteProduct=createAsyncThunk('product/deleteProduct',async(id)=>{
try {
    console.log(id);
    const response=await api.deleteProduct(id);
    return response.data;
} catch (error) {
    console.log(error);
}
})

export const addProduct=createAsyncThunk('product/addProduct',async(newProduct)=>{
try {
    const response=await api.addProduct(newProduct);
    return response.data;
} catch (error) {
    console.log(error);
}
})

const productSlice=createSlice({
    name:'user',
    initialState,
    reducers:{
        updateStock:(state,action)=>{
            state.filterStock=action.payload;
        },
        updateCat:(state,action)=>{
            state.filterCat=action.payload;
        }
    },
    extraReducers:builder=>{
        //FETCH ALL USER DETAILS
        builder.addCase(fetchProducts.pending,(state)=>{
            state.loading=true
        })
        builder.addCase(fetchProducts.fulfilled,(state,action)=>{
            state.loading=false
            state.products=action.payload
            state.error=''
        })
        builder.addCase(fetchProducts.rejected,(state,action)=>{
            state.loading=false
            state.products=[]
            state.error=action.error.message
        })//FETCH ALL PRODUCTs

                //DELETE PRODUCT FROM DATABASE
                builder.addCase(deleteProduct.pending,(state)=>{
                    state.loading=true
                })
                builder.addCase(deleteProduct.fulfilled,(state,action)=>{
                    state.loading=false
                     const id=action.payload;
                    if(id){
                        console.log(id);
                        state.products=state.products.filter((prod)=>prod._id!==action.payload._id);
                    }
                })
                builder.addCase(deleteProduct.rejected,(state,action)=>{
                    state.loading=false
                    state.products=[]
                    state.error=action.error.message
                })//DELETE PRODUCT FROM DATABASE

                //ADD PRODUCT TO DATABASE
                builder.addCase(addProduct.pending,(state)=>{
                    state.loading=true
                })
                builder.addCase(addProduct.fulfilled,(state,action)=>{
                    state.loading=false
                    state.selectedProduct=action.payload
                    state.error=''
                })
                builder.addCase(addProduct.rejected,(state,action)=>{
                    state.loading=false
                    state.selectedProduct=[]
                    state.error=action.error.message
                })
    }
})

export default productSlice.reducer;
export const {updateStock,updateCat}=productSlice.actions;