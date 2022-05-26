import {Body, Controller, Get, Param, Post} from "@nestjs/common";
import {ObjectId} from "mongoose";
import {ArtistService} from "./artist.service";
import {CreateArtistDto} from "./dto/create-artist.dto";

@Controller('/artists')
export class ArtistController {
    constructor(private artistService: ArtistService) {
    }

    @Post()
    create(@Body() dto: CreateArtistDto) {
        return this.artistService.create(dto)
    }

    @Get()
    getAll() {
        return this.artistService.getAll()
    }

    @Get(':id')
    getOne(@Param('id') id: ObjectId) {
        return this.artistService.getOne(id)
    }

    delete() {

    }
}