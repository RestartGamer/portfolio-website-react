import { convert } from "../utils/muiConverter"

export const pageLayout = {
    //Overall Layout
    titleSpacing: convert(1),
    listSpacing: convert(0),
    sectionSpacing: { xs: convert(120), md: "20%" },
    pageSpacing: convert(130),
    contentSpacing: { xs: convert(58), md: convert(200) },

    pageMt:convert(100),
    pagePb: convert(100),
    pageMaxWidth: "1920px",

    imageMinWidth: "230px",
    imageMaxWidth: "354px",


    pagePaddingX: {
        xs: convert(41),
        md: "15%"
    },

    //Individual Spacing
    heroTitleMt: convert(100),
    sectionTitleSpacing: convert(90),
}