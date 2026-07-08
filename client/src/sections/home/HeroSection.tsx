import type { ReactNode } from "react"
import { Box, Stack } from "@mui/material"
import type { SxProps, Theme } from "@mui/material/styles"

import { DescriptionBlock } from "../../components"
import { pageLayout } from "../../layout/layout"
import { convert } from "../../utils/muiConverter"

const { imageMaxWidth, imageMinWidth } = pageLayout

const textLayout = {
    flex: "1 0 550px",
}

type HeroSectionProps = {
    children: ReactNode;
    image: string;
    isImgLeft?: boolean;
    descriptionSx?: SxProps<Theme>;
    imageSx?: SxProps<Theme>;
    imageAlt?: string;
}

export function HeroSection({
    children,
    image,
    isImgLeft = true,
    descriptionSx = {},
    imageSx = {},
    imageAlt = "Portrait of Can Korkmaz",
}: HeroSectionProps) {
    return (
        <Stack
            direction={{
                xs: "column",
                md: isImgLeft ? "row" : "row-reverse",
            }}
            alignItems="center"
            justifyContent="center"
            sx={{
                width: "100%",
                flexWrap: "wrap",
                gap: convert(120),
            }}
        >
            <Box
                component="img"
                src={image}
                alt={imageAlt}
                loading="eager"
                decoding="async"
                fetchPriority="high"
                sx={{
                    width: "100%",
                    minWidth: imageMinWidth,
                    maxWidth: imageMaxWidth,
                    height: "auto",
                    borderRadius: "22px",
                    ...imageSx,
                }}
            />

            <DescriptionBlock sx={{ ...textLayout, ...descriptionSx }}>
                {children}
            </DescriptionBlock>
        </Stack>
    )
}
