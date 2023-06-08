import { createContext, useState, useMemo, useContext } from "react";
import { createTheme, ThemeProvider } from "@mui/material";

interface IColorModeContext {
  toggleColorMode: () => void;
  mode: "dark" | "light";
}

export const ColorModeContext = createContext<IColorModeContext>({
  toggleColorMode: () => {},
  mode: "dark",
});

export const ColorModeContextProvider = ({ children }) => {
  const [mode, setMode] = useState<"dark" | "light">("dark");
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "dark" ? "light" : "dark"));
      },
      mode,
    }),
    [mode]
  );

  const theme = useMemo(
    () => 
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export const useColorMode = () => useContext(ColorModeContext);