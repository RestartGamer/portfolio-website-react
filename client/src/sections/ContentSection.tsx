import type { ReactNode } from "react";
import { Stack } from "@mui/material"
import {pageLayout} from "../layout/layout.js"

const {
  contentSpacing,
} = pageLayout;

type ContentSectionProps = {
  children: ReactNode;
};

export function ContentSection({ children }: ContentSectionProps) {
    return (
        <Stack
            component="section"
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
