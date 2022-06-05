import Home from "../pages/Home";
import Tracks from "../pages/Track/Tracks";
import Albums from "../pages/Albums";
import Artists from "../pages/Artist/Artists";
import ArtistPage from "../pages/Artist/ArtistPage";

export interface IRoute {
    path: string;
    element: JSX.Element
}

export enum RouteNames {
    LOGIN = '/auth',
    HOME = '/',
    TRACKS = '/tracks',
    ARTISTS = '/artists',
    AlBUMS = '/albums',
    ALBUM_DETAIL = '/albums:id',
    ARTIST_DETAIL = '/artists/:id',

}
export const publicRoutes: IRoute[] = [
    {path: RouteNames.HOME, element: <Home/>},
    {path: RouteNames.TRACKS, element: <Tracks/>},
    {path: RouteNames.AlBUMS, element: <Albums/>},
    {path: RouteNames.ARTISTS, element: <Artists/>},
    {path: RouteNames.ARTIST_DETAIL, element: <ArtistPage/>},
]

export const privateRoutes: IRoute[] = [
]