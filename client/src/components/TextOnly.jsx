import { useState } from "react"
import { Stack, Box, Button, Typography } from "@mui/material"

const convert = (px) => px / 8;
export function TextOnly({ text }) {
    return (
        <Typography variant="bodyLarge" sx={{
            fontWeight: "300",
            textAlign: "left",
            whiteSpace: "pre-line",
            px: convert(40),

        }}>
            {text}
        </Typography>
    )
}