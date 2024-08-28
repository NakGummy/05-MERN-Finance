import { Link } from "react-router-dom";
import PixIcon from "@mui/icons-material/Pix";
import MenuIcon from "@mui/icons-material/Menu";
import { Box, Typography, useTheme } from "@mui/material";
import { useState } from "react";
import FlexBetween from "@/components/FlexBetween";
import Drawer from "../../components/DrawerMenu";

const Navbar = () => {
  const { palette } = useTheme();
  const [selected, setSelected] = useState("dashboard");
  return (
    <FlexBetween mb="0.25rem" p="0.5rem 0rem" color={palette.grey[300]}>
      {/* LEFT SIDE */}
      <FlexBetween gap="0.75rem">
        <Drawer
          element={
            <MenuIcon
              sx={{
                "&:hover": { color: palette.primary[100] },
                color: { color: palette.grey[300] },
                fontSize: "36px",
              }}
            />
          }
        />
        <PixIcon sx={{ fontSize: "28px" }} />
        <Typography variant="h4" fontSize="16px">
          Finanseer
        </Typography>
      </FlexBetween>

      {/* RIGHT SIDE */}
      <FlexBetween gap={"2rem"}>
        {/* Box for dashboard */}
        <Box sx={{ "&:hover": { color: palette.primary[100] } }}>
          <Link
            to="/"
            onClick={() => setSelected("dashboard")}
            style={{
              color: selected === "dashboard" ? "inherit" : palette.grey[700],
              textDecoration: "inherit",
            }}
          >
            dashboard
          </Link>
        </Box>

        {/* Box for predictions */}
        <Box sx={{ "&:hover": { color: palette.primary[100] } }}>
          <Link
            to="/predictions"
            onClick={() => setSelected("predictions")}
            style={{
              color: selected === "predictions" ? "inherit" : palette.grey[700],
              textDecoration: "inherit",
            }}
          >
            predictions
          </Link>
        </Box>

        {/* Box for howto */}
        <Box sx={{ "&:hover": { color: palette.primary[100] } }}>
          <Link
            to="/howto"
            onClick={() => setSelected("howto")}
            style={{
              color: selected === "howto" ? "inherit" : palette.grey[700],
              textDecoration: "inherit",
            }}
          >
            howto
          </Link>
        </Box>

        {/* Box for unching */}
        <Box sx={{ "&:hover": { color: palette.primary[100] } }}>
          <Link
            to="/unknown"
            onClick={() => setSelected("unkonow")}
            style={{
              color: selected === "unkonow" ? "inherit" : palette.grey[700],
              textDecoration: "inherit",
            }}
          >
            unknown
          </Link>
        </Box>
      </FlexBetween>
    </FlexBetween>
  );
};

export default Navbar;
