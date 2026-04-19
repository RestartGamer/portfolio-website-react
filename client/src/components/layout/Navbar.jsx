import { useState, useRef, useEffect } from "react"
import { linkedInIcon, fbIcon, instaIcon, hamburgerMenuDark, hamburgerMenuLight, githubIconDarkMode, githubIconLightMode } from "../../assets"
import { Stack, Box, Button, Typography, ButtonBase, useMediaQuery, useTheme } from "@mui/material"
import { useNavigate, Link as RouteLink } from "react-router-dom"
import { convert } from "../../utils/muiConverter"
import { ThemeButton } from "../"

const socialMedia = [
    { id: "linkedIn", url: "https://www.linkedin.com/in/can-korkmaz/", source: linkedInIcon },
    { id: "facebook", url: "https://www.facebook.com/ckckorkmaz", source: fbIcon },
    { id: "instagram", url: "https://www.instagram.com/", source: instaIcon },
    { id: "github", url: "https://github.com/RestartGamer", source: githubIconDarkMode, sourceLight: githubIconLightMode },
]

const options = [
    { name: "Home", route: "/" },
    { name: "Journey", route: "/myjourney" },
    { name: "UX UI", route: "/uxwireframing" },
]

const iconSize = 56; //note: numeric values in sx for width and height are treated as pixels
const hamMenuSize = 53;





function DropdownMenu({ isMenuOpen, setTheme, useReference, setIsMenuOpen }) {
    return (
        <Box ref={useReference}
            sx={{
                position: "absolute",
                top: "100%",
                right: "-40%",
                overflow: "hidden",
                pointerEvents: isMenuOpen ? "auto" : "none",
                pb: convert(1),
            }}>
            <Stack direction="column"
                sx={{

                    overflow: "hidden",

                    borderRadius: "0 0 0 70px",
                    borderTop: "2px solid #1465B1",
                    borderBottom: "2px solid #1465B1",
                    borderLeft: "2px solid #1465B1",
                    bgcolor: "background.default",

                    px: convert(60),
                    py: convert(66),

                    boxShadow: isMenuOpen ? "0 4px 4px 0 rgba(0, 0, 0, 0.25)" : "none",

                    transformOrigin: "right",
                    transform: isMenuOpen ? "translateX(0%)" : "translateX(100%)",

                    transition: "transform 250ms ease-in-out",
                }}>
                <Stack direction="column" alignItems="center" spacing={convert(28.28)}>
                    <ThemeButton setTheme={setTheme} />
                    {options.map(({ name, route }) => {
                        return (
                            <ButtonBase key={name} component={RouteLink} to={route}
                                onClick={() => {
                                    setIsMenuOpen(false)
                                    window.scrollTo({ top: 0, behavior: "smooth" });
                                }}

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

function SocialIconLink({ id, url, source, sourceLight = null, theme }) {
    return (
        <Box
            component="a"
            aria-label={`Open ${id.charAt(0).toUpperCase() + id.slice(1)} profile`}
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

            <Box component="img" alt={id} src={sourceLight && theme.palette.mode === "light" ? sourceLight : source} sx={{
                width: "100%",
                height: "100%"
            }} />


        </Box>
    )

}



export function Navbar({ setTheme }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const theme = useTheme()
    const isBelowMd = useMediaQuery(theme.breakpoints.down("md"))
    const dropMenuRef = useRef(null)
    const hamMenuRef = useRef(null)

    useEffect(() => {

        function offClickHandler(e) {
            if (dropMenuRef.current && !dropMenuRef.current.contains(e.target) &&
                hamMenuRef.current && !hamMenuRef.current.contains(e.target)) {
                setIsMenuOpen(false)
            }


        }
        document.addEventListener("mousedown", offClickHandler)

        return () => {
            document.removeEventListener("mousedown", offClickHandler)
        }


    }, [])



    return (
        <Box component="nav" sx={{
            width: "100%",
            bgcolor: "background.default",
            px: { xs: 0, md: convert(100) },
        }}>
            <Stack direction="row"
                sx={{
                    width: "100%",
                    justifyContent: "space-between",
                    alignItems: "center",
                    py: convert(32),
                    px: convert(27),

                    borderBottom: "1px solid",
                    borderColor: "custom.borderDefault",
                }}
            >


                <Stack direction="row" spacing={{md: convert(27), xs: convert(13)}} sx={{ alignItems: "center" , pr:convert(10)}}>
                    {socialMedia.map(({ id, url, source, sourceLight }) => {
                        return (
                            <SocialIconLink key={id} id={id} url={url} source={source} sourceLight={sourceLight} theme={theme} />
                        )
                    })}
                </Stack>

                {isBelowMd ? (

                    <Box ref={hamMenuRef} sx={{ position: "relative" }}>
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
                                src={theme.palette.mode === "dark" ? hamburgerMenuDark : hamburgerMenuLight}
                                sx={{
                                    width: hamMenuSize,
                                    objectFit: "fill",
                                }}>

                            </Box>
                        </Button>
                        <DropdownMenu setTheme={setTheme} isMenuOpen={isMenuOpen} useReference={dropMenuRef} setIsMenuOpen={setIsMenuOpen} />
                    </Box>
                )
                    : (

                        <Stack direction="row"
                            sx={{
                                textDecoration: "none",
                                gap: "6vw",
                                
                            }}>
                            <ThemeButton setTheme={setTheme} />
                            {options.map(({ name, route }) => {
                                return (
                                    <ButtonBase 
                                    component={RouteLink}
                                    key={name}  
                                    to={route} 
                                    onClick={()=> window.scrollTo({ top: 0, behavior: "smooth" })}
                                    sx={{
                                        textDecoration: "none",
                                        color: "text.primary",
                                        px: "0.5vw",
                                        py: convert(1),
                                        borderRadius: "10px",
                                        border: "1px solid",
                                        borderColor: "transparent",
                                        "&:focus": {
                                            borderColor: "custom.borderDefault",
                                        },          
                                        "&:hover": {
                                            borderColor: "custom.borderDefault",
                                        }

                                    }}>
                                        <Typography variant="cardTitle" sx={{
                                            textWrap: "nowrap"
                                        }}>
                                            {name}
                                        </Typography>
                                    </ButtonBase>
                                )
                            })}
                        </Stack>
                    )
                }


            </Stack>
        </Box >
    )
}