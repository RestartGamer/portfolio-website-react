import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router-dom"

import "./index.css"
import App from "./App"
import {
    avatarImage,
    currentCVImage,
    fbIcon,
    githubIconDarkMode,
    githubIconLightMode,
    hamburgerMenuDark,
    hamburgerMenuLight,
    hoverImage,
    instaIcon,
    linkedInIcon,
    littleLemonImage,
    mgPortfolioImage,
    oldCVImage,
} from "./assets"
import { preloadImages } from "./utils/preloadImages"

preloadImages([
    linkedInIcon,
    fbIcon,
    instaIcon,
    githubIconDarkMode,
    githubIconLightMode,
    hamburgerMenuDark,
    hamburgerMenuLight,
    hoverImage,
    avatarImage,
    currentCVImage,
    littleLemonImage,
    mgPortfolioImage,
    oldCVImage,
])

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </StrictMode>
)
