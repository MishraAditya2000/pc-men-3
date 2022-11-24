import {configureStore} from "@reduxjs/toolkit";
import productSlice from "./features/checkSlice";

const store=configureStore({
    reducer:{
        checking:productSlice
    }
}
);
export default store;