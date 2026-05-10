import type { CSSProperties } from "react";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    heroTitle: CSSProperties;
    headingTitle: CSSProperties;
    sectionTitle: CSSProperties;
    cardTitle: CSSProperties;
    bodyLarge: CSSProperties;
    bodyMedium: CSSProperties;
    bodySmall: CSSProperties;
  }
  interface TypographyVariantsOptions {
    heroTitle?: CSSProperties;
    headingTitle?: CSSProperties;
    sectionTitle?: CSSProperties;
    cardTitle?: CSSProperties;
    bodyLarge?: CSSProperties;
    bodyMedium?: CSSProperties;
    bodySmall?: CSSProperties;
  }
  interface Palette {
    custom: {
      borderDefault: string;
      borderDefault2: string;
    };
  }
  interface PaletteOptions {
    custom?: {
      borderDefault?: string;
      borderDefault2?: string;
    };
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    heroTitle: true;
    headingTitle: true;
    sectionTitle: true;
    cardTitle: true;
    bodyLarge: true;
    bodyMedium: true;
    bodySmall: true;
  }
}
