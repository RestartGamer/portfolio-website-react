import './App.css'
import { useState, useMemo } from 'react'
import { Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home"
import { MyJourney } from "./pages/MyJourney"
import { UXWireframing } from "./pages/UXWireframing"
import { Navbar } from "./components"

import { ThemeProvider, createTheme } from "@mui/material/styles"
import { CssBaseline, Stack } from "@mui/material";
import { pageLayout } from "./layout/layout.js"
import { PageSection } from "./sections"

const {
  pageMaxWidth,
} = pageLayout;

const sharedTypography = {
  fontFamily: '"Source Sans 3", sans-serif',

  heroTitle: {
    fontFamily: '"EB Garamond", serif',
    fontSize: "48px",
    fontWeight: 600,
    lineHeight: 1.2,
  },

  headingTitle: {
    fontFamily: '"EB Garamond", serif',
    fontSize: "40px",
    fontWeight: 600,
    lineHeight: 1.25,
  },

  sectionTitle: {
    fontSize: "28px",
    fontWeight: 600, // default; 400 for regular
    lineHeight: 1.3,
  },

  cardTitle: {
    fontSize: "24px",
    fontWeight: 500, // default; 600 for semiBold
    lineHeight: 1.35,
  },

  bodyLarge: {
    fontSize: "20px",
    fontWeight: 400, // default; 
    lineHeight: 1.5,
  },

  bodyMedium: {
    fontSize: "16px",
    fontWeight: 300, // default
    lineHeight: 1.5,
  },

  bodySmall: {
    fontSize: "14px",
    fontWeight: 300, // default
    lineHeight: 1.45,
  },
};
const themeSettings = {
  light: {
    typography: sharedTypography,
    palette: {
      mode: "light",
      background: {
        default: "#ffffff",
        paper: "#b9b9b9",
      },
      text: {
        primary: "#000000",
      },
      custom: {
        borderDefault: "#1b1b1b"
      },
      divider: "#1b1b1b"
    }
  },
  dark: {
    typography: sharedTypography,
    palette: {
      mode: "dark",
      background: {
        default: "#252525",
        paper: "#131313",
      },
      text: {
        primary: "#ffffff",
        secondary: "#100000"
      },

      custom: {
        borderDefault: "#F2F2F2",


      },
      divider: "#F2F2F2"
    },
    customStyles: {
      pageWidth: {
        width: {
          xs: "auto",
          md: "100%",
        }
      }
    }
  }
}


function App() {
  const [theme, setTheme] = useState("dark");
  const muiTheme = useMemo(() =>
    createTheme(themeSettings[theme]), [theme]
  )
  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />

      <Stack direction="column" sx={{
        alignItems: "center",
        width: "100%",
      }}
      >
        <Stack direction="column"
          sx={{
            width: "100%",
            alignItems: "center",
            maxWidth: pageMaxWidth,
          }}>
          <Navbar theme={theme} setTheme={setTheme} />

          <PageSection>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/myjourney" element={<MyJourney />} />
              <Route path="/uxwireframing" element={<UXWireframing />} />
            </Routes>
          </PageSection>


        </Stack>
      </Stack>
    </ThemeProvider>
  )
}

export default App;