import {Stack, Box, Typography} from "@mui/material"
import { convert } from "../../utils/muiConverter"


export function ImageComparisonBlock({ image1, alt1 = "Image 1", midText = "to", image2, alt2 = "Image 2", isHorizontal = true, size = "300px" }) {
    return <Stack
        direction="row"
        alignItems="center"
        justifyContent="center"
        spacing={convert(11)}
        sx={{ flexWrap: "wrap", width: "100%" }}
    >
        <Box
            component="img"
            src={image1}
            alt={alt1}
            sx={{ maxWidth: { xs: "100%", md: size }, width: "100%" }}
        />
        <Typography
            variant="sectionTitle"
            sx={{
                width: { xs: "100%", md: "auto" },
                fontFamily: `"EB Garamond", serif`,
                fontWeight: "400"
            }}
        >
            {midText}
        </Typography>
        <Box
            component="img"
            src={image2}
            alt={alt2}
            sx={{ maxWidth: { xs: "100%", md: size }, width: "100%" }}
        />
    </Stack>
}