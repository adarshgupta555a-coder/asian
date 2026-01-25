import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      let da = state.findIndex((item)=>item.id === action.payload.id)
      if (da >= 0) {
        state[da] = action.payload
      } else{
              state.push(action.payload); 
      }
    },
    removeFromCart: (state, action) => {
     const item = state.find(
    (item) => item.id === action.payload
  );

  if (item && item.qty > 1) {
    item.qty -= 1;
  } 
    }
  }
});

export const cartAction = CartSlice.actions;
export default CartSlice.reducer;
