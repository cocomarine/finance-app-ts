import { useState } from "react";
import { Link } from "react-router-dom";
import CalcIcon from '@mui/icons-material/Calculate';
import { Box, Typography, useTheme, IconButton } from "@mui/material";
import FlexBetween from "@/components/FlexBetween";
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Brightness4Icon from '@mui/icons-material/Brightness4';

const Navbar = () => {
  const { palette } = useTheme();
  const [selected, setSelected] = useState("dashboard");

  return (
    <FlexBetween mb="0.25rem" p="0.5rem 0rem" color={palette.grey[300]}>
      {/* left side */}
      <FlexBetween gap="0.75rem" >
        <CalcIcon sx={{ fontSize: "28px" }}/>
        <Typography variant="h4" fontSize="18px">
          Financial Performance Dashboard
        </Typography>
      </FlexBetween>

      {/* right side */}
      <FlexBetween gap="2rem">
        <Box sx={{ "&:hover": { color: palette.primary[300]}}}>
          <IconButton sx={{ ml: 1 }} color="inherit">
            {palette.mode === "light" ? (
              <Brightness4Icon />
            ) : (
              <Brightness7Icon />
            )}
          </IconButton>
        </Box>
        <Box sx={{ "&:hover": { color: palette.primary[300]}}}>
          <Link
            to="/"
            onClick={() => setSelected("dashboard")}
            style={{
              color: selected === "dashboard" ? "inherit" : palette.grey[700],
              textDecoration: "inherit"
            }}
          >
            dashboard
          </Link>
        </Box>
        <Box sx={{ "&:hover": { color: palette.primary[300]}}}>
          <Link
            to="/predictions"
            onClick={() => setSelected("predictions")}
            style={{
              color: selected === "predictions" ? "inherit" : palette.grey[700],
              textDecoration: "inherit"
            }}
          >
            predictions
          </Link>
        </Box>
      </FlexBetween>

    </FlexBetween>
  ) 
}

export default Navbar;