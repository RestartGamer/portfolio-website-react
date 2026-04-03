import { CssBaseline, Box, Stack, Typography } from "@mui/material";
import { Navbar, Landing, DescriptionBlock, SectionStack, Divider } from "../components"
import { pathwayImage } from "../assets"
import { convert } from "../utils/muiConverter"

const title = "My Journey"
const subTitle = "From IT to Web-Development"

const description = `I believe the road to success isn’t always linear, but that’s what creates authenticity.\n
Throughout my journey in IT Support, I became increasingly drawn to the creative side of technology.\n
So I started learning about the basics of web design, and deepened my knowledge, to the point of building
 products that aim to be intuitive, meaningful and, most of all, human.`

const heroTitleSpacing = { xs: convert(500), md: convert(90) };
const sectionSpacing = convert(120);
const imageSize = "500px";

function PageSection({ children }) {
    return (
        <Stack
            alignItems="center"
            sx={{
                width: { xs: "auto", md: "100%" },
                gap: { xs: convert(58), md: sectionSpacing },
                px: { xs: convert(40), md: convert(50) },
                pt: { xs: convert(40), md: convert(80) }
            }}
        >
            {children}
        </Stack>
    );
}

export function MyJourney() {
    return (
        <Stack direction="column" alignItems="center" sx={{
            paddingBottom: convert(100),
            gap: { xs: "10px", md: "10px" },
            width: "100%",
            position: "relative",
        }}>
            <Navbar />
            <Divider />

            <PageSection>
                <Stack alignItems="center" spacing={convert(20)}>
                    <Stack direction="column" spacing={convert(50)} sx=
                        {{
                            px: convert(15),
                            alignItems: { xs: "start", md: "center" }
                        }}>

                        <Stack direction="column" sx={{
                            alignItems: { xs: "start", md: "center" }
                        }}>
                            <Typography variant="heroTitle">{title}</Typography>
                            <Typography
                                variant="sectionTitle"
                                sx={{
                                    fontFamily: `"EB Garamond", serif`,
                                    fontWeight: "400",
                                    textAlign: "start",
                                }}
                            >
                                {subTitle}
                            </Typography>
                        </Stack>

                        <Box>
                            <Box
                                component="img"
                                src={pathwayImage}
                                alt="Image of Pathway"
                                loading="lazy"
                                decoding="async"
                                sx={{
                                    width: imageSize
                                }}
                            />
                        </Box>
                    </Stack>

                    <DescriptionBlock>
                        {description}
                    </DescriptionBlock>
                </Stack>
            </PageSection>



        </Stack>
    )
}