import { Stack, Typography } from "@mui/material"
import { convert } from "../../utils/muiConverter"


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

type EducationItemProps = {
  title: string;
  subTitle: string;
  description: string;
};

function EducationItem({ title, subTitle, description }: EducationItemProps) {
    return (
        <Stack direction="column" spacing={convert(20)} sx={{ textAlign: "left" }}>
            <Stack direction="column" spacing={convert(5)}>
                <Typography variant="cardTitle" >
                    {title}
                </Typography>
                <Typography variant="bodyLarge">
                    {subTitle}
                </Typography>
            </Stack>
            <Typography variant="bodyLarge" sx={{ fontWeight: 300 }} >
                {description}
            </Typography>
        </Stack>
    )
}

export function EducationSection() {
    return (
        <Stack direction="column" spacing={convert(48)} sx={{width:"100%"}}>
            <Stack direction="column" spacing={convert(41)}>
                {content.map(({ title, subTitle, description }) => {
                    return (
                        <EducationItem key={title} title={title} subTitle={subTitle} description={description} />
                    )
                })}
            </Stack>
        </Stack>
    )
}
