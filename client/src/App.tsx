import { ThemeProvider, CssBaseline, Box } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/state";
import { themeSettings } from "./theme";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "@/scenes/navbar";
import Dashboard from "@/scenes/dashboard";
import Predictions from "@/scenes/predictions";

function App() {
  const mode = useSelector((state: RootState) => state.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]); // createTheme from mui, use with themeSettings
  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          {/* to reset CSS to default */}
          <CssBaseline /> 
          <Box width="100%" height="100%" padding="1rem 2rem 4rem 2rem">
            <NavBar/>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/predictions" element={<Predictions />} />
            </Routes>
          </Box>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  )
}

export default App;
