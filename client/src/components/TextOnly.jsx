import { useState } from "react"
import { Stack, Box, Button, Typography } from "@mui/material"

const convert = (px) => px / 8;
export function TextOnly({ children, variant="bodyLarge", sx ={} }) {
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