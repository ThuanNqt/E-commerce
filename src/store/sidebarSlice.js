import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSidebarOn: false,
};

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    setSidebarOn: (state) => {
      state.isSidebarOn = true;
    },
    setSidebarOff: (state) => {
      state.isSidebarOn = false;
    },
  },
});

// Actions
export const { setSidebarOn, setSidebarOff } = sidebarSlice.actions;

// Selector
export const getSidebarStatus = (state) => state.sidebar.isSidebarOn;

// Reducer
export default sidebarSlice.reducer;
