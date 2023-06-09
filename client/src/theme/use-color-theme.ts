import { createTheme, PaletteMode } from "@mui/material";
import { useState, useMemo } from "react";
import { getDesignTokens } from "./theme";

export const useColorTheme = () => {
  const [mode, setMode] = useState<PaletteMode>("dark");

  const toggleColorMode = () =>
    setMode((prevMode) => (prevMode === "dark" ? "light" : "dark"));

  const modifiedTheme = useMemo(
    () => createTheme(getDesignTokens(mode)),
    [mode]
  );

  return {
    theme: modifiedTheme,
    mode,
    toggleColorMode,
  };
};