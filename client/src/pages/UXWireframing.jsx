import { Box } from "@mui/material"
import { TitleBlock, ListBlock, ImageComparisonBlock } from "../components"
import { ContentSection } from "../sections"
import { wireframe1Image, wireframe2Image, wireframe3Image, prototype1Image, prototype2Image, prototype3Image } from "../assets"

const title = "Figma Design Project"
const subTitle = "From Idea to Wireframe to Prototype"

const singleImageSize = "400px"
const groupImageSize = "300px"
const textWidth = "700px";


export function UXWireframing() {
    return (
        <>
            <TitleBlock variant="heroTitle" title={title} sx={{
            }}>
                {subTitle}
            </TitleBlock>

            <ContentSection>
                <ImageComparisonBlock
                    image1={wireframe1Image} alt1="Image of Wireframe"
                    midText="to"
                    image2={prototype1Image} alt2="Image of Prototype"
                    size={groupImageSize}
                />

                <ListBlock
                    listItems={
                        [
                            `Translated abstract ideas into structured layouts.
                                From Persona, to Customer Journey Map, to low-fidelity wireframe, to Figma Prototype.`
                        ]
                    }
                    textWidth={textWidth}
                    typography="bodyLarge"
                    fontWeight="300"
                />


                <Box
                    component="img"
                    src={wireframe2Image}
                    alt="Wireframe number 2"
                    sx={{ maxWidth: { xs: "100%", md: singleImageSize }, width: "100%" }}
                />

                <ListBlock
                    listItems={
                        [
                            "Focused on usability and content hierarchy.",
                            "Used spacing and alignment to guide user attention."
                        ]
                    }
                    textWidth={textWidth}
                    typography="bodyLarge"
                    fontWeight="300"
                />

                <Box
                    component="img"
                    src={prototype2Image}
                    alt="Prototype number 2"
                    sx={{ width: { xs: "100%", md: singleImageSize }, maxWidth: "100%" }}
                />

                <ListBlock
                    listItems={
                        [
                            "Designed with responsiveness in mind (mobile → desktop).",
                            "Iterated from low-fidelity to high-fidelity design."
                        ]
                    }
                    textWidth={textWidth}
                    typography="bodyLarge"
                    fontWeight="300"
                />

                <ImageComparisonBlock
                    image1={wireframe3Image} alt1="Image of Wireframe"
                    midText="to"
                    image2={prototype3Image} alt2="Image of Prototype"
                    size={groupImageSize}
                />


            </ContentSection>
        </>
    )
}

