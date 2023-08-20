import { createSlice } from "@reduxjs/toolkit";

const productData = {
  products:{},
  singleProduct:{}
};

const addProductSlices = createSlice({
  name: "product",
  initialState: productData,
  reducers: {
    addProduct: (state, action) => {
       
      state.products = action.payload;
    },
    addSingleProduct: (state, action) => {
      state.singleProduct = action.payload;
    },
    removeProduct:(state,action)=>{
      state.singleProduct = {};
      state.products = []
    }
  },
});

export default addProductSlices.reducer;
export const addProductActions = addProductSlices.actions;
