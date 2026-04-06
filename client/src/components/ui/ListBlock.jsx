import {List, ListItem, Typography} from "@mui/material"
import {pageLayout} from "../../layout/layout"
const {
  listSpacing
} = pageLayout;

export function ListBlock({ listItems = [], textWidth, typography="bodyLarge", fontWeight=300}) {
    return <List component="ul" sx={{ display:"flex", flexDirection: "column", gap: listSpacing, width: textWidth, maxWidth: "100%"}}>
        {listItems.map((listItem) => {
            return <ListItem key={listItem} sx={{ display: "list-item", listStyleType: "disc", p: 0, mb: 0  }}>
                <Typography variant={typography} sx={{ fontWeight: fontWeight }}>
                    {listItem}
                </Typography>
            </ListItem>
        })}
    </List>
}