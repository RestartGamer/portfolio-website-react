
import { Stack, Box } from "@mui/material"
import { convert } from "../../utils/muiConverter"
import { DescriptionBlock } from "../../components"
import { pageLayout } from "../../layout/layout"

const {
    imageMaxWidth,
    imageMinWidth,
} = pageLayout;

const textLayout = {
    flex: "1 0 550px",
}

export function HeroSection({ children, image, isImgLeft = true, descriptionSx = {} , imageSx ={}}) {

    return (
        <Stack direction={{
            xs: "column",
            md: isImgLeft ? "row" : "row-reverse",
        }}
            alignItems="center" justifyContent="center"
            sx={{
                width: "100%",
                flexWrap: "wrap",
                gap: convert(120),
            }}>

            <Box component="img" src={image} alt="Profile Image"
                sx={{
                    width: "100%",
                    minWidth: imageMinWidth,
                    maxWidth: imageMaxWidth,
                    height: "auto",
                    borderRadius: "22px",
                    ...imageSx,
                }} />
            <DescriptionBlock sx={{ ...textLayout,...descriptionSx }}>
                {children}
            </DescriptionBlock>


        </Stack>

    )
}