import {Module} from "@nestjs/common";
import {MongooseModule} from "@nestjs/mongoose";
import {Track, TrackSchema} from "./schema/track.schema";
import {TrackController} from "./track.controller";
import {TrackService} from "./track.service";
import {Album, AlbumSchema} from "../album/schema/album.schema";
import {FileService} from "../file/file.service";
import {Artist, ArtistSchema} from "../artist/schema/artist.schema";

@Module({
    imports: [
        MongooseModule.forFeature([{name: Track.name, schema: TrackSchema}]),
        MongooseModule.forFeature([{name: Artist.name, schema: ArtistSchema}]),
    ],
    controllers: [TrackController],
    providers: [TrackService, FileService]
})
export class TrackModule {
}