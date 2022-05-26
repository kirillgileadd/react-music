import {Module} from "@nestjs/common";
import {MongooseModule} from "@nestjs/mongoose";
import {AlbumSchema, Album} from "./schema/album.schema";
import {AlbumController} from "./album.controller";
import {AlbumService} from "./album.service";
import {FileService} from "../file/file.service";
import {Artist, ArtistSchema} from "../artist/schema/artist.schema";

@Module({
    imports: [
        MongooseModule.forFeature([{name: Album.name, schema: AlbumSchema}]),
        MongooseModule.forFeature([{name: Artist.name, schema: ArtistSchema}]),
    ],
    controllers: [AlbumController],
    providers: [AlbumService, FileService]
})
export class AlbumModule {
}