import { createAsyncThunk,createSlice } from '@reduxjs/toolkit';
import * as api from "../api";

const initialState={
    loading:false,
    products:[],
    selectedProduct:[],
    serviceForm:[],
    filterCat:"All",
    order:[],
    history:[],
    service:[],
    error:''
}

export const ourPick=createAsyncThunk("user/viewHome",async()=>{
    try {        
        const response = await api.ourPicks();
         return response.data;
    } catch (error) {
        console.log(error);
    }
})

export const fetchProducts=createAsyncThunk("user/fetchProducts",async()=>{
    try {        
        const response = await api.fetchProduct();
         return response.data;
    } catch (error) {
        console.log(error);
    }
})

export const productDetails=createAsyncThunk("user/productDetails",async(id)=>{
    try {
        console.log("Passed ID:",id);
        const response=await api.productDetails(id);
        return response.data;
    } catch (error) {
        console.log(error);
    }
})


export const orderProduct=createAsyncThunk("user/orderProduct",async(product)=>{
    try {
        const response=await api.orderProduct(product);
        return response.data;
    } catch (error) {
        console.log(error);
    }
})

export const serviceRequest=createAsyncThunk("user/serviceRequest",async(serviceData)=>{
    try {
        const response=await api.requestService(serviceData);
        return response.data; 
    } catch (error) {
        console.log(error);
    }
})

export const orderHistory=createAsyncThunk("user/orderHistory",async(mail)=>{
    try{
        console.log(mail);
        const response=await api.orderHistory(mail);
        return response.data;
    }
    catch(error){
        console.log(error);
    }
})

export const serviceHistory=createAsyncThunk("user/serviceHistory",async(mail)=>{
    try{
        console.log(mail);
        const response=await api.serviceHistory(mail);
        return response.data;
    }
    catch(error){
        console.log(error);
    }
})

const userSlice=createSlice({
    name:"FOR USER",
    initialState,
    reducers:{
        filterStatus:(state,action)=>{
            state.filterCat=action.payload;
        }
    },
    extraReducers:builder=>{


        builder.addCase(ourPick.pending,(state)=>{
            state.loading="true";
        })
        builder.addCase(ourPick.fulfilled,(state,action)=>{
            state.loading="true";
            state.products=action.payload;
        })
        builder.addCase(ourPick.rejected,(state,action)=>{
            state.loading="true";
            state.error=action.error.message;
        })//OUR PICKS REDUCERS

        builder.addCase(fetchProducts.pending,(state)=>{
            state.loading="true";
        })
        builder.addCase(fetchProducts.fulfilled,(state,action)=>{
            console.log(action.payload);
            state.loading="false";
            state.products=action.payload;
            
        })
        builder.addCase(fetchProducts.rejected,(state,action)=>{
            state.loading="true";
            state.error=action.error.message;
        })//FETCH ALL PRODUCT REDUCER


        builder.addCase(productDetails.pending,(state)=>{
            state.loading="true";
        })
        builder.addCase(productDetails.fulfilled,(state,action)=>{
            state.selectedProduct=action.payload;
            state.loading="false";
        })
        builder.addCase(productDetails.rejected,(state,action)=>{
            state.loading="true";
            state.error=action.error.message;
        })//FETCH PRODUCT DETAILS


        builder.addCase(serviceRequest.pending,(state)=>{
            state.loading="true";
        })
        builder.addCase(serviceRequest.fulfilled,(state,action)=>{
            state.serviceForm=action.payload;
            state.loading="false";
        })
        builder.addCase(serviceRequest.rejected,(state,action)=>{
            state.loading="true";
            state.error=action.error.message;
        })//POST SERVICE REQUEST

        builder.addCase(orderProduct.pending,(state)=>{
            state.loading="true";
        })
        builder.addCase(orderProduct.fulfilled,(state,action)=>{
            state.order=action.payload;
            state.loading="false";
        })
        builder.addCase(orderProduct.rejected,(state,action)=>{
            state.loading="true";
            state.error=action.error.message;
        })//POST PRODUCT ORDER TO DATABASE


        builder.addCase(orderHistory.pending,(state)=>{
            state.loading="true";
        })
        builder.addCase(orderHistory.fulfilled,(state,action)=>{
            state.history=action.payload;
            state.loading="false";
        })
        builder.addCase(orderHistory.rejected,(state,action)=>{
            state.loading="true";
            state.error=action.error.message;
        })//SHOW ORDER HISTORY

        builder.addCase(serviceHistory.pending,(state)=>{
            state.loading="true";
        })
        builder.addCase(serviceHistory.fulfilled,(state,action)=>{
            state.service=action.payload;
            state.loading="false";
        })
        builder.addCase(serviceHistory.rejected,(state,action)=>{
            state.loading="true";
            state.error=action.error.message;
        })//SHOW SERVICE HISTORY
    }
});

export default userSlice.reducer;
export const {filterStatus}=userSlice.actions;