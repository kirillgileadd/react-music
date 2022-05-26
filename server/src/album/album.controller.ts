import {Body, Controller, Get, Param, Post, UploadedFiles, UseInterceptors} from "@nestjs/common";
import {CreateAlbumDto} from "./dto/create-album.dto";
import {AlbumService} from "./album.service";
import {ObjectId} from "mongoose";
import {FileFieldsInterceptor} from "@nestjs/platform-express";

@Controller('/albums')
export class AlbumController {
    constructor(private albumService: AlbumService) {
    }

    @Post()
    @UseInterceptors(FileFieldsInterceptor([
        { name: 'picture', maxCount: 1 },
    ]))
    create(@UploadedFiles() files, @Body() dto: CreateAlbumDto) {
        return this.albumService.create(dto, files.picture[0])
    }

    @Get()
    getAll() {
        return this.albumService.getAll()
    }

    @Get(':id')
    getOne(@Param('id') id: ObjectId) {
        return this.albumService.getOne(id)
    }

    delete() {

    }
}