import { avatarImage } from "../../assets"
import { Stack, Box } from "@mui/material"
import { convert } from "../../utils/muiConverter"


const imageSize = "354px";



export function HeroSection() {

    return (
        <Stack alignItems="center" spacing={convert(26)} >
            <Box sx={{
                overflow: "hidden",
                borderRadius: "22px",
                width: "fit-content",
                height: "fit-content",
            }}>
                <Box component="img" src={avatarImage} alt="Profile Image"
                    sx={{
                        width: imageSize,
                        height: "auto",
                    }} />
            </Box>
        </Stack >
    )
}