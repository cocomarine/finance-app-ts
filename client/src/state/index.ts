import { createSlice } from "@reduxjs/toolkit";
import { store } from "@/main";

interface ThemeState {
  mode: "dark" | "light";
}

const initialState: ThemeState = {
  mode: "dark",
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === "dark" ? "light" : "dark";
    },
  },
});

export const { setMode } = themeSlice.actions;

export default themeSlice.reducer;
export type RootState = ReturnType<typeof store.getState>;