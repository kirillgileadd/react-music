import React, {FC} from 'react';
import List from "./List";
import {Grid} from "@mui/material";
import AlbumItem from "./AlbumItem";
import {IAlbum} from "../models/IAlbum";

interface AlbumListProps {
    albums: IAlbum[]
}

const AlbumList:FC<AlbumListProps> = ({albums}) => {
    return (
        <Grid container spacing={2} >
            <List items={albums} renderItem={(album) =>
                <Grid item xs={2}>
                    <AlbumItem {...album}/>
                </Grid>}
            />
        </Grid>
    );
};

export default AlbumList;