import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  pendingTasks: [],
  completeTasks: [],
};

// Actions
export function fetchPendingTasks() {
  return function (dispatch) {
    return axios.get("https://api.myjson.com/bins/19dtxc").then(({ data }) => {
      dispatch(getPendingTasks(data));
    });
  };
}

// Slice
export const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    setPendingTasks: (state, payload) => {
      state.pendingTasks = payload;
    },
  },
});
