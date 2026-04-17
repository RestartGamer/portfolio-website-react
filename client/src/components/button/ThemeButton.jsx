import { ButtonBase, Box, useTheme } from "@mui/material"
import { convert } from "../../utils/muiConverter"


export function ThemeButton({setTheme}) {
    const theme = useTheme();
    const mode = theme.palette.mode;
    const width = 78;
    const height = width * (46 / 78);
    const animTime = "0.2s";
    return (
        <ButtonBase
            onClick={() => setTheme(prev => prev === "dark" ? "light" : "dark")}
            sx={{
                display: "flex",
                px: convert(6),
                py: convert(7),
                justifyContent: "center",
                alignItems: "center",
                width: width,
                height: height,

                borderRadius: "5px",
                background: "background.paper",
                boxShadow: "0 8px 4px 2px rgba(0, 0, 0, 0.25)",

            }}>
            <Box
                sx={{
                    display: "flex",
                    p: convert(4),
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                    height: "100%",


                    borderRadius: "5px",
                    bgcolor: "background.default",
                    boxShadow: "0 19px 3.5px 1px rgba(0, 0, 0, 0.25)",
                }}>
                <Box
                    sx={{
                        display: "flex",
                        width: "100%",
                        height: "100%",
                        position: "relative",
                        justifyContent: "flex-end",
                        alignItems: "center",
                    }}>
                    <Box
                        sx={{
                            "--width": "27%",
                            width: "var(--width)",
                            height: "100%",
                            zIndex: 10,
                            position:"absolute",
                            left: mode==="light" ? `calc(100% - var(--width))` : 0,
                            transition: `left ${animTime} ease-in-out`,

                            borderRadius: "4px",
                            background: mode==="light"? "#00B2E3": "#616161",
                        }}>

                    </Box>
                    <Box
                        sx={{
                            width: "100%",
                            height: "35%",
                            position: "absolute",
                            left: 0,
                            top: "50%",
                            transform: "translateY(-50%)",
                            zIndex: 1,

                            borderRadius: "3px",
                            background: "#000",
                        }}>

                    </Box>

                </Box>

            </Box>
        </ButtonBase >
    )
}