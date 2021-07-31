import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalAmount: 0,
  totalPrice: 0,
};

export const cart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    updateCart(state, action) {
      const filteredCartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );

      filteredCartItems.push(action.payload);

      state.cartItems = [...filteredCartItems].sort((a, b) =>
        a.id.localeCompare(b.id)
      );

      state.totalAmount = state.cartItems
        .map((item) => item.amount)
        .reduce((a, b) => a + b, 0);

      state.totalPrice = state.cartItems
        .map((item) => item.price * item.amount)
        .reduce((a, b) => a + b, 0);
    },
  },
});

export const { updateCart } = cart.actions;

export default cart.reducer;
