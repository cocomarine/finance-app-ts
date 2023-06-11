// with tailwind shade extension, highlight colour code and press cmd-k cmd-g 
// to generate shades either sides (original colour will be 500)

export const tokens = {
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
    // yellow
    500: "#dbc244",
  },

  background: {
    dark: "#2d2d34",
    main: "#1f2026",
    light: "#f6f6f6"
  },
};

// mui theme settings
export const themeSettings = (mode: "dark" | "light") => {
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            // palette values for dark mode
            primary: {
              ...tokens.primary,
              dark: tokens.primary[200],
              main: tokens.primary[500],
              light: tokens.primary[700],
            },
            secondary: {
              ...tokens.secondary,
              main: tokens.secondary[500],
            },
            tertiary: {
              ...tokens.tertiary,
              main: tokens.tertiary[500],
            },
            grey: {
              ...tokens.grey,
            },
            background: {
              default: tokens.background.main,
            },
          }
        : {
            // palette values for light mode
            primary: {
              ...tokens.primary,
              dark: tokens.primary[700],
              main: tokens.primary[500],
              light: tokens.primary[200],
            },
            secondary: {
              ...tokens.secondary,
              main: tokens.secondary[500],
            },
            tertiary: {
              ...tokens.tertiary,
              main: tokens.tertiary[500],
            },
            grey: {
              ...tokens.grey,
            },
            background: {
              default: tokens.background.light,
            },
          }),
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
      },
      h4: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 14,
        fontWeight: 600,
      },
      h5: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 12,
        fontWeight: 400,
      },
      h6: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 10,
      },
    },
  };
};