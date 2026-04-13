import { Stack, Typography } from "@mui/material"
import {pageLayout} from "../../layout/layout"
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
            <Typography variant={variant}>{title}</Typography>


            {
                children !== null &&
                <Typography variant="sectionTitle" sx={{
                    fontFamily: `"EB Garamond", serif`,
                    fontWeight: "400",

                }}>
                    {children}
                </Typography >
            }



        </Stack>
    )


}
