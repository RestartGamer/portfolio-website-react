
import { Stack, Box } from "@mui/material"
import { htmlIcon, cssIcon, jsIcon, reactIcon, tsIcon, expressIcon, jestIcon } from "../../assets"


const convert = (px) => px / 8;

const stackIcons = [
    { name: "HTML", icon: htmlIcon },
    { name: "CSS", icon: cssIcon },
    { name: "JavaScript", icon: jsIcon },
    { name: "React", icon: reactIcon },
    { name: "TypeScript", icon: tsIcon },
    { name: "Express", icon: expressIcon },
    { name: "Jest", icon: jestIcon },
];

const iconSize = "89px";
const title = "My Stack";
const stackSize = 4;

function StackRow({ row }) {
    return (
        <Stack direction="row" justifyContent="space-between" spacing={convert(20)} >
            {row.map(({ name, icon }) => {
                return <Box component="img" src={icon} alt={name}
                    sx={{
                        height: 64,
                        width: "auto",
                        objectFit: "contain",
                    }} />
            })}
        </Stack>
    )
}


export function SectionStack() {

    const rows = [];

    for (var i = 0; i < stackIcons.length; i += stackSize) {
        rows.push(stackIcons.slice(i, i + stackSize));
    }

    return (
        <Stack direction="column">
            <Stack direction="column" spacing={convert(17)}
                sx={{
                    py: convert(21.54)
                }}>
                {rows.map((row, index) => {
                    return <StackRow row={row} key={index} />
                })
                }


            </Stack>
        </Stack>
    )
}