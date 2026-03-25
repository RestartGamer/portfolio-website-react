import { CssBaseline, Box, Stack, Typography } from "@mui/material";
import { Navbar, Landing, TextOnly, SectionStack, Divider  } from "../components"
import { pathwayImage } from "../assets"
const convert = (px) => px / 8;

const title = "My Journey"
const subTitle = "From IT to Web-Development"

const description = `I believe the road to success isn’t always linear, but that’s what creates authenticity.\n
Throughout my journey in IT Support, I became increasingly drawn to the creative side of technology.\n
So I started learning about the basics of web design, and deepened my knowledge, to the point of building
 products that aim to be intuitive, meaningful and, most of all, human.`

export function MyJourney() {
    return (
        <Stack direction="column" alignItems="center" sx={{

            pb: convert(100),
            gap: { xs: "10px", md: "10px" },
            height: "100%",
            position: "relative",
        }}>
            <Navbar />


            <Stack direction="column" alignItems="center" sx={{

                gap: { xs: "58px", md: "120px" },
                height: "100%",
            }}>
                <Divider/>
                <Stack direction="column" spacing={convert(26)} sx={{
                    px: convert(15)
                }}>
                    <Stack direction="column" alignItems="start">
                        <Typography variant="heroTitle">{title}</Typography>
                        <Typography variant="sectionTitle" sx={{ fontFamily: `"EB Garamond", serif`, fontWeight: "400" }}>{subTitle}</Typography>
                    </Stack>
                    <Box>
                        <Box component="img" src={pathwayImage} alt="Image of Pathway" sx={{
                            width: "100%"
                        }} />
                    </Box>
                </Stack>

                <TextOnly>
                    {description}
                </TextOnly>


            </Stack>
        </Stack>
    )
} 