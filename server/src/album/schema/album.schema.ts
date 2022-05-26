import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import mongoose, {Document} from 'mongoose';
import {Track} from "../../track/schema/track.schema";

export type AlbumDocument = Album & Document;

@Schema()
export class Album {
    @Prop()
    name: string;

    @Prop()
    artist: string;

    @Prop()
    id: string;

    @Prop()
    picture: string;

    @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Track' }] })
    tracks: Track[]
}

export const AlbumSchema = SchemaFactory.createForClass(Album);