import { PaletteMode } from "@mui/material";

const tokens = {
  grey: {
    100: "#f0f0f3",
    200: "#e1e2e7",
    300: "#d1d3da",
    400: "#c2c5ce",
    500: "#b3b6c2",
    600: "#8f929b",
    700: "#6b6d74",
    800: "#48494e",
    900: "#242427",
  },
  
  primary: {
    // green
    100: "#d5fcd0",
    200: "#acf9a0",
    300: "#82f571",
    400: "#59f241",
    500: "#2fef12",
    600: "#26bf0e",
    700: "#1c8f0b",
    800: "#136007",
    900: "#093004"
  },

  secondary: {
    // pink
    100: "#fcddfb",
    200: "#fabbf8",
    300: "#f799f4",
    400: "#f577f1",
    500: "#f255ed",
    600: "#c244be",
    700: "#91338e",
    800: "#61225f",
    900: "#30112f"
  },

  tertiary: {
    // purple
    500: "#8884d8",
  },
  background: {
    dark: "#2d2d34",
    main: "#1f2026",
    light: "#f0f0f3"
  },
};

const theme = {
  palette: {
    primary: {
      ...tokens.primary,
    },
    secondary: {
      ...tokens.secondary,
    },
    tertiary: {
      ...tokens.tertiary,
    },
    grey: {
      ...tokens.grey,
    },
    background: {
      default: tokens.background.main,
      dark: tokens.background.dark,
      light: tokens.background.light,
    },
  },
  typography: {
    fontFamily: ["Inter", "sans-serif"].join(","),
    fontSize: 12,
    h1: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 32,
    },
    h2: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 24,
    },
    h3: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 20,
      fontWeight: 800,
      color: tokens.grey[200],
    },
    h4: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 14,
      fontWeight: 600,
      color: tokens.grey[300],
    },
    h5: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 12,
      fontWeight: 400,
      color: tokens.grey[500],
    },
    h6: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 10,
      color: tokens.grey[700],
    },
  },
};


export const getDesignTokens = (mode: PaletteMode) => {
  const baseTheme = {
    palette: {
      mode,
      primary: {
        ...tokens.primary,
      },
      secondary: {
        ...tokens.secondary,
      },
      tertiary: {
        ...tokens.tertiary,
      },
      grey: {
        ...tokens.grey,
      },
      background: {
        default: tokens.background.main,
        dark: tokens.background.dark,
        light: tokens.background.light,
      },
    },
  };

  return mode === "dark"
    ? baseTheme
    : {
        ...baseTheme,
        palette: {
          ...baseTheme.palette,
          background: {
            ...baseTheme.palette.background,
            default: tokens.background.main,
          },
        },
        typography: {
          h3: {
            color: tokens.grey[700],
          },
          h4: {
            color: tokens.grey[500],
          },
          h5: {
            color: tokens.grey[400],
          },
          h6: {
            color: tokens.grey[300],
          },
        },
      };
};

export default theme;