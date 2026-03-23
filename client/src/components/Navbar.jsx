import { useState } from "react"
import { linkedInIcon, fbIcon, instaIcon, hamburgerMenuDark } from "../assets"
import { Stack, Box, Button, Typography, ButtonBase } from "@mui/material"

const socialMedia = [
    { name: "linkedIn", url: "https://www.linkedin.com/in/can-korkmaz/", source: linkedInIcon },
    { name: "facebook", url: "https://www.facebook.com/ckckorkmaz", source: fbIcon },
    { name: "instagram", url: "https://www.instagram.com/", source: instaIcon },
]

const options = ["About", "Stack", "Projects"]

const convert = (px) => px / 8;

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
                pointerEvents: menu ? "auto" : "none",
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

                    px: convert(27),
                    py: convert(66),

                    boxShadow: menu ? "0 4px 4px 0 rgba(0, 0, 0, 0.25)" : "none",

                    transformOrigin: "right",
                    transform: menu ? "translateX(0%)" : "translateX(100%)",

                    transition: "transform 250ms ease-in-out",
                }}>
                <Stack direction="column" spacing={convert(28.28)}
                    sx={{
                        width: "fit-content",
                        height: "fit-content"
                    }}>
                    {options.map(option => {
                        return (
                            <ButtonBase key={option} component="a" href="#"

                                sx={{
                                    display: "inline-flex",
                                    justifyContent: "center",
                                    textDecoration: "none",
                                    color: "text.primary",
                                    border: "0.661px solid",
                                    borderColor: "custom.borderDefault",
                                    borderRadius: "10.58px",
                                    px: convert(25),
                                    py: convert(1),


                                }}>
                                <Typography variant="cardTitle">
                                    {option}
                                </Typography>
                            </ButtonBase>
                        )
                    })}
                </Stack>
            </Stack >
        </Box>
    )
}



export function Navbar() {
    const [menu, setMenu] = useState(false)
    const iconSize = 56; //note: numeric values in sx for width and height are treated as pixels
    const hamMenuSize = 53;

    return (
        <Stack direction="column" sx={{
            width:"100%",
            position: "sticky",
            top: 0,
            zIndex: 1000,

        }}>
            <Stack direction="row" spacing={convert(89)}
                sx={{

                    justifyContent: "center",
                    alignItems: "center",
                    py: convert(32),
                    px: convert(27),
                    bgcolor: "#252525",

                }}>
                <Stack direction="row" spacing={convert(27)} sx={{ alignItems: "center" }}>
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
                                    },
                                    transition: "transform 300ms ease-in-out"

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


        </Stack >
    )
}