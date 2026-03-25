import { CssBaseline, Box, Stack } from "@mui/material";
import { Navbar, Landing, TextOnly, SectionStack, EducationSection, ProjectsSection, Divider, ExperienceSection, ContactForm } from "../components"
const convert = (px) => px / 8;

const profileDescription = `Hi, I’m Can.\n
I’m a junior Frontend developer focused on
building modern web applications with React and TypeScript. \n
I have a background in IT support and multilingual communication(English, German, Portuguese).\n
I’m particularly interested in building clean, performant,and scalable user interfaces.`

export function Home() {
    return (

        <Stack direction="column" alignItems="center" sx={{

            pb: convert(100),
            gap: { xs: "10px", md: "10px" },
            height: "100%",
            position: "relative",
        }}>
            <Navbar />


            <Stack direction="column" alignItems="center" sx={{

                gap: { xs: "58px", md: "120px" },
                height: "100%",
            }}>
                <Divider />
                <Landing />
                <TextOnly>{profileDescription}</TextOnly>
                <SectionStack />
                <EducationSection />
                <ProjectsSection />
                <ExperienceSection />
                <ContactForm />
            </Stack>
        </Stack>

    )
}

