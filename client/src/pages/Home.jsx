import { Stack } from "@mui/material";
import { TitleBlock, ContactForm } from "../components"
import { ExperienceSection, EducationSection, ProjectsSection, HeroSection, SectionStack, ContentSection} from "../sections"
import { avatarImage } from "../assets"
import { pageLayout } from "../layout/layout.js"

const {
    sectionTitleSpacing,
    sectionSpacing,
} = pageLayout;

const profileDescription = `Hi, I’m Can.\n
I’m a junior Frontend developer focused on
building modern web applications with React and TypeScript. \n
I have a background in IT support and multilingual communication(English, German, Portuguese).\n
I’m particularly interested in building clean, performant,and scalable user interfaces.`

const heroTitle = "Can Korkmaz";
const heroSubTitle = "Front-End Developer in Lisbon";

const avatarSize = "354px";


export function Home() {
    return (

        <>

            <TitleBlock title={heroTitle}>
                {heroSubTitle}
            </TitleBlock>

            <ContentSection>
                <HeroSection image={avatarImage} isImgLeft={true}>
                    {profileDescription}
                </HeroSection>


                <Stack direction="row" justifyContent="center" sx={{
                    width: "100%",
                    flexWrap: "wrap",
                    gap: sectionSpacing,
                }}>
                    <Stack spacing={sectionTitleSpacing}>
                        <TitleBlock title="My Stack" variant="headingTitle" />
                        <SectionStack />
                    </Stack>
                    <Stack spacing={sectionTitleSpacing}>
                        <TitleBlock title="Education" variant="headingTitle" />
                        <EducationSection />
                    </Stack>
                </Stack>

                <Stack spacing={sectionTitleSpacing} sx={{ width: "100%" }}>
                    <TitleBlock title="My Projects" variant="headingTitle" />
                    <ProjectsSection />
                </Stack>

                <Stack spacing={sectionTitleSpacing} sx={{ width: "100%" }}>
                    <TitleBlock title="Work Experience" variant="headingTitle" />
                    <ExperienceSection />
                </Stack>

                <Stack spacing={sectionTitleSpacing} sx={{ width: "100%" }}>
                    <TitleBlock title="Contact Me" variant="headingTitle" />
                    <ContactForm />
                </Stack>

            </ContentSection>
        </>

    )
}

