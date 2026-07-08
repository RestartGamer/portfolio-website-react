import { List, ListItem, Stack, Typography } from "@mui/material"
import type { SxProps, Theme } from "@mui/material/styles"

import { convert } from "../../utils/muiConverter"

const experienceItems = [
    {
        id: "wtw-analyst",
        title: "Technology Support Analyst",
        subTitle: "WTW - Full-time",
        date: "Mar 2024 - Present",
        location: "Lisbon, Portugal",
        descriptions: [
            "Account administration: new user requests, leaver requests, password requests, etc.",
            "Address user concerns regarding hardware, software, and networking.",
            "Coordinates with L2 and other support teams when applicable.",
            "Handles special projects as applicable and processes software installation requests.",
        ],
    },
    {
        id: "cognizant-ads",
        title: "Google Ads Optimization",
        subTitle: "Cognizant - Full-time",
        date: "Jan 2022 - Oct 2023",
        location: "Lisbon, Portugal",
        descriptions: [
            "Executed optimization tasks for Google LCS accounts within the Search Network by presenting strategies to account managers, including CTR, CPA, ROAS, keyword expansion, bid adjustments, and budget management, following industry best practices and policies.",
            "Conducted market research by analyzing industry trends, consumer demographics, and competitor activity to improve marketing strategy.",
        ],
    },
    {
        id: "majorel-ads",
        title: "Google Ads Optimization",
        subTitle: "Majorel Portugal · Full-time",
        date: "Aug 2020 – Oct 2021",
        location: "Lisbon, Portugal",
        descriptions: [
            "Handled inbound and outbound phone calls, live chat, and email support for Google Ads and Google Ad Manager in German, helping advertisers resolve account and campaign issues.",
            "Implemented and adjusted predefined campaign settings, including bids, budgets, targeting, and formats, in line with internal workflows and Google policies.",
            "Wrote and adapted ad text and coordinated basic visual presentation to improve clarity, relevance, and alignment with brand and policy guidelines.",
        ],
    },
]

type TitleBoxProps = {
    title: string;
    subTitle: string;
}

function TitleBox({ title, subTitle }: TitleBoxProps) {
    return (
        <Stack direction="column" spacing={convert(4)}>
            <Typography variant="sectionTitle">{title}</Typography>
            <Typography variant="cardTitle">{subTitle}</Typography>
        </Stack>
    )
}

type DateAndLocationProps = {
    date: string;
    location: string;
}

function DateAndLocation({ date, location }: DateAndLocationProps) {
    return (
        <Stack direction="column" spacing={convert(1)}>
            <Typography variant="bodyLarge">{date}</Typography>
            <Typography variant="bodyLarge">{location}</Typography>
        </Stack>
    )
}

type DescriptionProps = {
    description: string;
    sx?: SxProps<Theme>;
}

function Description({ description, sx = {} }: DescriptionProps) {
    return (
        <ListItem
            component="li"
            sx={{
                display: "list-item",
                p: 0,
                pl: convert(22),
                ...sx,
            }}
        >
            <Typography variant="bodyLarge" sx={{ fontWeight: 300 }}>
                {description}
            </Typography>
        </ListItem>
    )
}

type ExperienceItemProps = {
    title: string;
    subTitle: string;
    date: string;
    location: string;
    descriptions: string[];
}

function ExperienceItem({
    title,
    subTitle,
    date,
    location,
    descriptions,
}: ExperienceItemProps) {
    return (
        <Stack
            sx={{
                display: { xs: "flex", md: "grid" },
                flexDirection: "column",
                gridTemplateColumns: {
                    md: "minmax(240px, 0.8fr) minmax(0, 1.2fr)",
                },
                columnGap: { md: convert(48) },
                rowGap: { xs: convert(24) },
                alignItems: "start",
                width: "100%",
                textAlign: "left",
            }}
        >
            <Stack
                direction="column"
                spacing={convert(10)}
                sx={{
                    width: "100%",
                    minWidth: 0,
                }}
            >
                <TitleBox title={title} subTitle={subTitle} />
                <DateAndLocation date={date} location={location} />
            </Stack>

            <List
                component="ul"
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: convert(10),
                    width: "100%",
                    minWidth: 0,
                    listStyleType: "disc",
                    p: 0,
                    m: 0,
                }}
            >
                {descriptions.map((description) => (
                    <Description
                        key={description}
                        description={description}
                    />
                ))}
            </List>
        </Stack>
    )
}

export function ExperienceSection() {
    return (
        <Stack
            component="section"
            direction="column"
            sx={{
                width: "100%",
                maxWidth: "1200px",
                mx: "auto",
                rowGap: convert(66),
                alignItems: "center",
                px: { xs: 0, md: convert(50) },
                boxSizing: "border-box",
            }}
        >
            {experienceItems.map(({
                id,
                title,
                subTitle,
                date,
                location,
                descriptions,
            }) => (
                <ExperienceItem
                    key={id}
                    title={title}
                    subTitle={subTitle}
                    date={date}
                    location={location}
                    descriptions={descriptions}
                />
            ))}
        </Stack>
    )
}
