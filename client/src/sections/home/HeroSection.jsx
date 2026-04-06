
import { Stack, Box } from "@mui/material"
import { convert } from "../../utils/muiConverter"
import { DescriptionBlock } from "../../components"

const maxWidth = "420px";



export function HeroSection({ children, avatarImage, avatarSize, isImgLeft=true }) {

    return (
        <Stack direction="row" alignItems="center" justifyContent="center"
            sx={{
                width: "100%",
                flexWrap: "wrap",
                gap: convert(60),
            }}>

            {isImgLeft ? (
                <>
                    <Box component="img" src={avatarImage} alt="Profile Image"
                        sx={{
                            width: avatarSize,
                            maxWidth: maxWidth,
                            height: "auto",
                            borderRadius: "22px",
                        }} />
                    <DescriptionBlock>
                        {children}
                    </DescriptionBlock>
                </>

            ) :
                (
                    <>
                        <DescriptionBlock>
                            {children}
                        </DescriptionBlock>
                        <Box component="img" src={avatarImage} alt="Profile Image"
                            sx={{
                                width: avatarSize,
                                height: "auto",
                                borderRadius: "22px",
                            }} />
                    </>
                )
            }
        </Stack>

    )
}