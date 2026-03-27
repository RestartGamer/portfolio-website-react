import { useState } from "react"
import { linkedInIcon, fbIcon, instaIcon, hamburgerMenuDark } from "../assets"
import { Stack, Box, Button, Typography, ButtonBase } from "@mui/material"
import { useNavigate } from "react-router-dom"



const socialMedia = [
    { id: "linkedIn", url: "https://www.linkedin.com/in/can-korkmaz/", source: linkedInIcon },
    { id: "facebook", url: "https://www.facebook.com/ckckorkmaz", source: fbIcon },
    { id: "instagram", url: "https://www.instagram.com/", source: instaIcon },
]

const options = [
    { name: "Home", route: "/" },
    { name: "Journey", route: "/myjourney" },
    { name: "UX UI", route: "/uxwireframing" },
]

const iconSize = 56; //note: numeric values in sx for width and height are treated as pixels
const hamMenuSize = 53;


const convert = (px) => px / 8;




function DropdownMenu({ isMenuOpen, handleNavigate }) {
    return (
        <Box
            sx={{
                position: "absolute",
                top: "100%",
                right: "0",
                overflow: "hidden",
                pointerEvents: isMenuOpen ? "auto" : "none",
            }}>
            <Stack direction="column"
                sx={{

                    overflow: "hidden",

                    borderRadius: "0 0 0 70px",
                    borderTop: "2px solid #1465B1",
                    borderBottom: "2px solid #1465B1",
                    borderLeft: "2px solid #1465B1",
                    bgcolor: "#252525",

                    px: convert(60),
                    py: convert(66),

                    boxShadow: isMenuOpen ? "0 4px 4px 0 rgba(0, 0, 0, 0.25)" : "none",

                    transformOrigin: "right",
                    transform: isMenuOpen ? "translateX(0%)" : "translateX(100%)",

                    transition: "transform 250ms ease-in-out",
                }}>
                <Stack direction="column" alignItems="center" spacing={convert(28.28)}>
                    {options.map(({ name, route }) => {
                        return (
                            <ButtonBase key={name} onClick={() => handleNavigate(route)}

                                sx={{
                                    display: "inline-flex",
                                    justifyContent: "center",
                                    textDecoration: "none",
                                    color: "text.primary",
                                    border: "0.661px solid",
                                    borderColor: "custom.borderDefault",
                                    borderRadius: "7px",
                                    px: convert(40),
                                    py: convert(1),

                                    width: "100%",
                                }}>
                                <Typography variant="bodyLarge" sx={{
                                    width: "max-content",
                                }}>
                                
                                    {name}
                                </Typography>
                            </ButtonBase>
                        )
                    })}
                </Stack>
            </Stack >
        </Box>
    )
}

function SocialIconLink({ id, url, source }) {
    return (
        <Box
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

            <Box component="img" alt={id} src={source} sx={{
                width: "100%",
                height: "100%"
            }} />


        </Box>
    )

}

export function Navbar() {
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    function handleNavigate(route) {
        navigate(route);
        setIsMenuOpen(false);
    }
    return (
        <Stack direction="column" sx={{
            width: "100%",
            position: "sticky",
            top: 0,
            zIndex: 1000,
        }}>
            <Stack direction="row" spacing={convert(27)}
                sx={{
                    justifyContent: "space-between",
                    alignItems: "center",
                    py: convert(32),
                    px: convert(27),
                    bgcolor: "#252525",
                }}
            >


                <Stack direction="row" spacing={convert(27)} sx={{ alignItems: "center" }}>
                    {socialMedia.map(({ id, url, source }) => {
                        return (
                            <SocialIconLink key={id} id={id} url={url} source={source} />
                        )
                    })}
                </Stack>



                <Box sx={{ position: "relative" }}>
                    <Button
                        onClick={() => setIsMenuOpen(prev => !prev)}
                        aria-label="Open navigation menu"
                        aria-expanded={isMenuOpen}
                        aria-haspopup="true"
                        sx={{
                            display: "inline-flex"
                        }}>
                        <Box
                            component="img"
                            src={hamburgerMenuDark}
                            sx={{
                                width: hamMenuSize,
                                objectFit: "fill",
                            }}>

                        </Box>
                    </Button>
                    <DropdownMenu isMenuOpen={isMenuOpen} handleNavigate={handleNavigate} />
                </Box>
            </Stack>
        </Stack >
    )
}