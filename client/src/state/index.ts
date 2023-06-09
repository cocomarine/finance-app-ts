import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ThemeState {
  mode: "dark" | "light";
}

const initialState: ThemeState = {
  mode: "dark",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setMode: (state, action: PayloadAction<"dark" | "light">) => {
      state.mode = action.payload;
    },
  },
});

export const { setMode } = themeSlice.actions;

export default themeSlice.reducer;

export type RootState = ReturnType<typeof themeSlice.reducer>;