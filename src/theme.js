import { cyan, deepOrange, orange, teal } from "@mui/material/colors";
import { experimental_extendTheme as extendTheme } from "@mui/material/styles";

const APP_BAR_HEIGHT = "58px";
const BOARD_BAR_HEIGHT = "60px";
const BOARD_CONTENT_HEIGHT = `calc(100vh - ${APP_BAR_HEIGHT} - ${BOARD_BAR_HEIGHT})`;
const COLUMN_HEADER_HEIGHT = "50px";
const COLUMN_FOOTER_HEIGHT = "56px";
// Create a theme instance.
const theme = extendTheme({
  trello: {
    appBarHeight: APP_BAR_HEIGHT,
    boardBarHeight: BOARD_BAR_HEIGHT,
    boardContentHeight: BOARD_CONTENT_HEIGHT,
    columnHeaderHeight:COLUMN_HEADER_HEIGHT,
    columnFooterHeight:COLUMN_FOOTER_HEIGHT,
  },
  breakpoints: {
    values: {
      laptop: 1024,
      tablet: 768,
      mobile: 0,
      desktop: 1280,
    }},
  colorSchemes: {
    // light: {
    //   palette: {
    //     primary: teal,
    //     secondary: deepOrange,
    //   },
    // },
    // dark: {
    //   palette: {
    //     primary: cyan,
    //     secondary: orange,
    //   },
    // },
  },
  // ...other properties
  components: {
    // Name of the component
    // typography: { fontFamily: ["Yellowtail", "cursive"].join(",") },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          background:'#fff',
          color:'#000',
          fontFamily:'Poppins',
          "*::-webkit-scrollbar": {
            width: "8px",
            height: "8px",
          },
          "*::-webkit-scrollbar-thumb": {
            background: "#dcdde1",
            borderRadius: "8px",
          },
          "*::-webkit-scrollbar-thumb:hover": {
            background: "white",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily:'Poppins',
          textTransform: "none",
          borderWidth: "0.5px",
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontFamily:'Poppins',
          fontSize: "0.875rem",
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily:'Poppins',
          '&.MuiTypography-body1':{
            fontSize:'0.875rem'
          }
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        // Name of the slot

        root: {
          fontSize: "0.875rem",
          ".MuiOutlinedInput-notchedOutline": {
            // borderColor: theme.palette.primary.light,
          },
          "&:hover": {
            ".MuiOutlinedInput-notchedOutline": {
              // borderColor: theme.palette.primary.main,
            },
          },
          "& fieldset": {
            borderWidth: "0.5px !important",
          },
          "&:hover fieldset": {
            borderWidth: "1px !important",
          },
          "&.Mui-forcused fieldset": {
            borderWidth: "1px !important",
          },
        },
      },
    },
  },
});

export default theme;
