import { useState, useRef } from "react"
import { Stack, Box, Button, Typography, Card } from "@mui/material"
import { currentCVImage, mgPortfolioImage, oldCVImage, hoverImage } from "../assets"
import { Divider, TextOnly } from "."

const convert = (px) => px / 8;

const projects = [
    {
        title: "M.G - Portfolio",
        keywords: ["HTML", "CSS", "Vanilla JS"],
        image: mgPortfolioImage
    },
    {
        title: "CV - Portfolio",
        keywords: ["HTML", "CSS", "Vanilla JS"],
        image: oldCVImage
    },
    {
        title: "CV - React Portfolio",
        keywords: ["HTML", "CSS", "React.js", "Express.js", "Jest", "TypeScript"],
        image: currentCVImage
    },
]
const title = "My Projects";
const descriptionText = `A responsive e-commerce concept website for the fictional jewelry brand Mangata & Gallo,
 built to simulate a real client project from homepage to product highlights and promotional sections. The focus
  is on clean layout, typography, and a smooth browsing experience across different screen sizes.`

const hoverText = "More Info";
const hoverImageSize = "28px";
const cardMaxWidth = "382px";
const expandTime = "0.5s";
const expandButtonWidth = "132px";

const imageHeight = "228px";
const stackSize = 3;


function KeywordRow({ row }) {

    return (
        <>
            {
                row.map((rowItem) => {
                    return (

                        <Typography variant="bodySmall" sx={{ textAlign: "start" }} key={rowItem}>{rowItem}</Typography>

                    )
                })
            }
        </>
    )
}

export function ProjectsSection() {
    const [expandedCard, setExpandedCard] = useState(null);
    const expandHeightRef = useRef(null);
    return (
        <Stack direction="column" spacing={convert(35)} alignItems="center">

            <Typography variant="headingTitle">{title}</Typography>

            {projects.map(({ image, title, keywords }) => {
                const row = [];
                for (var i = 0; i < keywords.length; i += stackSize) {
                    row.push(keywords.slice(i, i + stackSize))
                }
                return (

                    <Card component="a" href="#" key={title} onMouseEnter={() => setExpandedCard(title)} onMouseLeave={() => setExpandedCard(null)}
                        sx={{
                            width: "fit-content",
                            maxWidth: cardMaxWidth,
                            pb: convert(20),
                            border: "1px solid",
                            borderColor: "#1465B1",
                            borderRadius: "13px",
                            textDecoration: "none",
                        }}>
                        <Stack sx={{
                            gap: expandedCard == title ? convert(15) : convert(8),
                            transition: `gap ${expandTime} ease`,
                        }}>

                            <Box component="img" src={image} alt={title}
                                sx={{
                                    maxHeight: imageHeight,
                                    width: "auto",
                                    objectFit: "cover",
                                }} />


                            <Stack
                                direction="row"
                                sx={{
                                    px: convert(23),
                                    pt: convert(12),
                                    alignItems: "center",
                                    width: "100%",
                                }}
                            >

                                <Box
                                    sx={{
                                        width: expandedCard == title ? "50%" : 0,
                                        transition: `width ${expandTime} ease`,
                                    }}
                                />

                                <Box
                                    sx={{
                                        transform: expandedCard == title
                                            ? "translateX(-50%)"
                                            : "translateX(0)",
                                        transition: `transform ${expandTime} ease`,

                                    }}
                                >
                                    <Stack direction="column">
                                        <Typography variant="bodyLarge" sx={{ textAlign: "start" }}>
                                            {title}
                                        </Typography>
                                        {row.map((row, index) => (
                                            <Stack direction="row" key={index} spacing={convert(10)}>
                                                <KeywordRow row={row} />
                                            </Stack>
                                        ))}
                                    </Stack>

                                </Box>


                                {/* RIGHT BOX */}
                                <Box
                                    sx={{
                                        marginLeft: "auto",
                                        display: "flex",
                                        alignItems: "center",
                                        columnGap: convert(6),
                                        overflow: "hidden",
                                        whiteSpace: "nowrap",
                                        boxSizing: "border-box",
                                        borderStyle: "dashed",
                                        borderColor: "background.paper",
                                        borderRadius: "8px",

                                        width: expandedCard == title ? 0 : expandButtonWidth,
                                        px: expandedCard == title ? 0 : convert(14),
                                        py: expandedCard == title ? 0 : convert(7),
                                        borderWidth: expandedCard == title ? 0 : "1px",
                                        opacity: expandedCard == title ? 0 : 1,

                                        transition: `
                                        opacity ${expandTime} ease-in-out,
                                        width ${expandTime} ease,
                                        padding ${expandTime} ease,
                                        border-width ${expandTime} ease
                                        `,

                                        
                                    }}
                                >
                                    <Typography variant="bodyLarge" sx={{ color: "text.secondary" }}>
                                        {hoverText}
                                    </Typography>
                                    <Box
                                        component="img"
                                        src={hoverImage}
                                        alt="More Info"
                                        sx={{
                                            height: hoverImageSize,
                                            width: "auto",
                                            objectFit: "cover",
                                        }}
                                    />
                                </Box>


                            </Stack>





                            <Box ref={expandHeightRef} sx={{
                                height: "fit-content",
                                width: "fit-content",
                                overflow: "hidden",
                                maxHeight: expandedCard == title
                                    ? `${expandHeightRef.current?.scrollHeight}px`
                                    : "0px",
                                transition: `max-height ${expandTime} ease-in-out`,

                            }}>
                                <Divider sx={{
                                    maxWidth: expandedCard == title ? "100%" : 0,
                                    transition: `max-width ${expandTime} ease-in-out`,
                                }} />
                                <Box sx={{
                                    display: "flex",
                                    justifyContent: "start",
                                }}>
                                    <TextOnly sx={{
                                        fontWeight: "300",
                                        px: convert(22),
                                    }}>
                                        {descriptionText}
                                    </TextOnly>
                                </Box>
                            </Box>


                        </Stack>

                    </Card>
                )
            })}

        </Stack>
    )
}