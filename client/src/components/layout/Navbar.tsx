import { useEffect, useRef, useState } from "react"
import type { Dispatch, RefObject, SetStateAction } from "react"
import {
    Box,
    Button,
    ButtonBase,
    Stack,
    Typography,
    useMediaQuery,
    useTheme,
} from "@mui/material"
import { Link as RouteLink } from "react-router-dom"

import {
    fbIcon,
    githubIconDarkMode,
    githubIconLightMode,
    hamburgerMenuDark,
    hamburgerMenuLight,
    instaIcon,
    linkedInIcon,
} from "../../assets"
import { convert } from "../../utils/muiConverter"
import { ThemeButton } from "../"

const socialMedia = [
    {
        id: "linkedIn",
        url: "https://www.linkedin.com/in/can-korkmaz/",
        source: linkedInIcon,
    },
    {
        id: "instagram",
        url: "https://www.instagram.com/",
        source: instaIcon,
    },
    {
        id: "github",
        url: "https://github.com/RestartGamer",
        source: githubIconDarkMode,
        sourceLight: githubIconLightMode,
    },
]

const options = [
    { name: "Home", route: "/" },
    { name: "Journey", route: "/myjourney" },
    { name: "UX UI", route: "/uxwireframing" },
]

const iconSize = 56
const hamMenuSize = 53
const hamMenuAspectRatio = 321 / 278
const themeImageTransition = "opacity 150ms ease-in-out"

type DropdownMenuProps = {
    isMenuOpen: boolean;
    setTheme: Dispatch<SetStateAction<"light" | "dark">>;
    useReference: RefObject<HTMLDivElement | null>;
    setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
}

function DropdownMenu({
    isMenuOpen,
    setTheme,
    useReference,
    setIsMenuOpen,
}: DropdownMenuProps) {
    return (
        <Box
            ref={useReference}
            id="navbarDropdown"
            sx={{
                position: "absolute",
                top: "100%",
                right: "-40%",
                overflow: "hidden",
                pointerEvents: isMenuOpen ? "auto" : "none",
                pb: convert(1),
            }}
        >
            <Stack
                direction="column"
                sx={{
                    overflow: "hidden",
                    borderRadius: "0 0 0 70px",
                    borderTop: "2px solid #1465B1",
                    borderBottom: "2px solid #1465B1",
                    borderLeft: "2px solid #1465B1",
                    bgcolor: "background.default",
                    px: convert(60),
                    py: convert(66),
                    boxShadow: isMenuOpen
                        ? "0 4px 4px 0 rgba(0, 0, 0, 0.25)"
                        : "none",
                    transformOrigin: "right",
                    transform: isMenuOpen
                        ? "translateX(0%)"
                        : "translateX(100%)",
                    transition: "transform 250ms ease-in-out",
                }}
            >
                <Stack
                    direction="column"
                    alignItems="center"
                    spacing={convert(28.28)}
                >
                    <ThemeButton setTheme={setTheme} />

                    {options.map(({ name, route }) => (
                        <ButtonBase
                            key={name}
                            component={RouteLink}
                            to={route}
                            aria-label={`Go to ${name}`}
                            onClick={() => {
                                setIsMenuOpen(false)
                                window.scrollTo({
                                    top: 0,
                                    behavior: "smooth",
                                })
                            }}
                            sx={{
                                display: "inline-flex",
                                justifyContent: "center",
                                width: "100%",
                                textDecoration: "none",
                                color: "text.primary",
                                border: "0.661px solid",
                                borderColor: "custom.borderDefault",
                                borderRadius: "7px",
                                px: convert(40),
                                py: convert(1),
                            }}
                        >
                            <Typography
                                variant="bodyLarge"
                                sx={{ width: "max-content" }}
                            >
                                {name}
                            </Typography>
                        </ButtonBase>
                    ))}
                </Stack>
            </Stack>
        </Box>
    )
}

type SocialIconLinkProps = {
    id: string;
    url: string;
    source: string;
    sourceLight?: string;
    mode: "light" | "dark";
}

function SocialIconLink({
    id,
    url,
    source,
    sourceLight,
    mode,
}: SocialIconLinkProps) {
    const accessibleName = id.charAt(0).toUpperCase() + id.slice(1)

    return (
        <Box
            component="a"
            aria-label={`Open ${accessibleName} profile`}
            href={url}
            target="_blank"
            rel="noreferrer"
            sx={{
                position: "relative",
                display: "inline-flex",
                width: iconSize,
                height: iconSize,
                flexShrink: 0,
                transform: "scale(1)",
                transition: "transform 300ms ease-in-out",
                "&:hover": {
                    transform: "scale(1.1)",
                },
            }}
        >
            {sourceLight ? (
                <>
                    <Box
                        component="img"
                        src={source}
                        alt=""
                        aria-hidden="true"
                        decoding="async"
                        sx={{
                            position: "absolute",
                            inset: 0,
                            width: "100%",
                            height: "100%",
                            opacity: mode === "dark" ? 1 : 0,
                            transition: themeImageTransition,
                        }}
                    />
                    <Box
                        component="img"
                        src={sourceLight}
                        alt=""
                        aria-hidden="true"
                        decoding="async"
                        sx={{
                            position: "absolute",
                            inset: 0,
                            width: "100%",
                            height: "100%",
                            opacity: mode === "light" ? 1 : 0,
                            transition: themeImageTransition,
                        }}
                    />
                </>
            ) : (
                <Box
                    component="img"
                    src={source}
                    alt=""
                    aria-hidden="true"
                    decoding="async"
                    sx={{
                        width: "100%",
                        height: "100%",
                    }}
                />
            )}
        </Box>
    )
}

type NavbarProps = {
    setTheme: Dispatch<SetStateAction<"light" | "dark">>;
}

export function Navbar({ setTheme }: NavbarProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const theme = useTheme()
    const isBelowMd = useMediaQuery(theme.breakpoints.down("md"))
    const dropMenuRef = useRef<HTMLDivElement>(null)
    const hamMenuRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        function offClickHandler(event: MouseEvent) {
            const target = event.target as Node

            if (
                dropMenuRef.current &&
                !dropMenuRef.current.contains(target) &&
                hamMenuRef.current &&
                !hamMenuRef.current.contains(target)
            ) {
                setIsMenuOpen(false)
            }
        }

        document.addEventListener("mousedown", offClickHandler)

        return () => {
            document.removeEventListener("mousedown", offClickHandler)
        }
    }, [])

    return (
        <Box
            component="nav"
            sx={{
                width: "100%",
                bgcolor: "background.default",
                px: { xs: 0, md: convert(100) },
            }}
        >
            <Stack
                direction="row"
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
                <Stack
                    direction="row"
                    spacing={{ md: convert(27), xs: convert(13) }}
                    sx={{
                        alignItems: "center",
                        pr: convert(10),
                    }}
                >
                    {socialMedia.map(({
                        id,
                        url,
                        source,
                        sourceLight,
                    }) => (
                        <SocialIconLink
                            key={id}
                            id={id}
                            url={url}
                            source={source}
                            sourceLight={sourceLight}
                            mode={theme.palette.mode}
                        />
                    ))}
                </Stack>

                {isBelowMd ? (
                    <Box ref={hamMenuRef} sx={{ position: "relative" }}>
                        <Button
                            onClick={() => {
                                setIsMenuOpen((previous) => !previous)
                            }}
                            aria-label={
                                isMenuOpen
                                    ? "Close navigation menu"
                                    : "Open navigation menu"
                            }
                            aria-expanded={isMenuOpen}
                            aria-haspopup="true"
                            aria-controls="navbarDropdown"
                            sx={{ display: "inline-flex" }}
                        >
                            <Box
                                sx={{
                                    position: "relative",
                                    width: hamMenuSize,
                                    aspectRatio: `${hamMenuAspectRatio}`,
                                }}
                            >
                                <Box
                                    component="img"
                                    src={hamburgerMenuDark}
                                    alt=""
                                    aria-hidden="true"
                                    decoding="async"
                                    sx={{
                                        position: "absolute",
                                        inset: 0,
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "fill",
                                        opacity:
                                            theme.palette.mode === "dark"
                                                ? 1
                                                : 0,
                                        transition: themeImageTransition,
                                    }}
                                />
                                <Box
                                    component="img"
                                    src={hamburgerMenuLight}
                                    alt=""
                                    aria-hidden="true"
                                    decoding="async"
                                    sx={{
                                        position: "absolute",
                                        inset: 0,
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "fill",
                                        opacity:
                                            theme.palette.mode === "light"
                                                ? 1
                                                : 0,
                                        transition: themeImageTransition,
                                    }}
                                />
                            </Box>
                        </Button>

                        <DropdownMenu
                            setTheme={setTheme}
                            isMenuOpen={isMenuOpen}
                            useReference={dropMenuRef}
                            setIsMenuOpen={setIsMenuOpen}
                        />
                    </Box>
                ) : (
                    <Stack
                        direction="row"
                        sx={{
                            textDecoration: "none",
                            gap: "6vw",
                        }}
                    >
                        <ThemeButton setTheme={setTheme} />

                        {options.map(({ name, route }) => (
                            <ButtonBase
                                aria-label={`Go to ${name}`}
                                component={RouteLink}
                                key={name}
                                to={route}
                                onClick={() => {
                                    window.scrollTo({
                                        top: 0,
                                        behavior: "smooth",
                                    })
                                }}
                                sx={{
                                    textDecoration: "none",
                                    color: "text.primary",
                                    px: "0.5vw",
                                    py: convert(1),
                                    borderRadius: "10px",
                                    border: "1px solid",
                                    borderColor: "transparent",
                                    "&:focus": {
                                        borderColor:
                                            "custom.borderDefault",
                                    },
                                    "&:hover": {
                                        borderColor:
                                            "custom.borderDefault",
                                    },
                                }}
                            >
                                <Typography
                                    variant="cardTitle"
                                    sx={{ textWrap: "nowrap" }}
                                >
                                    {name}
                                </Typography>
                            </ButtonBase>
                        ))}
                    </Stack>
                )}
            </Stack>
        </Box>
    )
}
