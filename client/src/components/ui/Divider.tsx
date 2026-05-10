import { Box } from "@mui/material";
import type { SxProps, Theme } from "@mui/material/styles";

type DividerProps = {
  width?: string;
  sx?: SxProps<Theme>;
};

export function Divider({ width: _width = "85.58%", sx = {}, ...props }: DividerProps) {
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
