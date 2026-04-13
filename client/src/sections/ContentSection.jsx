import { Stack } from "@mui/material"
import { convert } from "../utils/muiConverter"
import {pageLayout} from "../layout/layout.js"

const {
  heroTitleMt,
  contentSpacing,
  pagePaddingX,
  imageMaxWidth,
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