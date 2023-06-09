import { ThemeProvider, CssBaseline, Box } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "@/scenes/navbar";
import Dashboard from "@/scenes/dashboard";
import Predictions from "@/scenes/predictions";
import { useThemeContext } from "./theme/ThemeContextProvider";

function App() {
  const { theme } = useThemeContext();
  
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
