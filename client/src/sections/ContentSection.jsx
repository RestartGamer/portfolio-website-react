import { Stack } from "@mui/material"
import {pageLayout} from "../layout/layout.js"

const {
  contentSpacing,
} = pageLayout;

export function ContentSection({ children }) {
    return (
        <Stack
            alignItems="center"
            sx={{
                width:"100%",
                gap: contentSpacing,
                boxSizing: "border-box",
            }}
        >
            {children}
        </Stack>
    );
}