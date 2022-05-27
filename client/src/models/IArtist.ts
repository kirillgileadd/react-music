import {ITrack} from "./ITrack";
import {IAlbum} from "./IAlbum";

export interface IArtist {
    _id: string
    name: string;
    albums: IAlbum[];
    tracks: ITrack[];
    picture: string;
}