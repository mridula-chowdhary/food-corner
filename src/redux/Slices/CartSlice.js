import { createSlice } from "@reduxjs/toolkit";
import { syncCartWithDatabase } from '../../Utils/cartSync';

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    setCart: (state, action) => {
      state.cart = action.payload;
    },
    addToCart: (state, action) => {
      const existingItem = state.cart.find((item) => item.id === action.payload.id);
      if (existingItem) {
        state.cart = state.cart.map((item) =>
          item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item
        );
      } else {
        state.cart.push({ ...action.payload, qty: 1 });
      }
      syncCartWithDatabase(state.cart); 
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
      syncCartWithDatabase(state.cart); 
    },
    incrementQty: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload.id);
      if (item) item.qty += 1;
      syncCartWithDatabase(state.cart);
    },
    decrementQty: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload.id);
      if (item && item.qty > 1) item.qty -= 1;
      syncCartWithDatabase(state.cart); 
    },
    clearCart: (state) => {
      state.cart = [];
      syncCartWithDatabase(state.cart); 
    },
    fetchCart: (state, action) => {
      state.cart = action.payload;
    },
  },
});

export const { setCart,addToCart, removeFromCart, incrementQty, decrementQty, clearCart, fetchCart } = CartSlice.actions;
export default CartSlice.reducer;
