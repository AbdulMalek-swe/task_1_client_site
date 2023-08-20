import { combineReducers, configureStore } from "@reduxjs/toolkit";
import addUserSlice from "./userSlice/addUserSlice";
import productSlice from "./productSlice/productSlice";
 const rootReducer = combineReducers({
   User:addUserSlice,
   product:productSlice
    
});

//configure store
const store = configureStore({
  reducer: {
    reducer: rootReducer,
  },
});

export default store;
