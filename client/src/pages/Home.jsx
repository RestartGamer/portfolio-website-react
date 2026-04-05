import { CssBaseline, Box, Stack, Typography } from "@mui/material";
import { Title, Navbar, DescriptionBlock, Divider, ContactForm } from "../components"
import { ExperienceSection, EducationSection, ProjectsSection, HeroSection, SectionStack } from "../sections"
import { convert } from "../utils/muiConverter"

const profileDescription = `Hi, I’m Can.\n
I’m a junior Frontend developer focused on
building modern web applications with React and TypeScript. \n
I have a background in IT support and multilingual communication(English, German, Portuguese).\n
I’m particularly interested in building clean, performant,and scalable user interfaces.`

const heroTitle = "Can Korkmaz";
const heroSubTitle = "Front-End Developer in Lisbon";
const heroTitleSpacing = {xs: convert(90), md: convert(90)};
const titleSpacing = { xs: convert(48), md: convert(70)}
const sectionSpacing = convert(120)

function PageSection({ children }) {
    return (
        <Stack alignItems="center"
            sx={{
                width: { xs: "auto", md: "100%" },
                gap: { xs: "58px", md: sectionSpacing },
                px: {xs: convert(40), md: convert(50)},
                pt: {xs: convert(80), md: convert(80)}
            }}
        >
            {children}
        </Stack>
    );
}

export function Home() {
    return (

        <Stack direction="column" alignItems="center" sx={{

            paddingBottom: convert(100),
            gap: { xs: "10px", md: "10px" },
            width: "100%",
            position: "relative",
        }}>
            <Navbar />
                <PageSection>
                    

                    <Stack alignItems="center" spacing={heroTitleSpacing}>
                        <Title title={heroTitle} subTitle={heroSubTitle} sx={{ alignItems: "center" }}>
                            <Typography variant="sectionTitle" sx={{
                                fontFamily: `"EB Garamond", serif`,
                                fontWeight: "400",
                            }}>
                                {heroSubTitle}
                            </Typography >
                        </Title>

                        <Stack direction="row" alignItems="center" justifyContent="center"
                            sx={{
                                width: "100%",
                                flexWrap: "wrap",
                                gap: convert(60),
                            }}>

                            <HeroSection />
                            <DescriptionBlock >{profileDescription}</DescriptionBlock>
                        </Stack>
                    </Stack>


                    <Stack direction="row" justifyContent="center" sx={{
                        flexWrap: "wrap",
                        gap: {xs: convert(120), md: convert(200)},
                    }}>
                        <Stack spacing={titleSpacing}>
                            <Title title="My Stack" variant="headingTitle" />
                            <SectionStack />
                        </Stack>
                        <Stack spacing={titleSpacing}>
                            <Title title="Education" variant="headingTitle" />
                            <EducationSection />
                        </Stack>
                    </Stack>

                    <Stack spacing={titleSpacing} sx={{width:"100%"}}>
                        <Title title="My Projects" variant="headingTitle" />
                        <ProjectsSection />
                    </Stack>

                    <Stack spacing={titleSpacing} sx={{width:"100%"}}>
                        <Title title="Work Experience" variant="headingTitle" />
                        <ExperienceSection />
                    </Stack>

                    <Stack spacing={titleSpacing} sx={{width:"100%"}}>
                        <Title title="Contact Me" variant="headingTitle" />
                        <ContactForm />
                    </Stack>

                </PageSection>

        </Stack>

    )
}

