import { useState, useRef } from "react"
import { Stack, Box, Typography, Card } from "@mui/material"
import { currentCVImage, mgPortfolioImage, oldCVImage, hoverImage } from "../../assets"
import { Divider, DescriptionBlock } from "../../components"

const convert = (px) => px / 8;

const cards = [
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
const hoverImageSize = "20px";
const cardMaxWidth = "350px";
const expandTime = "0.5s";
const expandButtonWidth = "132px";

const imageHeight = "228px";
const stackSize = 3;


function KeywordRow({ row }) {

    return (
        <Stack direction="row" sx={{
            columnGap: convert(10),
            minHeight: convert(200),
        }}>
            {
                row.map((rowItem) => {
                    return (

                        <Typography key={rowItem} variant="bodySmall" sx={{ textAlign: "start" }} >{rowItem}</Typography>

                    )
                })
            }
        </Stack>
    )
}




export function ProjectsSection() {
    const [expandedCard, setExpandedCard] = useState(null);
    const expandHeightRef = useRef(null);
    return (
        <Stack direction="row" sx={{
            gap: convert(35),
            flexWrap: "wrap", // or remove this line entirely
            justifyContent: "center",
        }}>
            {cards.map(({ id, image, title, keywords }) => {
                const rows = [];
                for (var i = 0; i < keywords.length; i += stackSize) {
                    rows.push(keywords.slice(i, i + stackSize))
                }
                while (rows.length < 2) {
                    rows.push([]);
                }
                return (
                    <Card key={id} onMouseEnter={() => setExpandedCard(id)} onMouseLeave={() => setExpandedCard(null)} sx={{
                        overflow: "hidden",
                        width: "fit-content",
                        height: "fit-content",
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
                        {/*MAIN ROW*/}
                        <Stack direction="row" justifyContent="center" alignItems="center" sx={{
                            width: expandedCard === id ? "200%" : "100%",

                            pt: convert(12),
                            pb: convert(8),
                            transition: `width ${expandTime} ease-in-out`

                        }}>

                            {/*BOX LEFT*/}
                            <Stack alignItems="center" sx={{
                                paddingInline: expandedCard === id ? 0 : convert(23),
                                width: "50%",
                                minWidth: "fit-content",
                                boxSizing: "content-box",
                                transition: `padding-inline ${expandTime} ease-in-out`

                            }}>
                                <Stack alignItems="start" sx={{
                                    width: expandedCard === id ? 0 : "100%",
                                    minWidth: "fit-content",
                                    transition: `width ${expandTime} ease-in-out`,

                                }}>
                                    <Typography variant="bodyLarge">{title}</Typography>
                                    <Stack>
                                        {rows.map((rowStack, index) => {
                                            return <KeywordRow key={index} row={rowStack} />
                                        })}
                                    </Stack>
                                </Stack>
                            </Stack>

                            {/*BOX RIGHT*/}
                            <Stack alignItems="end" sx={{
                                px: convert(23),
                                width: "50%",
                            }}>
                                <Stack direction="row" justifyContent="end" sx={{
                                    overflow: "hidden",
                                    whiteSpace: "nowrap",
                                    borderStyle: "dashed",
                                    borderColor: "background.paper",
                                    borderRadius: "8px",
                                    columnGap: convert(4),



                                    px: convert(7),
                                    py: convert(7),
                                    borderWidth: "1px",
                                    opacity: expandedCard === id ? 0 : 1,

                                    transition: `
                                        opacity ${expandTime} ease-in-out
                                        `,

                                }}>
                                    <Typography variant="bodySmall" sx={{ color: "text.secondary" }}>{hoverText}</Typography>
                                    <Box component="img" src={hoverImage} alt="hover image" sx={{
                                        height: hoverImageSize,
                                        width: "auto",
                                        objectFit: "cover",
                                    }} />
                                </Stack>
                            </Stack>


                        </Stack>

                        <Box sx={{
                            height: "fit-content",
                            width: "fit-content",




                        }}>
                            <Divider sx={{
                                width: "85.58%",
                                maxWidth: expandedCard === id ? "100%" : 0,
                                transition: `max-width ${expandTime} ease-in-out`,
                            }} />
                            <Stack sx={{
                                height: "fit-content",
                                width: "fit-content",
                                pb: expandedCard === id ? convert(10) : 0,
                                maxHeight: expandedCard === id
                                    ? `35vh`
                                    : "0px",
                                transition: `max-height ${expandTime} ease-in-out, padding ${expandTime} ease-in-out`,
                                overflowX: "scroll",
                            }}>
                                <Box sx={{
                                    display: "flex",
                                    justifyContent: "start",
                                }}>
                                    <DescriptionBlock sx={{
                                        fontWeight: "300",
                                        px: convert(22),
                                    }}>
                                        {descriptionText}
                                    </DescriptionBlock>
                                </Box>
                            </Stack>


                        </Box>

                    </Card>
                )
            })}
        </Stack>

    )
}