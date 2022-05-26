import {Injectable} from "@nestjs/common";
import {Track, TrackDocument} from "./schema/track.schema";
import {Model, ObjectId} from "mongoose";
import {InjectModel} from "@nestjs/mongoose";
import {CreateTrackDto} from "./dto/create-track.dto";
import {Album, AlbumDocument} from "../album/schema/album.schema";
import {FileService, FileType} from "../file/file.service";
import {Artist, ArtistDocument} from "../artist/schema/artist.schema";

@Injectable()
export class TrackService {
    constructor(@InjectModel(Track.name) private trackModel: Model<TrackDocument>,
                @InjectModel(Album.name) private albumModel: Model<AlbumDocument>,
                @InjectModel(Artist.name) private artistModel: Model<ArtistDocument>,
                private fileService: FileService) {
    }

    async create(dto: CreateTrackDto, picture, audio): Promise<Track> {
        const audioPath = this.fileService.createFile(FileType.AUDIO, audio)
        const picturePath = this.fileService.createFile(FileType.IMAGE, picture)
        const track = await this.trackModel.create({...dto, listens: 0, audio: audioPath, picture: picturePath})
        const artist = await this.artistModel.findById(dto.artistId)
        artist.tracks.push(track._id)
        await artist.save()
        if (dto.albumId) {
            const album = await this.albumModel.findById(dto.albumId)
            album.tracks.push(track._id)
            await album.save()
        }
        return track
    }

    async getAll(count = 10, offset = 0): Promise<Track[]> {
        const tracks = await this.trackModel.find().skip(offset).limit(count)
        return tracks
    }

    async getOne(id: ObjectId): Promise<Track> {
        const track = await this.trackModel.findById(id)
        return track
    }

    async delete(id: ObjectId): Promise<ObjectId> {
        const track = await this.trackModel.findByIdAndDelete(id)
        return track._id
    }

    async listen(id: ObjectId) {
        const track = await this.trackModel.findById(id)
        track.listens += 1
        track.save()
    }
}