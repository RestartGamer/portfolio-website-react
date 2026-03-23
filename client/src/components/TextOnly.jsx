import { useState } from "react"
import { Stack, Box, Button, Typography } from "@mui/material"

const convert = (px) => px / 8;
export function TextOnly({ text, variant="bodyLarge", sx ={} }) {
    return (
        <Typography variant={variant} sx={{
            width:"100%",
            fontWeight: "300",
            textAlign: "left",
            whiteSpace: "pre-line",
            px: convert(40),
            ...sx,

        }}>
            {text}
        </Typography>
    )
}