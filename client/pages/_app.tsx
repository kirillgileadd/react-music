import '../styles/globals.css'
import type {AppProps} from 'next/app'
import {ThemeProvider} from "@mui/system";
import {theme} from "../theme/theme";
import MainLayout from "../layouts/MainLayout";

function MyApp({Component, pageProps}: AppProps) {
    return (
        <ThemeProvider theme={theme}>
            <MainLayout>
                <Component {...pageProps} />
            </MainLayout>
        </ThemeProvider>
    )

}

export default MyApp
