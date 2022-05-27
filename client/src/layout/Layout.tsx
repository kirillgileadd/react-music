import * as React from 'react';
import {styled} from '@mui/material/styles';
import Box from '@mui/material/Box';
import AppRouter from "../components/AppRouter";
import NavBar from "../components/NavBar";
import {useState} from "react";
import SearchBlock from "../components/SearchBlock";

const Main = styled('main')(({theme}) => ({
    flexGrow: 1,
    padding: theme.spacing(14, 3, 3, 3),
    backgroundColor: theme.palette.secondary.main,
    minHeight: "100vh"
}))

export default function Layout() {
    const [search, setSearch] = useState('')
    return (
        <Box sx={{ display: 'flex' }}>
            <NavBar search={search} setSearch={setSearch}/>
            <Main>
                {search ? <SearchBlock search={search}/> : <AppRouter/>}
            </Main>
        </Box>
    );
}