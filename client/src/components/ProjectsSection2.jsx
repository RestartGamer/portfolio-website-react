import { useState, useRef, Fragment } from "react"
import { Stack, Box, Button, Typography, Card } from "@mui/material"
import { currentCVImage, mgPortfolioImage, oldCVImage, hoverImage } from "../assets"
import { Divider, TextOnly } from "."

const convert = (px) => px / 8;

const projects = [
    {
        id: "mgportfolio",
        title: "M.G - Portfolio",
        keywords: ["HTML", "CSS", "Vanilla JS"],
        image: mgPortfolioImage
    },
    {
        id: "cvportfolio",
        title: "CV - Portfolio",
        keywords: ["HTML", "CSS", "Vanilla JS"],
        image: oldCVImage
    },
    {
        id: "cvreactportfolio",
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
const expandTime = "0.4s";
const expandButtonWidth = "132px";

const imageHeight = "228px";
const stackSize = 3;


function KeywordRow({ row }) {

    return (
        <Stack direction="row" sx={{
            columnGap: convert(10),
        }}>
            {
                row.map((rowItem) => {
                    return (

                        <Typography variant="bodyMedium" sx={{ textAlign: "start" }} key={rowItem}>{rowItem}</Typography>

                    )
                })
            }
        </Stack>
    )
}


export function ProjectsSection2() {
    const [expandedCard, setExpandedCard] = useState(null);
    const expandHeightRef = useRef(null);
    return (
        <Stack spacing={convert(35)} alignItems="center">
            <Typography variant="headingTitle">{title}</Typography>
            {projects.map(({ id, image, title, keywords }) => {
                const row = [];
                for (var i = 0; i < keywords.length; i += stackSize) {
                    row.push(keywords.slice(i, i + stackSize))
                }
                return (
                    <Card key={id} onMouseEnter={() => setExpandedCard(id)} onMouseLeave={() => setExpandedCard(null)} sx={{
                        overflow: "hidden",
                        width: "fit-content",
                        maxWidth: cardMaxWidth,
                        pb: convert(11),
                        border: "1px solid",
                        borderColor: "#1465B1",
                        borderRadius: "13px",
                        textDecoration: "none",
                    }}>
                        <Box component="img" src={image} alt={title} sx={{
                            width: "100%",
                            height: "auto",
                            objectFit: "cover",
                        }} />

                        <Stack direction="row" justifyContent="center" alignItems="center" sx={{
                            width: "100%",
                            px: convert(23),
                            pt: convert(12),
                            pb: convert(8),
                        }}>
                            <Stack alignItems="start" sx={{
                                width: expandedCard === id ? 0 : "50%",
                                minWidth: "fit-content",
                                rowGap: expandedCard === id ? 0 : convert(15),
                                transition: `width ${expandTime} ease-in-out, row-gap ${expandTime} ease-in-out`,
                            }}>
                                <Typography variant="cardTitle">{title}</Typography>
                                <Stack>
                                    {row.map(rowStack => {
                                        return <KeywordRow row={rowStack} />
                                    })}
                                </Stack>
                            </Stack>


                            <Stack alignItems="end" sx={{
                                overflow:"hidden",
                                width: "50%",
                                maxWidth: expandedCard === id ? 0 : "50%",
                                transition: `max-width ${expandTime} ease-in-out`,
                            }}>
                                <Stack direction="row" justifyContent="end" sx={{
                                    overflow: "hidden",
                                    whiteSpace: "nowrap",
                                    borderStyle: "dashed",
                                    borderColor: "background.paper",
                                    borderRadius: "8px",
                                    columnGap: convert(6),



                                    px: expandedCard === id ? 0 : convert(14),
                                    py: convert(7),
                                    borderWidth: expandedCard === id ? 0 : "1px",
                                    opacity: expandedCard === id ? 0 : 1,
                                    transition: `
                                        opacity ${expandTime} ease-in-out,
                                        padding ${expandTime} ease,
                                        border-width ${expandTime} ease
                                        `,
                                    
                                }}>
                                    <Typography sx={{ color: "text.secondary" }}>{hoverText}</Typography>
                                    <Box component="img" src={hoverImage} alt="hover image" sx={{
                                        height: hoverImageSize,
                                        width: "auto",
                                        objectFit: "cover",
                                    }} />
                                </Stack>
                            </Stack>


                        </Stack>

                        <Box ref={expandHeightRef} sx={{
                            height: "fit-content",
                            width: "fit-content",
                            overflow: "hidden",
                            pb: convert(10),
                            maxHeight: expandedCard === id
                                ? `${expandHeightRef.current?.scrollHeight}px`
                                : "0px",
                            transition: `max-height ${expandTime} ease-in-out`,

                        }}>
                            <Divider sx={{
                                maxWidth: expandedCard === id ? "100%" : 0,
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

                    </Card>
                )
            })}

        </Stack>
    )
}