import { Stack, Typography } from "@mui/material"
import { convert } from "../../utils/muiConverter"

const title = "Can Korkmaz";
const subTitle = "Front-End Developer in Lisbon";

export function Title({title, subTitle, children, variant="heroTitle", sx={}}) {
    return (
        <Stack alignItems="center" spacing={convert(50)} sx={{...sx}}>
            <Stack direction="column" spacing={convert(1)}
                sx={{
                    alignItems: "start",
                    ...sx,
                }}>
                <Typography variant={variant}>{title}</Typography>
                {children}
                
            </Stack>

        </Stack>)


}
