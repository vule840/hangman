import { configureStore } from "@reduxjs/toolkit";
import requestReducer from "./request";

const store = configureStore({
  reducer: {
    sender: requestReducer.reducer,
  },
});
export default store;
