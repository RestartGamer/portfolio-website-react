import {avatarImage} from "../assets"
import { Stack, Box, Typography } from "@mui/material"


const convert = (px) => px / 8;
const title = "Can Korkmaz";
const subTitle = "Front-End Developer in Lisbon";
const imageSize = "354px";



export function Landing() {
    
    return (
        
        <Stack component="section" direction="column" spacing={convert(26)}>
            <Stack direction="column" spacing={convert(1)}
            sx={{
                alignItems:"start",
            }}>
                <Typography variant="heroTitle">{title}</Typography>
                <Typography variant="sectionTitle" sx={{ 
                    fontFamily: `"EB Garamond", serif`,
                    fontWeight:"400"
                    }}>
                    {subTitle}
                    </Typography>
            </Stack>
            <Box sx={{
                overflow:"hidden",
                borderRadius: "22px",
                width:"fit-content",
                height:"fit-content",
            }}>
                <Box component="img" src={avatarImage} alt="Profile Image"
                sx={{
                    width: imageSize,
                    height:"auto",
                }}/>
            </Box>
        </Stack>
    )
}