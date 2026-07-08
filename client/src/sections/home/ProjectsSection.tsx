import { useState } from "react"

import {
    Stack,
    Box,
    Typography,
    Card,
    useMediaQuery,
    useTheme,
    ButtonBase,
} from "@mui/material"

import {
    currentCVImage,
    mgPortfolioImage,
    oldCVImage,
    hoverImage,
    littleLemonImage,
} from "../../assets"

import {
    Divider,
    DescriptionBlock,
} from "../../components"

import { convert } from "../../utils/muiConverter"

const cards = [
    {
        id: "cvreactportfolio",
        title: "Full-Stack CV",
        keywords: [
            "HTML",
            "CSS",
            "React.js",
            "Express.js",
            "TypeScript",
            "",
        ],
        image: currentCVImage,
        targetLink: "https://react-cv-portfolio.netlify.app/",
        description: `A responsive full-stack portfolio and CV website built to present professional experience,
        technical skills, and project work in a clear and modern format. The focus is on reusable React components,
        TypeScript structure, Express-backed functionality, and a consistent experience across different screen sizes.`,
    },
    {
        id: "restaurantreactportfolio",
        title: "Little Lemon Restaurant",
        keywords: [
            "HTML",
            "CSS",
            "React.js",
            "Express.js",
            "",
            "",
        ],
        image: littleLemonImage,
        targetLink: "https://lemon-restaurant-react.netlify.app/",
        description: `A responsive full-stack restaurant ordering website for the fictional Little Lemon brand,
        built to simulate a complete customer journey from browsing the menu to managing a cart, reserving a table,
        and completing checkout. The focus is on polished responsive design, intuitive navigation, form validation,
        and seamless integration between the React frontend and Express backend.`,
    },
    {
        id: "mgportfolio",
        title: "Jewelry Website UI",
        keywords: [
            "HTML",
            "CSS",
            "Vanilla JS",
        ],
        image: mgPortfolioImage,
        targetLink: "https://mangata-gallo-ecommerce-ui.netlify.app/",
        description: `A responsive e-commerce concept website for the fictional jewelry brand Mangata & Gallo,
        built to simulate a real client project from homepage to product highlights and promotional sections.
        The focus is on clean layout, typography, and a smooth browsing experience across different screen sizes.`,
    },
    {
        id: "cvportfolio",
        title: "Vanilla JS CV",
        keywords: [
            "HTML",
            "CSS",
            "Vanilla JS",
        ],
        image: oldCVImage,
        targetLink: "https://vanilla-js-cv-portfolio.netlify.app/",
        description: `A responsive personal CV and portfolio website built with HTML, CSS, and vanilla JavaScript
        to present professional information and project work without relying on a frontend framework.
        The focus is on semantic structure, straightforward interactions, and a responsive layout across devices.`,
    },
]

const hoverText = "More Info"
const hoverImageSize = "20px"
const cardMaxWidth = "350px"
const cardImageHeight = "207px"
const cardMinimumHeight = "344px"
const expandTime = "0.5s"

const cardHorizontalPadding = 23
const mobilePromptReservedSpace = 124

const stackSize = 3

type KeywordRowProps = {
    row: string[];
}

function KeywordRow({
    row,
}: KeywordRowProps) {
    return (
        <Stack
            direction="row"
            sx={{
                columnGap: convert(10),
                minHeight: "24px",
                flexWrap: "wrap",
            }}
        >
            {row.map((rowItem, index) => {
                return (
                    <Typography
                        key={`${rowItem}-${index}`}
                        variant="bodySmall"
                        component="span"
                        color="text.primary"
                        sx={{
                            textAlign: "start",
                        }}
                    >
                        {rowItem}
                    </Typography>
                )
            })}
        </Stack>
    )
}

export function ProjectsSection() {
    const [expandedCard, setExpandedCard] =
        useState<string | null>(null)

    const theme = useTheme()

    const isBelowMd = useMediaQuery(
        theme.breakpoints.down("md")
    )

    return (
        <Box
            sx={{
                display: "flex",
                width: "100%",
                justifyContent: "flex-start",
            }}
        >
            <Stack
                direction="row"
                sx={{
                    width: "100%",
                    gap: convert(35),
                    flexWrap: "wrap",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                }}
            >
                {cards.map(({
                    id,
                    image,
                    title,
                    keywords,
                    targetLink,
                    description,
                }) => {
                    const rows = []

                    for (
                        let index = 0;
                        index < keywords.length;
                        index += stackSize
                    ) {
                        rows.push(
                            keywords.slice(
                                index,
                                index + stackSize
                            )
                        )
                    }

                    while (rows.length < 2) {
                        rows.push([])
                    }

                    return (
                        <Card
                            key={id}
                            component="article"
                            onFocus={() => {
                                if (!isBelowMd) {
                                    setExpandedCard(id)
                                }
                            }}
                            onBlur={(event) => {
                                if (
                                    !event.currentTarget.contains(
                                        event.relatedTarget
                                    )
                                ) {
                                    setExpandedCard(null)
                                }
                            }}
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",

                                gap: convert(25),

                                overflow: "hidden",

                                width: "100%",
                                maxWidth: cardMaxWidth,
                                minHeight: cardMinimumHeight,

                                pb: convert(11),

                                border: "1px solid",
                                borderColor: "transparent",
                                borderRadius: "13px",

                                textDecoration: "none",
                                bgcolor: "background.default",

                                "&:focus-within": {
                                    borderColor: "#1465B1",
                                },
                            }}
                        >
                            {!isBelowMd ? (
                                <Box
                                    onMouseEnter={() => {
                                        setExpandedCard(id)
                                    }}
                                    onMouseLeave={() => {
                                        setExpandedCard(null)
                                    }}
                                    sx={{
                                        width: "100%",

                                        "&:hover": {
                                            cursor:
                                                expandedCard === id
                                                    ? "auto"
                                                    : "pointer",
                                        },
                                    }}
                                >
                                    <Stack
                                        sx={{
                                            width: "100%",
                                            textDecoration: "none",
                                            color: "text.primary",
                                        }}
                                    >
                                        <Box
                                            component="a"
                                            aria-label={`Open project: ${title}`}
                                            href={targetLink}
                                            target="_blank"
                                            rel="noreferrer"
                                            sx={{
                                                display: "block",
                                                width: "100%",
                                                textDecoration: "none",
                                                color: "inherit",
                                            }}
                                        >
                                            <Box
                                                component="img"
                                                src={image}
                                                alt={title}
                                                decoding="async"
                                                sx={{
                                                    display: "block",
                                                    width: "100%",
                                                    height: cardImageHeight,
                                                    objectFit: "cover",
                                                    objectPosition: "top center",
                                                }}
                                            />
                                        </Box>

                                        {/* MAIN ROW */}
                                        <Stack
                                            direction="row"
                                            justifyContent="center"
                                            alignItems="center"
                                            sx={{
                                                position: "relative",

                                                width:
                                                    expandedCard === id
                                                        ? "200%"
                                                        : "100%",

                                                pt: convert(12),
                                                pb: convert(8),

                                                transition:
                                                    `width ${expandTime} ease-in-out`,
                                            }}
                                        >
                                            {/* BOX LEFT */}
                                            <Stack
                                                alignItems="center"
                                                sx={{
                                                    paddingInline:
                                                        expandedCard === id
                                                            ? 0
                                                            : convert(
                                                                cardHorizontalPadding
                                                            ),

                                                    width: "50%",
                                                    minWidth: "fit-content",
                                                    boxSizing: "content-box",

                                                    transition:
                                                        `padding-inline ${expandTime} ease-in-out`,
                                                }}
                                            >
                                                <Stack
                                                    alignItems="start"
                                                    sx={{
                                                        width:
                                                            expandedCard === id
                                                                ? 0
                                                                : "100%",

                                                        minWidth: "fit-content",

                                                        transition:
                                                            `width ${expandTime} ease-in-out`,
                                                    }}
                                                >
                                                    <Typography
                                                        variant="bodyLarge"
                                                        component="h3"
                                                        color="text.primary"
                                                    >
                                                        {title}
                                                    </Typography>

                                                    <Stack>
                                                        {rows.map((
                                                            rowStack,
                                                            index
                                                        ) => {
                                                            return (
                                                                <KeywordRow
                                                                    key={index}
                                                                    row={rowStack}
                                                                />
                                                            )
                                                        })}
                                                    </Stack>
                                                </Stack>
                                            </Stack>

                                            {/* BOX RIGHT */}
                                            <Stack
                                                sx={{
                                                    position: "relative",
                                                    width: "50%",
                                                    minHeight: "45px",
                                                }}
                                            >
                                                <Stack
                                                    direction="row"
                                                    alignItems="center"
                                                    sx={{
                                                        position: "absolute",
                                                        top: "50%",

                                                        right: convert(180),

                                                        transform:
                                                            "translateY(-50%)",

                                                        overflow: "hidden",
                                                        whiteSpace: "nowrap",

                                                        borderStyle: "dashed",
                                                        borderColor:
                                                            "custom.borderDefault2",

                                                        borderRadius: "8px",
                                                        borderWidth: "1px",

                                                        columnGap: convert(4),

                                                        px: convert(7),
                                                        py: convert(7),

                                                        opacity:
                                                            expandedCard === id
                                                                ? 0
                                                                : 1,

                                                        transition:
                                                            `opacity ${expandTime} ease-in-out`,
                                                    }}
                                                >
                                                    <Typography
                                                        variant="bodySmall"
                                                        component="span"
                                                        color="text.secondary"
                                                    >
                                                        {hoverText}
                                                    </Typography>

                                                    <Box
                                                        component="img"
                                                        src={hoverImage}
                                                        alt=""
                                                        aria-hidden="true"
                                                        decoding="async"
                                                        sx={{
                                                            width:
                                                                hoverImageSize,

                                                            height:
                                                                hoverImageSize,

                                                            objectFit:
                                                                "contain",
                                                        }}
                                                    />
                                                </Stack>
                                            </Stack>
                                        </Stack>

                                        <Box
                                            sx={{
                                                height: "fit-content",
                                                width: "fit-content",
                                            }}
                                        >
                                            <Divider
                                                sx={{
                                                    width: "85.58%",

                                                    maxWidth:
                                                        expandedCard === id
                                                            ? "100%"
                                                            : 0,

                                                    transition:
                                                        `max-width ${expandTime} ease-in-out`,
                                                }}
                                            />

                                            <Stack
                                                id={`project-details-${id}`}
                                                sx={{
                                                    height: "fit-content",
                                                    width: "fit-content",

                                                    pb:
                                                        expandedCard === id
                                                            ? convert(10)
                                                            : 0,

                                                    maxHeight:
                                                        expandedCard === id
                                                            ? "35vh"
                                                            : "0px",

                                                    transition:
                                                        `max-height ${expandTime} ease-in-out, padding ${expandTime} ease-in-out`,

                                                    overflowX: "scroll",
                                                }}
                                            >
                                                <Box
                                                    sx={{
                                                        display: "flex",
                                                        justifyContent:
                                                            "flex-start",
                                                    }}
                                                >
                                                    <DescriptionBlock
                                                        sx={{
                                                            fontWeight: "300",
                                                            px: convert(22),
                                                        }}
                                                    >
                                                        {description}
                                                    </DescriptionBlock>
                                                </Box>
                                            </Stack>
                                        </Box>
                                    </Stack>
                                </Box>
                            ) : (
                                <>
                                    <ButtonBase
                                        aria-expanded={
                                            expandedCard === id
                                        }
                                        aria-controls={
                                            `project-details-${id}`
                                        }
                                        aria-label={`${
                                            expandedCard === id
                                                ? "Collapse"
                                                : "Expand"
                                        } details for ${title}`}
                                        onClick={() => {
                                            setExpandedCard(
                                                expandedCard === id
                                                    ? null
                                                    : id
                                            )
                                        }}
                                        sx={{
                                            display: "block",
                                            width: "100%",
                                            textAlign: "initial",
                                            color: "inherit",
                                            font: "inherit",
                                            fontWeight: "inherit",
                                            letterSpacing: "inherit",
                                        }}
                                    >
                                        <Stack
                                            sx={{
                                                width: "100%",
                                                textDecoration: "none",
                                                color: "text.primary",
                                            }}
                                        >
                                            <Box
                                                component="img"
                                                src={image}
                                                alt={title}
                                                decoding="async"
                                                sx={{
                                                    display: "block",
                                                    width: "100%",
                                                    height: cardImageHeight,
                                                    objectFit: "cover",
                                                    objectPosition: "top center",
                                                }}
                                            />

                                            {/* MOBILE PROJECT INFORMATION */}
                                            <Stack
                                                sx={{
                                                    position: "relative",

                                                    width: "100%",
                                                    minWidth: 0,

                                                    alignItems: "flex-start",

                                                    pl: convert(
                                                        cardHorizontalPadding
                                                    ),

                                                    pr: convert(
                                                        mobilePromptReservedSpace
                                                    ),

                                                    pt: convert(12),
                                                    pb: convert(8),

                                                    boxSizing: "border-box",
                                                }}
                                            >
                                                <Typography
                                                    variant="bodyLarge"
                                                    component="h3"
                                                    color="text.primary"
                                                    sx={{
                                                        width: "100%",
                                                        minWidth: 0,

                                                        overflowWrap:
                                                            "break-word",
                                                    }}
                                                >
                                                    {title}
                                                </Typography>

                                                <Stack
                                                    sx={{
                                                        width: "100%",
                                                        minWidth: 0,
                                                    }}
                                                >
                                                    {rows.map((
                                                        rowStack,
                                                        index
                                                    ) => {
                                                        return (
                                                            <KeywordRow
                                                                key={index}
                                                                row={rowStack}
                                                            />
                                                        )
                                                    })}
                                                </Stack>

                                                <Stack
                                                    direction="row"
                                                    alignItems="center"
                                                    sx={{
                                                        position: "absolute",
                                                        top: "50%",

                                                        right: convert(180),

                                                        transform:
                                                            expandedCard === id
                                                                ? "translate(130%, -50%)"
                                                                : "translate(0, -50%)",

                                                        overflow: "hidden",
                                                        whiteSpace: "nowrap",

                                                        borderStyle: "dashed",
                                                        borderColor:
                                                            "custom.borderDefault2",

                                                        borderRadius: "8px",
                                                        borderWidth: "1px",

                                                        columnGap: convert(4),

                                                        px: convert(7),
                                                        py: convert(7),

                                                        opacity:
                                                            expandedCard === id
                                                                ? 0
                                                                : 1,

                                                        transition: `
                                                            transform ${expandTime} ease-in-out,
                                                            opacity ${expandTime} ease-in-out
                                                        `,
                                                    }}
                                                >
                                                    <Typography
                                                        variant="bodySmall"
                                                        component="span"
                                                        color="text.secondary"
                                                    >
                                                        {hoverText}
                                                    </Typography>

                                                    <Box
                                                        component="img"
                                                        src={hoverImage}
                                                        alt=""
                                                        aria-hidden="true"
                                                        decoding="async"
                                                        sx={{
                                                            width:
                                                                hoverImageSize,

                                                            height:
                                                                hoverImageSize,

                                                            objectFit:
                                                                "contain",
                                                        }}
                                                    />
                                                </Stack>
                                            </Stack>

                                            <Box
                                                sx={{
                                                    height: "fit-content",
                                                    width: "100%",
                                                }}
                                            >
                                                <Divider
                                                    sx={{
                                                        width: "85.58%",

                                                        maxWidth:
                                                            expandedCard === id
                                                                ? "100%"
                                                                : 0,

                                                        transition:
                                                            `max-width ${expandTime} ease-in-out`,
                                                    }}
                                                />

                                                <Stack
                                                    id={`project-details-${id}`}
                                                    sx={{
                                                        height: "fit-content",
                                                        width: "100%",

                                                        pb:
                                                            expandedCard === id
                                                                ? convert(10)
                                                                : 0,

                                                        maxHeight:
                                                            expandedCard === id
                                                                ? "35vh"
                                                                : "0px",

                                                        transition:
                                                            `max-height ${expandTime} ease-in-out, padding ${expandTime} ease-in-out`,

                                                        overflow: "hidden",
                                                    }}
                                                >
                                                    <Box
                                                        sx={{
                                                            display: "flex",
                                                            width: "100%",

                                                            justifyContent:
                                                                "flex-start",
                                                        }}
                                                    >
                                                        <DescriptionBlock
                                                            sx={{
                                                                width: "100%",

                                                                boxSizing:
                                                                    "border-box",

                                                                fontWeight:
                                                                    "300",

                                                                px:
                                                                    convert(22),
                                                            }}
                                                        >
                                                            {description}
                                                        </DescriptionBlock>
                                                    </Box>
                                                </Stack>
                                            </Box>
                                        </Stack>
                                    </ButtonBase>

                                    {expandedCard === id && (
                                        <Box
                                            component="a"
                                            href={targetLink}
                                            target="_blank"
                                            rel="noreferrer"
                                            sx={{
                                                width: "max-content",

                                                border: "2px solid",
                                                borderColor: "white",

                                                px: convert(10),
                                                py: convert(2),

                                                borderRadius: "5px",

                                                textDecoration: "none",
                                                color: "text.primary",

                                                marginBottom: "15px",
                                            }}
                                        >
                                            Visit Page
                                        </Box>
                                    )}
                                </>
                            )}
                        </Card>
                    )
                })}
            </Stack>
        </Box>
    )
}