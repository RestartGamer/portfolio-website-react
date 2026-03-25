import { useState, useRef } from "react"
import { Stack, Box, Button, Typography, Card, List, ListItem, ListItemText } from "@mui/material"
import { currentCVImage, mgPortfolioImage, oldCVImage, cardUIDecoration } from "../assets"
import { Divider, TextOnly } from "."

const convert = (px) => px / 8;
const title = "Work Experience";

const contents = [
    {
        title: "Technology Support Analyst",
        subTitle: "WTW - Full-time",
        date: "Mar 2024 - Present",
        location: "Lisbon, Portugal",
        descriptions: ["Account administration: new user requests, leaver requests, password requests etc.",
            "Address user concerns regarding hardware, software, and networking.",
            " Coordinates with L2/other support teams when applicable.",
            "Handles Special Projects as applicable and processes Software Installation Requests."
        ]
    },
    {
        title: "Google Ads Optimization",
        subTitle: "Cognizant - Full-time",
        date: "Jan 2022 - Oct 2023",
        location: "Lisbon, Portugal",
        descriptions: [`Executing optimization tasks for Google LCS accounts within the Search Network by presenting strategies to account managers:
             CTR, CPA, ROAS, keyword expansions, bid adjustment, budget management etc.) following the industry's best practices and policies`,
            "Conduct market research by analyzing industry trends, consumer demographics and competitor activities to improve marketing strategy."
        ]
    },
    {
        title: "Google Ads Optimization",
        subTitle: "Majorel Portugal · Full-time",
        date: "Aug 2020 – Oct 2021",
        location: "Lisbon, Portugal",
        descriptions: [`Handled in- and outbound phone calls, live chat, and email support for Google Ads /
             Google Ad Manager in German, helping advertisers resolve account and campaign issues.`,
            `Implemented and adjusted predefined campaign settings (bids, budgets, targeting, and formats) in line with internal workflows and Google policies.`,
            `Wrote and adapted ad texts and coordinated basic visual presentation to improve clarity, relevance, and alignment with brand and policy guidelines.`
        ]
    }
]

function TitleBox({ title, subTitle }, sx = {}) {
    return (
        <Stack direction="column" spacing={convert(4)}>
            <Typography variant="sectionTitle">{title}</Typography>
            <Typography variant="cardTitle">{subTitle}</Typography>
        </Stack>
    )
}

function DateAndLocation({ date, location }, sx = {}) {
    return (
        <Stack direction="column" spacing={convert(1)}>
            <Typography variant="bodyLarge">{date}</Typography>
            <Typography variant="bodyLarge">{location}</Typography>
        </Stack>
    )
}

function Description({ description }, sx = {}) {
    return (
        <ListItem component="li" sx={{
            display: "list-item",
            p:0,
            m:0,
            pl:convert(8),
            ...sx,
        }}>
            <Typography variant="bodyLarge" sx={{ fontWeight: "300" }}>
                {description}
            </Typography>
        </ListItem>
    )
}

export function ExperienceSection() {
    return (
        <Stack component="section" direction="column" spacing={convert(66)} sx={{
            width: "100%",
            px: convert(14),
        }}>
            <Typography variant="headingTitle">{title}</Typography>
            {contents.map(({ title, subTitle, date, location, descriptions }) => {
                return (
                    <Stack direction="column" key={title} spacing={convert(25)}
                    sx={{ textAlign: "left" }} >
                        <Stack direction="column" spacing={convert(10)}>
                            <TitleBox title={title} subTitle={subTitle} />
                            <DateAndLocation date={date} location={location} />
                        </Stack>

                        <List component="ul" sx={{
                            listStyleType: "disc",
                            pl: convert(15),
                        }}>
                            {descriptions.map(description => {
                                return <Description description={description} />
                            })}
                        </List>
                    </Stack>
                )
            })}

        </Stack>
    )
} 