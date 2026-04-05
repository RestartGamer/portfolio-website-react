import { Stack, Box, Button, Typography, Card, List, ListItem, ListItemText } from "@mui/material"
import { Navbar, Divider } from "../components"
import { wireframe1Image, wireframe2Image, wireframe3Image, prototype1Image, prototype2Image, prototype3Image } from "../assets"
import { convert } from "../utils/muiConverter"

const title = "From Idea..."
const subTitle = "...to Concretization"

const description1 = `Translated abstract ideas into structured layouts.
 From Persona, to Customer Journey Map, to low-fidelity wireframe, to Figma Prototype.`

const description2 = ["Focused on usability and content hierarchy.", "Used spacing and alignment to guide user attention."]

const description3 = ["Designed with responsiveness in mind (mobile → desktop).", "Iterated from low-fidelity to high-fidelity design."]

const heroTitleSpacing = { xs: convert(90), md: convert(90) };
const sectionSpacing = convert(120);
const imageSize = "500px";
const textWidth = "700px";

function PageSection({ children }) {
    return (
        <Stack
            alignItems="center"
            sx={{
                width: "100%",
                gap: { xs: "58px", md: sectionSpacing },
                px: { xs: convert(40), md: convert(50) },
                pt: { xs: convert(80), md: convert(80) },
                boxSizing: "border-box",
            }}
        >
            {children}
        </Stack>
    );
}

export function UXWireframing() {
    return (
        <Stack direction="column" alignItems="center" sx={{
            paddingBottom: convert(100),
            gap: { xs: "10px", md: "10px" },
            width: "100%",
            position: "relative",
        }}>
            <Navbar />

            <PageSection>
                <Stack alignItems="start" spacing={heroTitleSpacing} sx={{ width: "100%" }}>
                    <Stack direction="column" spacing={convert(58)} sx={{ px: convert(15), width: "100%", boxSizing: "border-box" }}>
                        <Stack direction="column" alignItems="start" spacing={convert(10)}>
                            <Typography variant="heroTitle">{title}</Typography>
                            <Typography
                                variant="sectionTitle"
                                sx={{
                                    fontFamily: `"EB Garamond", serif`,
                                    fontWeight: "400",
                                }}
                            >
                                {subTitle}
                            </Typography>
                        </Stack>

                        <Stack
                            direction="row"
                            alignItems="center"
                            spacing={convert(11)}
                            sx={{ flexWrap: "wrap", width: "100%" }}
                        >
                            <Box
                                component="img"
                                src={wireframe1Image}
                                alt="Wireframe number 1"
                                sx={{ width: { xs: "100%", md: imageSize }, maxWidth: "100%" }}
                            />
                            <Typography
                                variant="sectionTitle"
                                sx={{
                                    width: { xs: "100%", md: "auto" },
                                    fontFamily: `"EB Garamond", serif`,
                                    fontWeight: "400"
                                }}
                            >
                                to
                            </Typography>
                            <Box
                                component="img"
                                src={prototype1Image}
                                alt="Prototype number 1"
                                sx={{ width: { xs: "100%", md: imageSize }, maxWidth: "100%" }}
                            />
                        </Stack>
                    </Stack>

                    <List component="ul" sx={{ display: "list-item", listStyleType: "disc", width: textWidth, maxWidth: "100%" }}>
                        <ListItem>
                            <Typography variant="bodyLarge" sx={{ fontWeight: "300" }}>
                                {description1}
                            </Typography>
                        </ListItem>
                    </List>

                    <Box
                        component="img"
                        src={wireframe2Image}
                        alt="Wireframe number 2"
                        sx={{ width: { xs: "100%", md: imageSize }, maxWidth: "100%" }}
                    />

                    <List component="ul" sx={{ listStyleType: "disc", width: textWidth, maxWidth: "100%" }}>
                        {description2.map((description) => {
                            return (
                                <ListItem component="li" sx={{ display: "list-item", p: 0 }} key={description}>
                                    <Typography variant="bodyLarge" sx={{ fontWeight: "300" }}>
                                        {description}
                                    </Typography>
                                </ListItem>
                            )
                        })}
                    </List>

                    <Box
                        component="img"
                        src={prototype2Image}
                        alt="Prototype number 2"
                        sx={{ width: { xs: "100%", md: imageSize }, maxWidth: "100%" }}
                    />

                    <List component="ul" sx={{ listStyleType: "disc", width: textWidth, maxWidth: "100%" }}>
                        {description3.map((description) => {
                            return (
                                <ListItem component="li" sx={{ display: "list-item", p: 0 }} key={description}>
                                    <Typography variant="bodyLarge" sx={{ fontWeight: "300" }}>
                                        {description}
                                    </Typography>
                                </ListItem>
                            )
                        })}
                    </List>

                    <Stack
                        direction="row"
                        alignItems="center"
                        spacing={convert(11)}
                        sx={{ flexWrap: "wrap", width: "100%" }}
                    >
                        <Box
                            component="img"
                            src={wireframe3Image}
                            alt="Wireframe number 3"
                            sx={{ width: { xs: "100%", md: imageSize }, maxWidth: "100%" }}
                        />
                        <Typography
                            variant="sectionTitle"
                            sx={{
                                width: { xs: "100%", md: "auto" },
                                fontFamily: `"EB Garamond", serif`,
                                fontWeight: "400"
                            }}
                        >
                            to
                        </Typography>
                        <Box
                            component="img"
                            src={prototype3Image}
                            alt="Prototype number 3"
                            sx={{ width: { xs: "100%", md: imageSize }, maxWidth: "100%" }}
                        />
                    </Stack>
                </Stack>
            </PageSection>
        </Stack>
    )
}