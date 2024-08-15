import { Box, useTheme } from "@mui/material";

type Props = {};

const Unkonow = (props: Props) => {
  const { palette } = useTheme();
  return (
    <Box sx={{ fontSize: "16rem" }} color={palette.grey[300]}>
      Unkonow
    </Box>
  );
};

export default Unkonow;
