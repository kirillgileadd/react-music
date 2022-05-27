import {ITrack} from "./ITrack";

export interface IAlbum {
    _id: string
    name: string;
    artist: string;
    tracks: ITrack[] | Array<string>;
    picture: string;
}