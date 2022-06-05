import {IArtist} from "./IArtist";

export interface ITrack {
    _id: string
    name: string;
    artist: IArtist ;
    audio: string;
    text: string;
    picture: string;
    listens: number
}