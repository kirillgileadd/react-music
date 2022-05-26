import {Injectable} from "@nestjs/common";
import {InjectModel} from "@nestjs/mongoose";
import {Model, ObjectId} from "mongoose";
import {Artist, ArtistDocument} from "./schema/artist.schema";
import {CreateArtistDto} from "./dto/create-artist.dto";

@Injectable()
export class ArtistService {
    constructor(@InjectModel(Artist.name) private artistModel: Model<ArtistDocument>) {}

    async create (dto: CreateArtistDto): Promise<Artist> {
        const artist = await this.artistModel.create({...dto})
        return artist
    }
    async getAll (): Promise<Artist[]> {
        const artist = await this.artistModel.find()
        return artist
    }
    async getOne (id: ObjectId): Promise<Artist> {
        const artist = await this.artistModel.findById(id).populate('tracks').populate('albums')
        return artist
    }
    async delete () {

    }
}