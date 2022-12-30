import { createAsyncThunk,createSlice } from '@reduxjs/toolkit';
import * as api from "../api";
//state declaration 
const initialState={
    loading:false,
    products:[],
    selectedProduct:[],
    services:[],
    orders:[],
    update:[],
    filterCat:"all",
    filterStock:"all",
    filterStatus:"all",
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

export const showOrders=createAsyncThunk('product/showOrders',async()=>{
    try{
        const response= await api.showOrders();
        return response.data;
    }
    catch(error){
        console.log(error);
    }
})

export const showService=createAsyncThunk('product/showService',async()=>{
    try {
        const response= await api.showService();
        return response.data;
    } catch (error) {
        console.log(error);
    }
})
export const productUpdate=createAsyncThunk('product/productUpdate',async({id,stock})=>{
    try{
        console.log(id);
        console.log(stock);
        const response=await api.productUpdate(id,stock);
        console.log(response);
        return response.data;
    }
    catch(error){
        console.log(error);
    }
})

export const orderUpdate=createAsyncThunk('product/orderUpdate',async({id,status})=>{
    try{
        console.log(id);
        console.log(status);
        const response=await api.ordertUpdate(id,status);
        console.log(response);
        return response.data;
    }
    catch(error){
        console.log(error);
    }
})

export const serviceUpdate=createAsyncThunk('product/serviceUpdate',async({id,status})=>{
    try{
        console.log(id);
        console.log(status);
        const response=await api.serviceUpdate(id,status);
        console.log(response);
        return response.data;
    }
    catch(error){
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
        },
        updateStatus:(state,action)=>{
            state.filterStatus=action.payload;
        }
    },
    extraReducers:builder=>{
        //FETCH ALL USER DETAILS------------------------------------------------------------------------------------------------------------
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
        })//FETCH ALL PRODUCTs-----------------------------------------------------------------------------------------------------------------

                //DELETE PRODUCT FROM DATABASE-------------------------------------------------------------------------------------------------
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
                })//DELETE PRODUCT FROM DATABASE------------------------------------------------------------------------------------------------

                //ADD PRODUCT TO DATABASE-------------------------------------------------------------------------------------------------------
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
                })///ADD PRODUCT TO DATABASE-----------------------------------------------------------------------------------------------------=
                
                //SHOW SERVICES------------------------------------------------------------------------------------------------------------------
                builder.addCase(showService.pending,(state)=>{
                    state.loading=true
                })
                builder.addCase(showService.fulfilled,(state,action)=>{
                    state.loading=false
                    state.services=action.payload
                    state.error=''
                })
                builder.addCase(showService.rejected,(state,action)=>{
                    state.loading=false
                    state.services=[]
                    state.error=action.error.message
                })//SHOW SERVICES------------------------------------------------------------------------------------------------------------------

                //SHOW PC ORDERS----------------------------------------------------------------------------------------------------------------
                builder.addCase(showOrders.pending,(state)=>{
                    state.loading=true
                })
                builder.addCase(showOrders.fulfilled,(state,action)=>{
                    state.loading=false
                    state.orders=action.payload
                    state.error=''
                })
                builder.addCase(showOrders.rejected,(state,action)=>{
                    state.loading=false
                    state.error=action.error.message
                })//SHOW PC ORDERS----------------------------------------------------------------------------------------------------------------

    }
})

export default productSlice.reducer;
export const {updateStock,updateCat,updateStatus}=productSlice.actions;