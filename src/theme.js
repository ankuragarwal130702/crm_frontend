/*import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";

// color design tokens export
export const tokens = (mode) => ({
  ...(mode === "dark"
    ? {
        grey: {
          100: "#e0e0e0",
          200: "#c2c2c2",
          300: "#a3a3a3",
          400: "#858585",
          500: "#666666",
          600: "#525252",
          700: "#3d3d3d",
          800: "#292929",
          900: "#141414",
        },
        primary: {
          100: "#d0d1d5",
          200: "#a1a4ab",
          300: "#727681",
          400: "#1F2A40",
          500: "#141b2d",
          600: "#101624",
          700: "#0c101b",
          800: "#080b12",
          900: "#040509",
        },
        greenAccent: {
          100: "#dbf5ee",
          200: "#b7ebde",
          300: "#94e2cd",
          400: "#70d8bd",
          500: "#4cceac",
          600: "#3da58a",
          700: "#2e7c67",
          800: "#1e5245",
          900: "#0f2922",
        },
        redAccent: {
          100: "#f8dcdb",
          200: "#f1b9b7",
          300: "#e99592",
          400: "#e2726e",
          500: "#db4f4a",
          600: "#af3f3b",
          700: "#832f2c",
          800: "#58201e",
          900: "#2c100f",
        },
        blueAccent: {
          100: "#e1e2fe",
          200: "#c3c6fd",
          300: "#a4a9fc",
          400: "#868dfb",
          500: "#6870fa",
          600: "#535ac8",
          700: "#3e4396",
          800: "#2a2d64",
          900: "#151632",
        },
      }
    : {
        grey: {
          100: "#141414",
          200: "#292929",
          300: "#3d3d3d",
          400: "#525252",
          500: "#666666",
          600: "#858585",
          700: "#a3a3a3",
          800: "#c2c2c2",
          900: "#e0e0e0",
        },
        primary: {
          100: "#040509",
          200: "#080b12",
          300: "#0c101b",
          400: "#f2f0f0", // manually changed
          500: "#141b2d",
          600: "#1F2A40",
          700: "#727681",
          800: "#a1a4ab",
          900: "#d0d1d5",
        },
        greenAccent: {
          100: "#0f2922",
          200: "#1e5245",
          300: "#2e7c67",
          400: "#3da58a",
          500: "#4cceac",
          600: "#70d8bd",
          700: "#94e2cd",
          800: "#b7ebde",
          900: "#dbf5ee",
        },
        redAccent: {
          100: "#2c100f",
          200: "#58201e",
          300: "#832f2c",
          400: "#af3f3b",
          500: "#db4f4a",
          600: "#e2726e",
          700: "#e99592",
          800: "#f1b9b7",
          900: "#f8dcdb",
        },
        blueAccent: {
          100: "#151632",
          200: "#2a2d64",
          300: "#3e4396",
          400: "#535ac8",
          500: "#6870fa",
          600: "#868dfb",
          700: "#a4a9fc",
          800: "#c3c6fd",
          900: "#e1e2fe",
        },
      }),
});

// mui theme settings
export const themeSettings = (mode) => {
  const colors = tokens(mode);
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            // palette values for dark mode
            primary: {
              main: colors.primary[500],
            },
            secondary: {
              main: colors.greenAccent[500],
            },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[500],
              light: colors.grey[100],
            },
            background: {
              default: colors.primary[500],
            },
          }
        : {
            // palette values for light mode
            primary: {
              main: colors.primary[100],
            },
            secondary: {
              main: colors.greenAccent[500],
            },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[500],
              light: colors.grey[100],
            },
            background: {
              default: "#fcfcfc",
            },
          }),
    },
    typography: {
      fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
  };
};

// context for color mode
export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const [mode, setMode] = useState("dark");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    []
  );

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return [theme, colorMode];
};*/


import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";

// color design tokens export
export const tokens = (mode) => ({
  ...(mode === "dark"
    ? {
        grey: {
          100: "#f0f0f0",
          200: "#dcdcdc",
          300: "#c8c8c8",
          400: "#b4b4b4",
          500: "#a0a0a0",
          600: "#8c8c8c",
          700: "#787878",
          800: "#646464",
          900: "#505050",
        },
        primary: {
          100: "#f5f5f5",
          200: "#e0e0e0",
          300: "#cccccc",
          400: "#b8b8b8",
          500: "#a4a4a4",
          600: "#8f8f8f",
          700: "#7a7a7a",
          800: "#656565",
          900: "#505050",
        },
        greenAccent: {
          100: "#d1f7d6",
          200: "#a4f0a0",
          300: "#77e96a",
          400: "#4ae334",
          500: "#1de200",
          600: "#17c700",
          700: "#13a500",
          800: "#0f8300",
          900: "#0b6200",
        },
        redAccent: {
          100: "#fbd1d1",
          200: "#f7a3a3",
          300: "#f47676",
          400: "#f14949",
          500: "#ef1c1c",
          600: "#d51717",
          700: "#c01313",
          800: "#a80f0f",
          900: "#8e0c0c",
        },
        blueAccent: {
          100: "#e1f0ff",
          200: "#c3e1ff",
          300: "#a5d3ff",
          400: "#87c4ff",
          500: "#69b5ff",
          600: "#4a99ff",
          700: "#3a7aff",
          800: "#2a5bff",
          900: "#1a3eff",
        },
      }
    : {
        grey: {
          100: "#505050",
          200: "#646464",
          300: "#787878",
          400: "#8c8c8c",
          500: "#a0a0a0",
          600: "#b4b4b4",
          700: "#c8c8c8",
          800: "#dcdcdc",
          900: "#f0f0f0",
        },
        primary: {
          100: "#505050",
          200: "#656565",
          300: "#7a7a7a",
          400: "#8f8f8f",
          500: "#a4a4a4",
          600: "#b8b8b8",
          700: "#cccccc",
          800: "#e0e0e0",
          900: "#f5f5f5",
        },
        greenAccent: {
          100: "#0b6200",
          200: "#0f8300",
          300: "#13a500",
          400: "#17c700",
          500: "#1de200",
          600: "#4ae334",
          700: "#77e96a",
          800: "#a4f0a0",
          900: "#d1f7d6",
        },
        redAccent: {
          100: "#8e0c0c",
          200: "#a80f0f",
          300: "#c01313",
          400: "#d51717",
          500: "#ef1c1c",
          600: "#f14949",
          700: "#f47676",
          800: "#f7a3a3",
          900: "#fbd1d1",
        },
        blueAccent: {
          100: "#1a3eff",
          200: "#2a5bff",
          300: "#3a7aff",
          400: "#4a99ff",
          500: "#69b5ff",
          600: "#87c4ff",
          700: "#a5d3ff",
          800: "#c3e1ff",
          900: "#e1f0ff",
        },
      }),
});

// mui theme settings
export const themeSettings = (mode) => {
  const colors = tokens(mode);
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            primary: {
              main: colors.primary[800], // A darker primary background color for dark mode
            },
            secondary: {
              main: colors.greenAccent[500],
            },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[500],
              light: colors.grey[100],
            },
            background: {
              default: colors.primary[900], // A dark background color for dark mode
            },
          }
        : {
            primary: {
              main: colors.primary[100],
            },
            secondary: {
              main: colors.greenAccent[500],
            },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[500],
              light: colors.grey[100],
            },
            background: {
              default: "#fcfcfc",
            },
          }),
    },
    typography: {
      fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
      fontSize: 14,
      h1: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 48,
        fontWeight: 700,
      },
      h2: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 40,
        fontWeight: 600,
      },
      h3: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 32,
        fontWeight: 500,
      },
      h4: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 28,
        fontWeight: 500,
      },
      h5: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 24,
        fontWeight: 400,
      },
      h6: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 20,
        fontWeight: 400,
      },
    },
  };
};

// context for color mode
export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const [mode, setMode] = useState("dark");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    []
  );

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return [theme, colorMode];
};
