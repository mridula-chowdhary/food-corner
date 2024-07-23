import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./Slices/CartSlice";
import CategorySlice from "./Slices/CategorySlice";
import SearchSlice from "./Slices/SearchSlice";
import AuthSlice from "./Slices/AuthSlice";

const Store = configureStore({
    reducer:{
        cart:CartSlice,
        category: CategorySlice,
        search :SearchSlice,
        auth:AuthSlice,
    }
});

export default Store;