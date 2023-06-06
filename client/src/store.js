import { configureStore } from "@reduxjs/toolkit";
import transactionReducer from "./transactionState/transactionSlice";
import userReducer from "./userState/userSlice";

const store = configureStore({
  reducer: {
    transactions: transactionReducer,
    user: userReducer,
  },
});

export default store;
