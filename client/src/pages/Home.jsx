import { CssBaseline, Box, Stack, Typography } from "@mui/material";
import { TitleBlock, Navbar, DescriptionBlock, Divider, ContactForm } from "../components"
import { ExperienceSection, EducationSection, ProjectsSection, HeroSection, SectionStack } from "../sections"
import { convert } from "../utils/muiConverter"
import { avatarImage } from "../assets"

const profileDescription = `Hi, I’m Can.\n
I’m a junior Frontend developer focused on
building modern web applications with React and TypeScript. \n
I have a background in IT support and multilingual communication(English, German, Portuguese).\n
I’m particularly interested in building clean, performant,and scalable user interfaces.`

const heroTitle = "Can Korkmaz";
const heroSubTitle = "Front-End Developer in Lisbon";
const heroTitleSpacing = { xs: convert(90), md: convert(90) };
const titleSpacing = { xs: convert(48), md: convert(70) }
const sectionSpacing = convert(120)

const avatarSize = "354px";

function PageSection({ children }) {
    return (
        <Stack alignItems="center"
            sx={{
                width: { xs: "auto", md: "100%" },
                gap: { xs: "58px", md: sectionSpacing },
                px: { xs: convert(40), md: convert(50) },
                pt: { xs: convert(80), md: convert(80) }
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
            <PageSection>


                <Stack alignItems="center" spacing={heroTitleSpacing}>
                    <TitleBlock title={heroTitle} subTitle={heroSubTitle} sx={{ alignItems: "center" }}>
                        {heroSubTitle}
                    </TitleBlock>

                    <HeroSection avatarImage={avatarImage} avatarSize={avatarSize}>
                                {profileDescription}
                    </HeroSection>
                </Stack>


                <Stack direction="row" justifyContent="center" sx={{
                    flexWrap: "wrap",
                    gap: { xs: convert(120), md: convert(200) },
                }}>
                    <Stack spacing={titleSpacing}>
                        <TitleBlock title="My Stack" variant="headingTitle" />
                        <SectionStack />
                    </Stack>
                    <Stack spacing={titleSpacing}>
                        <TitleBlock title="Education" variant="headingTitle" />
                        <EducationSection />
                    </Stack>
                </Stack>

                <Stack spacing={titleSpacing} sx={{ width: "100%" }}>
                    <TitleBlock title="My Projects" variant="headingTitle" />
                    <ProjectsSection />
                </Stack>

                <Stack spacing={titleSpacing} sx={{ width: "100%" }}>
                    <TitleBlock title="Work Experience" variant="headingTitle" />
                    <ExperienceSection />
                </Stack>

                <Stack spacing={titleSpacing} sx={{ width: "100%" }}>
                    <TitleBlock title="Contact Me" variant="headingTitle" />
                    <ContactForm />
                </Stack>

            </PageSection>

        </Stack>

    )
}

