import {ObjectId} from "mongoose";

export class CreateTrackDto {
    readonly name: string;
    readonly text: string;
    readonly audio: string;
    readonly albumId: ObjectId;
    readonly artistId: ObjectId;
}