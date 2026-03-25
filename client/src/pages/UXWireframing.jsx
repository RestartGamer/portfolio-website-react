import { Stack, Box, Button, Typography, Card, List, ListItem, ListItemText } from "@mui/material"
import { Navbar, Divider } from "../components"
import { wireframe1Image, wireframe2Image, wireframe3Image, prototype1Image, prototype2Image, prototype3Image } from "../assets"
const convert = (px) => px / 8;

const title = "From Idea..."
const subTitle = "...to Concretization"

const description1 = `Translated abstract ideas into structured layouts.
 From Persona, to Customer Journey Map, to low-fidelity wireframe, to Figma Prototype.`

const description2 = ["Focused on usability and content hierarchy.", "Used spacing and alignment to guide user attention."]

const description3 = ["Designed with responsiveness in mind (mobile → desktop).", "Iterated from low-fidelity to high-fidelity design."]

export function UXWireframing() {
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
                <Divider />

                <Stack direction="column" spacing={convert(58)} sx={{
                    px: convert(15)
                }}>
                    <Stack direction="column" alignItems="start" spacing={convert(10)}>
                        <Typography variant="heroTitle">{title}</Typography>
                        <Typography variant="sectionTitle" sx={{ width: "100%", fontFamily: `"EB Garamond", serif`, fontWeight: "400", textAlign: "center" }}>{subTitle}</Typography>
                    </Stack>
                    <Stack direction="row" alignItems="center" spacing={convert(11)}>
                        <Box component="img" src={wireframe1Image} alt="Wireframe number 1" sx={{
                            width: "100%"
                        }} />
                        <Typography variant="sectionTitle" sx={{ fontFamily: `"EB Garamond", serif`, fontWeight: "400" }}>to</Typography>
                        <Box component="img" src={prototype1Image} alt="Prototype number 1" sx={{
                            width: "100%"
                        }} />
                    </Stack>
                </Stack>

                <List component="ul" sx={{ display: "list-item", listStyleType: "disc" }}>
                    <ListItem>
                        <Typography variant="bodyLarge" sx={{ fontWeight: "300" }}>
                            {description1}
                        </Typography>

                    </ListItem>
                </List>

                <Box component="img" src={wireframe2Image} alt="Wireframe number 2" sx={{ width: "100%" }} />

                <List component="ul" sx={{ listStyleType: "disc", }}>
                    {description2.map((description => {
                        return (
                            <ListItem component="li" sx={{ display: "list-item", p: 0 }}>

                                <Typography variant="bodyLarge" sx={{ fontWeight: "300" }}>
                                    {description}
                                </Typography>
                            </ListItem>
                        )
                    }))}
                </List>

                <Box component="img" src={prototype2Image} alt="Prototype number 2" sx={{ width: "100%" }} />


                <List component="ul" sx={{ listStyleType: "disc", }}>
                    {description3.map((description => {
                        return (
                            <ListItem component="li" sx={{ display: "list-item", p: 0 }}>

                                <Typography variant="bodyLarge" sx={{ fontWeight: "300" }}>
                                    {description}
                                </Typography>
                            </ListItem>
                        )
                    }))}
                </List>

                <Stack direction="row" alignItems="center" spacing={convert(11)}>
                    <Box component="img" src={wireframe3Image} alt="Wireframe number 3" sx={{
                        width: "100%"
                    }} />
                    <Typography variant="sectionTitle" sx={{ fontFamily: `"EB Garamond", serif`, fontWeight: "400" }}>to</Typography>
                    <Box component="img" src={prototype3Image} alt="Prototype number 3" sx={{
                        width: "100%"
                    }} />
                </Stack>

            </Stack>
        </Stack>
    )
} 