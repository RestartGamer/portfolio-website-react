import { Stack, Typography } from "@mui/material"
import { pageLayout } from "../../layout/layout"
const {
    titleSpacing
} = pageLayout;


export function TitleBlock({ title, children = null, variant = "heroTitle", sx = {} }) {
    return (
        <Stack direction="column" spacing={titleSpacing}
            sx={{
                alignItems: "center",
                ...sx,
            }}>
            <Typography
                variant={variant}
                component={
                    variant === "heroTitle" ? "h1" : variant === "headingTitle" ? "h2" : variant === "sectionTitle" && "h3"
                }
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
