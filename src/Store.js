import { configureStore } from '@reduxjs/toolkit';
import pledgeSlice from "./Features/pledgeSlice";

export default configureStore({
  reducer: {
      pledge: pledgeSlice
  },
})