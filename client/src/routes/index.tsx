import Home from "../pages/Home";
import Tracks from "../pages/Tracks";
import Albums from "../pages/Albums";
import Artists from "../pages/Artists";
import ArtistPage from "../pages/ArtistPage";

export interface IRoute {
    path: string;
    element: JSX.Element
}

export enum RouteName {
    LOGIN = '/auth',
    HOME = '/',
    TRACKS = '/tracks',
    ARTISTS = '/artists',
    AlBUMS = '/albums',
    ALBUM_DETAIL = '/albums:id',
    ARTIST_DETAIL = '/artists/:id',

}
export const publicRoutes: IRoute[] = [
    {path: RouteName.HOME, element: <Home/>},
    {path: RouteName.TRACKS, element: <Tracks/>},
    {path: RouteName.AlBUMS, element: <Albums/>},
    {path: RouteName.ARTISTS, element: <Artists/>},
    {path: RouteName.ARTIST_DETAIL, element: <ArtistPage/>},

]

export const privateRoutes: IRoute[] = [
]