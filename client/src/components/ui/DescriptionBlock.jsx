
import { Typography } from "@mui/material"

export function DescriptionBlock({ children, variant="bodyLarge", sx ={} }) {
    return (
        <Typography variant={variant} sx={{
            fontWeight: "300",
            textAlign: "left",
            whiteSpace: "pre-line",
            maxWidth: {xs: "100%", md:"60%"},
            minWidth: "300px",
            ...sx,

        }}>
            {children}
        </Typography>
    )
}