import React, {FC, useState} from 'react';
import {Title} from "../UI/Title";
import {IAlbum} from "../models/IAlbum";
import List from "../components/List";
import AlbumItem from "../components/AlbumItem"
import {Grid} from "@mui/material";
import AlbumList from "../components/AlbumList";

const Albums: FC = () => {
    const [albums, setAlbums] = useState<IAlbum[]>([
        {
            _id: '123',
            tracks: [],
            artist: 'Royal Blood',
            picture: 'https://images.genius.com/270493ff546c828953ff195975b3a847.1000x1000x1.png',
            name: 'trouble\'s coming'
        },
        {
            _id: '124',
            tracks: [],
            artist: 'Royal Blood',
            picture: 'https://images.genius.com/270493ff546c828953ff195975b3a847.1000x1000x1.png',
            name: 'trouble\'s coming'
        },
        {
            _id: '125',
            tracks: [],
            artist: 'Royal Blood',
            picture: 'https://images.genius.com/270493ff546c828953ff195975b3a847.1000x1000x1.png',
            name: 'trouble\'s coming'
        },
        {
            _id: '126',
            tracks: [],
            artist: 'Royal Blood',
            picture: 'https://images.genius.com/270493ff546c828953ff195975b3a847.1000x1000x1.png',
            name: 'trouble\'s coming'
        },
        {
            _id: '127',
            tracks: [],
            artist: 'Royal Blood',
            picture: 'https://images.genius.com/270493ff546c828953ff195975b3a847.1000x1000x1.png',
            name: 'trouble\'s coming'
        },
        {
            _id: '128',
            tracks: [],
            artist: 'Royal Blood',
            picture: 'https://images.genius.com/270493ff546c828953ff195975b3a847.1000x1000x1.png',
            name: 'trouble\'s coming'
        },
        {
            _id: '129',
            tracks: [],
            artist: 'Royal Blood',
            picture: 'https://images.genius.com/270493ff546c828953ff195975b3a847.1000x1000x1.png',
            name: 'trouble\'s coming'
        },
    ])

    return (
        <div>
            <Title sx={{mb: 2}}>
                Albums
            </Title>

            <AlbumList albums={albums}/>
        </div>

    );
};

export default Albums;