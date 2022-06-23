import { applyMiddleware, configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
// Slices
import { taskSlice } from "./taskSlice";

const store = configureStore(
  {
    reducer: {
      task: taskSlice,
    },
  },
  applyMiddleware(thunk)
);

export default store;
