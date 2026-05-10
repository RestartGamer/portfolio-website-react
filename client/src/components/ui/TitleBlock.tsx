import type { ReactNode } from "react";
import { Stack, Typography } from "@mui/material";
import type { TypographyProps } from "@mui/material";
import type { SxProps, Theme } from "@mui/material/styles";
import { pageLayout } from "../../layout/layout";

const {
    titleSpacing
} = pageLayout;

type TitleBlockProps = {
  title: string;
  children?: ReactNode;
  variant?: TypographyProps["variant"];
  sx?: SxProps<Theme>;
};

export function TitleBlock({ title, children = null, variant = "heroTitle", sx = {} }: TitleBlockProps) {
    return (
        <Stack direction="column" spacing={titleSpacing}
            sx={{
                alignItems: "center",
                ...sx,
            }}>
            <Typography
                variant={variant}
                {...(variant === "heroTitle"
                    ? { component: "h1" as const }
                    : variant === "headingTitle"
                    ? { component: "h2" as const }
                    : variant === "sectionTitle"
                    ? { component: "h3" as const }
                    : {})}
                color="text.primary"
            >
                {title}
            </Typography>


            {
                children !== null &&
                <Typography
                    variant="sectionTitle"
                    component="h3"
                    color="text.primary"
                    sx={{
                        fontFamily: `"EB Garamond", serif`,
                        fontWeight: "400",

                    }}>
                    {children}
                </Typography >
            }



        </Stack>
    )


}
