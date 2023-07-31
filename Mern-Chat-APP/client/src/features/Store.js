import { configureStore } from "@reduxjs/toolkit";
import themeSliceReducer from "./ThemeSlice";
import refreshNavbar from "./refreshNavbar";

export const store = configureStore({
  reducer: {
    themeKey: themeSliceReducer,
    refreshKey: refreshNavbar,
  },
});
