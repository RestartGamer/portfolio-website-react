import { TitleBlock } from "../components"
import { HeroSection, ContentSection } from "../sections"

import { pathwayImage } from "../assets"

const title = "My Journey"
const subTitle = "From IT to Web-Development"

const description = `I believe the road to success isn’t always linear, but that’s what creates authenticity.\n
Throughout my journey in IT Support, I became increasingly drawn to the creative side of technology.\n
So I started learning about the basics of web design, and deepened my knowledge, to the point of building
 products that aim to be intuitive, meaningful and, most of all, human.`



export function MyJourney() {
    return (
        <>

            <TitleBlock title={title} variant="heroTitle">
                {subTitle}
            </TitleBlock>

            <ContentSection>
                <HeroSection image={pathwayImage} isImgLeft={false} imageSx={{
                    maxWidth: "500px",
                }}>
                    {description}
                </HeroSection>
            </ContentSection>
        </>
    )
}