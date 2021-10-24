import { createTheme } from "@mui/material/styles";
import colors from "./colors";

export interface themeInterface {
  typography: {
    fontFamily: string;
    subtitle1: {
      fontFamily: string;
      fontSize: string;
      color: string;
    };
  };
  palette: {
    primary: {
      main: string;
      black: string;
    };
    secondary: {
      main: string;
      lightGray: string;
      gray50: string;
      gray80: string;
      gray10: string;
      gray70: string;
      white: string;
      white2: string;
    };
    shadowBlueLight: string;
    cardPadding: string;
    gradient: (
      direction: string,
      startColor: string,
      endColor: string
    ) => string;
  };
  overrides: {
    MuiButton: {
      root: {
        backgroundColor: string;
        "&:hover": {
          backgroundColor: string;
        };
      };
      label: {
        fontSize: string;
        textTransform: string;
      };
    };
    MuiTypography: {
      fontFamily: string;
      fontSize: string;
      root: {
        color: string;
      };
      subtitle2: {
        fontSize: string;
      };
    };
  };
  breakpoints: {
    values: {
      xs: number;
      sm: number;
      md: number;
      lg: number;
      xl: number;
    };
  };
}

const theme = createTheme({
  typography: {
    fontFamily: "Avenir-book",
    subtitle1: {
      fontFamily: "Avenir-book",
      fontSize: "1rem",
      color: colors.lightGray,
    },
  },
  palette: {
    primary: {
      black: colors.black,
    },
    secondary: {
      lightGray: colors.lightGray,
      gray50: colors.gray50,
      gray80: colors.gray80,
      gray70: colors.gray70,
      gray10: colors.gray10,
      white: colors.white,
      white2: colors.white2,
    },
    shadowBlueLight: "rgba(54, 48, 116, 0.3)",
    cardPadding: "3.75rem",
    gradient: (direction, startColor, endColor) => {
      return `linear-gradient(${direction}, ${startColor}, ${endColor})`;
    },
  },
  overrides: {
    MuiTypography: {
      fontFamily: "Avenir-book",
      fontSize: "0.875rem",
      root: {
        color: colors.white,
      },
      subtitle2: {
        fontSize: "0.81rem",
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 1025,
      xl: 1440,
    },
  },
} as themeInterface);

export default theme;
