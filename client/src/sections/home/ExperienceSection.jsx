import { Stack, Typography, List, ListItem } from "@mui/material"
import { convert } from "../../utils/muiConverter"

const title = "Work Experience";

const experienceItems = [
    {
        id: "wtw-analyst",
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
        id: "cognizant-ads",
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
        id: "majorel-ads",
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

function TitleBox({ title, subTitle, sx = {} }) {
    return (
        <Stack direction="column" spacing={convert(4)}>
            <Typography variant="sectionTitle">{title}</Typography>
            <Typography variant="cardTitle">{subTitle}</Typography>
        </Stack>
    )
}

function DateAndLocation({ date, location, sx = {} }) {
    return (
        <Stack direction="column" spacing={convert(1)}>
            <Typography variant="bodyLarge">{date}</Typography>
            <Typography variant="bodyLarge">{location}</Typography>
        </Stack>
    )
}

function Description({ description, sx = {} }) {
    return (
        <ListItem component="li" sx={{
            display: "list-item",
            p: 0,
            m: 0,
            pl: convert(8),
            ...sx,
        }}>
            <Typography variant="bodyLarge" sx={{ fontWeight: 300 }}>
                {description}
            </Typography>
        </ListItem>
    )
}

function ExperienceItem({ title, subTitle, date, location, descriptions }) {
    return (
        <Stack
            sx={{
                textAlign: "left",
                maxWidth: {xs:"400px", md: "100%"},
                flexDirection: {xs: "column", md: "row"},
                rowGap: {xs: convert(25), md: 0}
            }} >


            <Stack direction="column" spacing={convert(10)} sx={{
                minWidth:"max-content",
                pr:convert(80)
            }}>
                <TitleBox title={title} subTitle={subTitle} />
                <DateAndLocation date={date} location={location} />
            </Stack>

            <List component="ul" sx={{
                listStyleType: "disc",
                p:0,
                pl: convert(15),
            }}>
                {descriptions.map(description => {
                    return <Description key={description} description={description} />
                })}
            </List>


        </Stack>
    )
}

export function ExperienceSection() {
    return (
        <Stack component="section" direction="column"
            sx={{

                flexWrap: "wrap",
                width:"100%",
                columnGap: {xs: 0, md: convert(66)},
                rowGap: {xs: convert(66), md: convert(66)},
                justifyContent: {xs: "center", md: "space-between"},
                alignItems: "center",
                px: {xs: 0, md: convert(50)},
            }}>
            {experienceItems.map(({ id, title, subTitle, date, location, descriptions }) => {
                return (
                    <ExperienceItem key={id} title={title} subTitle={subTitle} date={date} location={location} descriptions={descriptions} />
                )
            })}
        </Stack>
    )
} 