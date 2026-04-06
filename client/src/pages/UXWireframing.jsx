import { Stack, Box, Button, Typography, Card, List, ListItem, ListItemText } from "@mui/material"
import { Navbar, Divider, TitleBlock } from "../components"
import { wireframe1Image, wireframe2Image, wireframe3Image, prototype1Image, prototype2Image, prototype3Image } from "../assets"
import { convert } from "../utils/muiConverter"

const title = "Figma Design Project"
const subTitle = "From Wireframe to Prototype"

const heroTitleSpacing = { xs: convert(90), md: convert(90) };
const sectionSpacing = convert(120);
const singleImageSize = "400px"
const groupImageSize = "300px"
const imageSize = "400px";
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

function ListSection({ listItems = [] }) {
    return <List component="ul" sx={{ display:"block", width: textWidth, maxWidth: "100%", rowGap:convert(10) }}>
        {listItems.map((listItem) => {
            return <ListItem key={listItem} sx={{ display: "list-item", listStyleType: "disc",p:0, mb:0  }}>
                <Typography variant="bodyLarge" sx={{ fontWeight: "300" }}>
                    {listItem}
                </Typography>
            </ListItem>
        })}
    </List>
}

function ImageComparisson({ image1, alt1 = "Image 1", midText = "to", image2, alt2 = "Image 2", isHorizontal = true, size = "300px" }) {
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

export function UXWireframing() {
    return (
        <Stack direction="column" alignItems="center" sx={{
            paddingBottom: convert(100),
            gap: { xs: "10px", md: "10px" },
            width: "100%",
            position: "relative",
        }}>

            <TitleBlock variant="heroTitle" title={title} sx={{
                mt:convert(100),
                mb:convert(40),
            }}>
                {subTitle}
            </TitleBlock>

            <PageSection>
                <ImageComparisson
                    image1={wireframe1Image} alt1="Image of Wireframe"
                    midText="to"
                    image2={prototype1Image} alt2="Image of Prototype"
                    size={groupImageSize}
                />

                <ListSection
                    listItems={
                        [
                            `Translated abstract ideas into structured layouts.
                                From Persona, to Customer Journey Map, to low-fidelity wireframe, to Figma Prototype.`
                        ]
                    }
                />


                <Box
                    component="img"
                    src={wireframe2Image}
                    alt="Wireframe number 2"
                    sx={{ maxWidth: { xs: "100%", md: singleImageSize }, width: "100%" }}
                />

                <ListSection
                    listItems={
                        [
                            "Focused on usability and content hierarchy.",
                            "Used spacing and alignment to guide user attention."
                        ]
                    }
                />

                <Box
                    component="img"
                    src={prototype2Image}
                    alt="Prototype number 2"
                    sx={{ width: { xs: "100%", md: singleImageSize }, maxWidth: "100%" }}
                />

                <ListSection
                    listItems={
                        [
                            "Designed with responsiveness in mind (mobile → desktop).",
                            "Iterated from low-fidelity to high-fidelity design."
                        ]
                    }
                />

                <ImageComparisson
                    image1={wireframe3Image} alt1="Image of Wireframe"
                    midText="to"
                    image2={prototype3Image} alt2="Image of Prototype"
                    size={groupImageSize}
                />


            </PageSection>
        </Stack>
    )
}

