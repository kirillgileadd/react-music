import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import mongoose, {Document} from 'mongoose';
import {Artist} from "../../artist/schema/artist.schema";

export type TrackDocument = Track & Document;

@Schema()
export class Track {
    @Prop()
    name: string;

    @Prop( )
    artist: Artist;

    @Prop()
    listens: number;

    @Prop()
    id: string;

    @Prop()
    text: string;

    @Prop()
    picture: string;

    @Prop()
    audio: string;

}

export const TrackSchema = SchemaFactory.createForClass(Track);