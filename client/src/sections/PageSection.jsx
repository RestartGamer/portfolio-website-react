import { Stack } from "@mui/material"
import { pageLayout } from "../layout/layout.js"


const {
    pageMt,
    pageSpacing,
    pagePaddingX,
    pagePb,
} = pageLayout;

export function PageSection({ children }) {
    return (
        <Stack
            alignItems="center"
            sx={{
                mt: pageMt,
                pb: pagePb,
                px: pagePaddingX,
                width: "100%",
                position: "relative",
                rowGap: pageSpacing,
            }}
        >
            {children}
        </Stack>
    );
}