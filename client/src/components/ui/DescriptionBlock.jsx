
import { Typography } from "@mui/material"

export function DescriptionBlock({ children, variant="bodyLarge", sx ={} }) {
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