import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./modules/cart";

export default configureStore({
  reducer: {
    cart: cartReducer,
  },
});
