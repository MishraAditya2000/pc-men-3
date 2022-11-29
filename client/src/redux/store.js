
import {configureStore} from "@reduxjs/toolkit";
import userSlice from "./features/userSlice";

const store=configureStore({
    reducer:{
        userView:userSlice
    }
}
);
export default store;