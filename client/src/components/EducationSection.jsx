import { Stack, Box, Button, Typography } from "@mui/material"

const convert = (px) => px / 8;

const title="Education";

const content = [
    {
        title: "Meta Front-End Developer Professional Certificate",
        subTitle: "Coursera",
        description: "Focus: React, JavaScript, UI development, responsive design",
    },
    {
        title: "Electronics Engineering",
        subTitle: "IPS - Instituto Politécnico de Setúbal",
        description: "Focus: Electronics, digital systems and analytical problem-solving",
    }
]


export function SectionEducation() {
    return (
        <Stack direction="column" spacing={convert(48)} sx={{
            px: convert(35),
        }}>
            <Typography variant="headingTitle">{title}</Typography>
            <Stack direction="column" spacing={convert(41)}>
                {content.map(({ title, subTitle, description }) => {
                    return (
                        <Stack direction="column" key={title} spacing={convert(20)}>
                            <Stack direction="column" spacing={convert(5)}>
                                <Typography variant="cardTitle" sx={{textAlign:"left"}}>
                                    {title}
                                </Typography>
                                <Typography variant="bodyLarge" sx={{textAlign:"left"}}>
                                    {subTitle}
                                </Typography>
                            </Stack>
                            <Typography variant="bodyLarge" sx={{ fontWeight: "300", textAlign:"left" }} >
                                {description}
                            </Typography>
                        </Stack>
                    )
                })}
            </Stack>
        </Stack>
    )
}