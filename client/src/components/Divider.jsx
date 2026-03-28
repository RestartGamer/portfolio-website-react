import { Box } from "@mui/material";

export function Divider({ width = "85.58%", sx={}, ...props }) {
  return (
    <Box
      component="hr"
      sx={{
        width: {xs: "85.5%", md:"100%"},
        border: "none",
        borderTop: "1px solid",
        borderColor: "divider",
        ...sx,
      }}
      {...props}
    />
  );
}
