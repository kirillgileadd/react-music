import {createTheme} from "@mui/material";

export const theme = createTheme({
    palette: {
        text: {
            primary: "#fff"
        },
        primary: {
            main: '#00D52F',
        },
        secondary: {
            main: '#2B2741',
            dark: '#1D1837',
            contrastText: "#fff"
        },
    },
    shape: {
        borderRadius: '10px',
    },
});