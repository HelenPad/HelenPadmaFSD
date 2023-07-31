import { createSlice } from "@reduxjs/toolkit";

export const refreshNavbar = createSlice({
  name: "refreshNavbar",
  initialState: true,
  reducers: {
    refreshSidebarFun: (state) => {
      console.log("Refreshing sidebar from Redux");
      return (state = !state);
    },
  },
});

export const { refreshNavbarFun } = refreshNavbar.actions;
export default refreshNavbar.reducer;
