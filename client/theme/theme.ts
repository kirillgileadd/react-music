import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    palette: {
        background: {
            paper: '#000',
            default: '#000',
        },
        mode: 'dark',
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