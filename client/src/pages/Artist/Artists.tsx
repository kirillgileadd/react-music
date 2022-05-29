import React, {FC, useState} from 'react';
import {Title} from "../../UI/Title";
import {Grid} from "@mui/material";
import List from "../../components/List";
import AlbumItem from "../../components/AlbumItem";
import {IArtist} from "../../models/IArtist";
import ArtistItem from "../../components/ArtistItem";

const Artists: FC = () => {
    const [artists, setArtists] = useState<IArtist[]>([
        {
            _id: '123',
            albums: [],
            tracks: [],
            name: 'Royal Blood',
            picture: 'https://yt3.ggpht.com/Au8KjCt3N0qeVqRmFqU0aW5B2QsZlqKoCAbSQm_TkADNxOiCp4ToaRzmRrexbLdXF18PVnVyQQ=s900-c-k-c0x00ffffff-no-rj'
        },    {
            _id: '124',
            albums: [],
            tracks: [],
            name: 'Royal Blood',
            picture: 'https://yt3.ggpht.com/Au8KjCt3N0qeVqRmFqU0aW5B2QsZlqKoCAbSQm_TkADNxOiCp4ToaRzmRrexbLdXF18PVnVyQQ=s900-c-k-c0x00ffffff-no-rj'
        },    {
            _id: '125',
            albums: [],
            tracks: [],
            name: 'Royal Blood',
            picture: 'https://yt3.ggpht.com/Au8KjCt3N0qeVqRmFqU0aW5B2QsZlqKoCAbSQm_TkADNxOiCp4ToaRzmRrexbLdXF18PVnVyQQ=s900-c-k-c0x00ffffff-no-rj'
        },    {
            _id: '126',
            albums: [],
            tracks: [],
            name: 'Royal Blood',
            picture: 'https://yt3.ggpht.com/Au8KjCt3N0qeVqRmFqU0aW5B2QsZlqKoCAbSQm_TkADNxOiCp4ToaRzmRrexbLdXF18PVnVyQQ=s900-c-k-c0x00ffffff-no-rj'
        },    {
            _id: '127',
            albums: [],
            tracks: [],
            name: 'Royal Blood',
            picture: 'https://yt3.ggpht.com/Au8KjCt3N0qeVqRmFqU0aW5B2QsZlqKoCAbSQm_TkADNxOiCp4ToaRzmRrexbLdXF18PVnVyQQ=s900-c-k-c0x00ffffff-no-rj'
        },
    ])
    return (
        <>
            <Title>
                Artists
            </Title>

            <Grid container spacing={2}>
                <List items={artists} renderItem={(artist) =>
                    <Grid item xs={2} key={artist._id}>
                        <ArtistItem {...artist}/>
                    </Grid>}
                />
            </Grid>
        </>
    );
};

export default Artists;