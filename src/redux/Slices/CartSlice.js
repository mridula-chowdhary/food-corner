import { createSlice } from "@reduxjs/toolkit";
import { syncCartWithDatabase } from '../../Utils/cartSync';

const saveCartToLocalStorage = (cart) => {
  localStorage.setItem('cart', JSON.stringify(cart));
};

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: JSON.parse(localStorage.getItem('cart')) || [], // Load from localStorage
  },
  reducers: {
    setCart: (state, action) => {
      state.cart = action.payload;
      saveCartToLocalStorage(state.cart); // Save to localStorage
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
      saveCartToLocalStorage(state.cart); // Save to localStorage
      syncCartWithDatabase(state.cart); // Sync with backend
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
      saveCartToLocalStorage(state.cart); // Save to localStorage
      syncCartWithDatabase(state.cart); // Sync with backend
    },
    incrementQty: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload.id);
      if (item) item.qty += 1;
      saveCartToLocalStorage(state.cart); // Save to localStorage
      syncCartWithDatabase(state.cart); // Sync with backend
    },
    decrementQty: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload.id);
      if (item && item.qty > 1) item.qty -= 1;
      saveCartToLocalStorage(state.cart); // Save to localStorage
      syncCartWithDatabase(state.cart); // Sync with backend
    },
    clearCart: (state) => {
      state.cart = [];
      saveCartToLocalStorage(state.cart); // Save to localStorage
      syncCartWithDatabase(state.cart); // Sync with backend
    },
    fetchCart: (state, action) => {
      state.cart = action.payload;
      saveCartToLocalStorage(state.cart); // Save to localStorage
    },
  },
});

export const { setCart, addToCart, removeFromCart, incrementQty, decrementQty, clearCart, fetchCart } = CartSlice.actions;
export default CartSlice.reducer;
