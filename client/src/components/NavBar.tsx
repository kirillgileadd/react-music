import React, {FC, useState} from 'react';
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import List from "@mui/material/List";
import {RouterLink} from "../UI/RouterLink";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import {CSSObject, styled, Theme, useTheme} from "@mui/material/styles";
import {useLocation, useNavigate} from "react-router-dom";
import {AppBarProps as MuiAppBarProps} from "@mui/material/AppBar/AppBar";
import MuiAppBar from "@mui/material/AppBar";
import MuiDrawer from "@mui/material/Drawer";
import ListItemIcon from "@mui/material/ListItemIcon";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AlbumOutlinedIcon from "@mui/icons-material/AlbumOutlined";
import AudiotrackOutlinedIcon from "@mui/icons-material/AudiotrackOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import SearchIcon from '@mui/icons-material/Search';
import Box from "@mui/material/Box";
import {Input, TextField} from "@mui/material";

const drawerWidth = 240;

const navbarListItems = [
    {name: "Home", path: '/', icon: <HomeOutlinedIcon/>},
    {name: "Albums", path: '/albums', icon: <AlbumOutlinedIcon/>},
    {name: "Tracks", path: '/tracks', icon: <AudiotrackOutlinedIcon/>},
    {name: "Artists", path: '/artists', icon: <AccountCircleOutlinedIcon/>},
]

const openedMixin = (theme: Theme): CSSObject => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({theme}) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(3, 1, 1, 1),
    ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
}

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({theme, open}) => ({
    color: 'white',
    boxShadow: 'none',
    backgroundColor: theme.palette.secondary.dark,
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, {shouldForwardProp: (prop) => prop !== 'open'})(
    ({theme, open}) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        '& .MuiPaper-root': {
            backgroundColor: theme.palette.secondary.dark,
        },
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

const StyledListIconItem = styled(ListItemIcon,)(
    ({theme}) => ({
        backgroundColor: theme.palette.secondary.main,
        minWidth: 0,
        padding: 10,
        borderRadius: theme.shape.borderRadius,
        justifyContent: 'center',
        '&.active': {
            backgroundColor: theme.palette.primary.main,
        }
    }),
);

const SearchInput = styled(Input,)(
    ({theme}) => ({
        marginLeft: theme.spacing(1),
        "&:: after, &:: before": {
            display: 'none'
        }
    }),
);


interface NavBarProps {
    search: string
    setSearch: (e: any) => void
}

const NavBar: FC<NavBarProps> = ({search, setSearch}) => {
    const theme = useTheme();
    const [open, setOpen] = React.useState(true);
    const router = useLocation()
    const navigate = useNavigate()

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <>
            <CssBaseline/>
            <AppBar position="fixed" open={open}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{
                            color: 'white',
                            marginRight: 5,
                            ...(open && {display: 'none'}),
                        }}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Box
                        sx={{mr: 2}}
                        display='flex'
                        alignItems='center'
                    >
                        <ArrowBackIosNewIcon onClick={() => navigate(-1)}/>
                        <ArrowForwardIosIcon/>
                    </Box>
                    <SearchIcon/>
                    <SearchInput
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        sx={{border: "none"}}
                        fullWidth
                        placeholder={"Search"}
                    />
                </Toolbar>
            </AppBar>
            <Drawer variant="permanent" open={open}>
                <DrawerHeader>
                    <svg width="50" height="50" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect opacity="0.7" width="70" height="70" rx="35" fill="#939393"/>
                    </svg>
                    <IconButton
                        onClick={handleDrawerClose}
                        sx={{color: 'white',}}
                    >
                        {theme.direction === 'rtl' ? <ChevronRightIcon/> : <ChevronLeftIcon/>}
                    </IconButton>
                </DrawerHeader>
                <List>
                    {navbarListItems.map(({name, path, icon}, index) => (
                        <RouterLink to={path} key={path}>
                            <ListItem disablePadding sx={{display: 'block'}}>
                                <ListItemButton
                                    sx={{
                                        minHeight: 48,
                                        justifyContent: open ? 'initial' : 'center',
                                        px: 2.5,
                                    }}
                                >
                                    <StyledListIconItem
                                        className={router.pathname == path ? 'active' : ''}
                                        sx={{
                                            color: 'white',
                                            mr: open ? 3 : 'auto',
                                        }}
                                    >
                                        {icon}
                                    </StyledListIconItem>
                                    <ListItemText primary={name} sx={{opacity: open ? 1 : 0}}/>
                                </ListItemButton>
                            </ListItem>
                        </RouterLink>
                    ))}
                </List>
            </Drawer>
        </>
    );
};

export default NavBar;