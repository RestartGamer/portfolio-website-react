import { useState } from "react"
import imageOutput from "../assets"
import { Stack, Box, Button } from "@mui/material"

const {
    linkedInIcon: linkedInImage,
    fbIcon: facebookImage,
    instaIcon: instagramImage,
    hamburgerMenu,
    hamburgerMenuDark
} = imageOutput;

const socialMedia = [
    { name: "linkedIn", url: "https://www.linkedin.com/in/can-korkmaz/", source: linkedInImage },
    { name: "facebook", url: "https://www.facebook.com/ckckorkmaz", source: facebookImage },
    { name: "instagram", url: "https://www.instagram.com/", source: instagramImage },
]

const options = ["About", "Stack", "Projects"]

const pxToMui = (px) => px / 8;

function DropdownMenu({ menu }) {

    return (
        <Box
            sx={{
                position: "absolute",
                top: "100%",
                right: "0",
                overflow: "hidden",
                width: "fit-content",
                height: "fit-content",
            }}>
            <Stack direction="column"
                sx={{

                    overflow: "hidden",

                    borderRadius: "0 0 0 70px",
                    borderTop: "2px solid #1465B1",
                    borderBottom: "2px solid #1465B1",
                    borderLeft: "2px solid #1465B1",
                    bgcolor: "#252525",

                    width: "fit-content",
                    height: "fit-content",

                    px: pxToMui(27),
                    py: pxToMui(66),

                    boxShadow: menu ? "0 4px 4px 0 rgba(0, 0, 0, 0.25)" : "none",

                    transformOrigin: "right",
                    transform: menu ? "translateX(0%)" : "translateX(100%)",

                    transition: "transform 1s ease-in-out",
                }}>
                <Stack direction="column" spacing={pxToMui(28.28)}
                    sx={{
                        width: "fit-content",
                        height: "fit-content"
                    }}>
                    {options.map(option => {
                        return (
                            <Box key={option} component="a" href="#"
                                sx={{
                                    display: "inline-flex",
                                    justifyContent: "center",
                                    textDecoration: "none",
                                    color: "text.primary",
                                    border: "0.661px solid",
                                    borderColor: "custom.borderDefault"
                                }}>
                                {option}
                            </Box>
                        )
                    })}
                </Stack>
            </Stack >
        </Box>
    )
}



export default function Navbar() {
    const [menu, setMenu] = useState(false)
    const iconSize = 56; //note: numeric values in sx for width and height are treated as pixels
    const hamMenuSize = 53;

    return (
        <Stack direction="column"
        >
            <Stack direction="row" spacing={pxToMui(89)}
                sx={{
                    justifyContent: "center",
                    alignItems: "center",
                    py: pxToMui(32),
                    px: pxToMui(27),
                    position: "relative"

                }}>
                <Stack direction="row" spacing={pxToMui(27)} sx={{ alignItems: "center" }}>
                    {socialMedia.map(({ name, url, source }) => {
                        return (
                            <Box
                                key={name}
                                component="a"
                                href={url}
                                target="_blank"
                                rel="noreferrer"
                                sx={{
                                    display: "inline-flex",
                                    width: iconSize,
                                    transform: "scale(1)",
                                    "&:hover": {
                                        transform: "scale(1.1)",
                                    }

                                }}>
                                <Box component="img" key={name} alt={name} src={source} sx={{
                                    width: "100%",
                                    height: "100%"
                                }}>
                                </Box>
                            </Box>
                        )
                    })}
                </Stack>
                <Button
                    onClick={() => setMenu(prev => !prev)}
                    aria-label="Open navigation menu"
                    aria-expanded={menu}
                    aria-haspopup="true"
                    sx={{
                        display: "inline-flex"
                    }}>
                    <Box
                        component="img"
                        src={hamburgerMenuDark}
                        alt="Menu Button"
                        sx={{
                            width: hamMenuSize,
                            objectFit: "fill",
                        }}>

                    </Box>
                </Button>
                <DropdownMenu menu={menu} />



            </Stack>
            <hr style={{ width: "85.58%", borderWidth: 1 }}></hr>

        </Stack>
    )
}