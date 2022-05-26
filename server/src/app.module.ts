import {Module} from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';
import {TrackModule} from "./track/track.module";
import {AlbumModule} from "./album/album.module";
import {FileService} from "./file/file.service";
import {ServeStaticModule} from "@nestjs/serve-static";
import * as path from 'path';
import {ArtistModule} from "./artist/artist.module";

@Module({
    imports: [
        ServeStaticModule.forRoot({
            rootPath: path.resolve(__dirname, 'static'),
        }),
        MongooseModule.forRoot('mongodb+srv://admin:admin@cluster0.pxlio8r.mongodb.net/?retryWrites=true&w=majority'),
        TrackModule,
        AlbumModule,
        ArtistModule,
        FileService
    ],
})
export class AppModule {
}
