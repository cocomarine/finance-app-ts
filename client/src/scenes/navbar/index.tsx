import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setMode } from "@/state";
import CalcIcon from '@mui/icons-material/Calculate';
import { Box, Typography, useTheme, IconButton } from "@mui/material";
import FlexBetween from "@/components/FlexBetween";
import { DarkMode, LightMode } from '@mui/icons-material';

const Navbar = () => {
  const dispatch = useDispatch();
  const [selected, setSelected] = useState("dashboard");

  const { palette } = useTheme();

  return (
    <FlexBetween mb="0.25rem" p="0.5rem 0rem" color={palette.tertiary.dark}>
      {/* left side */}
      <FlexBetween gap="0.75rem" >
        <CalcIcon sx={{ fontSize: "28px" }}/>
        <Typography variant="h4" fontSize="18px">
          Financial Performance
        </Typography>
      </FlexBetween>

      {/* right side */}
      <FlexBetween gap="2rem">
        <Box sx={{ "&:hover": { color: palette.primary[300]}}}>
          <IconButton sx={{ ml: 1 }} color="inherit" onClick={() => dispatch(setMode())}>
            {palette.mode === "dark" ? (
              <DarkMode sx={{ fontSize: "25px", color: palette.primary.dark}} />
            ) : (
              <LightMode sx={{ fontSize: "25px" }}/>
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