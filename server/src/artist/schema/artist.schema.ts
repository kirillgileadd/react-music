import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import mongoose, {Document} from 'mongoose';
import {Track} from "../../track/schema/track.schema";
import {Album} from "../../album/schema/album.schema";

export type ArtistDocument = Artist & Document;

@Schema()
export class Artist {
    @Prop()
    name: string;

    @Prop()
    id: string;

    @Prop()
    picture: string;

    @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Album' }] })
    albums: Album[]

    @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Track' }] })
    tracks: Track[]
}

export const ArtistSchema = SchemaFactory.createForClass(Artist);