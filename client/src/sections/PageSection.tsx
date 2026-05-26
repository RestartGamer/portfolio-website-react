import type { ReactNode } from "react";
import { Stack } from "@mui/material"
import { pageLayout } from "../layout/layout.js"


const {
    pageMt,
    pageSpacing,
    pagePaddingX,
    pagePb,
} = pageLayout;

type PageSectionProps = {
  children: ReactNode;
};

export function PageSection({ children }: PageSectionProps) {
    return (
        <Stack
            component="main" id="main-content"
            alignItems="center"
            tabIndex={-1}
            sx={{
                mt: pageMt,
                pb: pagePb,
                paddingInline: pagePaddingX,
                width: "100%",
                position: "relative",
                rowGap: pageSpacing,
            }}
        >
            {children}
        </Stack>
    );
}
