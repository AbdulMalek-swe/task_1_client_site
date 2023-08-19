import { configureStore } from "@reduxjs/toolkit";
import addUserSlice from "./userSlice/addUserSlice";
 
//configure store
const store = configureStore({
  reducer: {
    User: addUserSlice,
  },
});

export default store;
