import {Injectable} from "@nestjs/common";
import {CreateAlbumDto} from "./dto/create-album.dto";
import {InjectModel} from "@nestjs/mongoose";
import {Model, ObjectId} from "mongoose";
import {Album, AlbumDocument} from "./schema/album.schema";
import {FileService, FileType} from "../file/file.service";
import {Artist, ArtistDocument} from "../artist/schema/artist.schema";

@Injectable()
export class AlbumService {
    constructor(@InjectModel(Album.name) private albumModel: Model<AlbumDocument>,
                @InjectModel(Artist.name) private artistModel: Model<ArtistDocument>,
                private fileService: FileService) {
    }

    async create(dto: CreateAlbumDto, picture: string): Promise<Album> {
        const picturePath = this.fileService.createFile(FileType.IMAGE, picture)
        const album = await this.albumModel.create({...dto, picture: picturePath})
        const artist = await this.artistModel.findById(dto.artistId)
        artist.albums.push(album._id)
        await artist.save()
        return album
    }

    async getAll(): Promise<Album[]> {
        const albums = await this.albumModel.find()
        return albums
    }

    async getOne(id: ObjectId): Promise<Album> {
        const album = await this.albumModel.findById(id).populate('tracks')
        return album
    }

    async delete() {

    }
}