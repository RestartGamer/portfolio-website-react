import type { ReactNode } from "react";
import { Typography } from "@mui/material";
import type { TypographyProps } from "@mui/material";
import type { SxProps, Theme } from "@mui/material/styles";

type DescriptionBlockProps = {
  children: ReactNode;
  variant?: TypographyProps["variant"];
  sx?: SxProps<Theme>;
};

export function DescriptionBlock({ children, variant = "bodyLarge", sx = {} }: DescriptionBlockProps) {
    return (
        <Typography variant={variant} component="p" color="text.primary" sx={{
            display:"flex",
            justifyContent: "center",
            fontWeight: "300",
            textAlign: "left",
            whiteSpace: "pre-line",
            ...sx,

        }}>
            {children}
        </Typography>
    )
}
