import React, {FC, useEffect} from 'react';
import {Title} from "../../UI/Title";
import {Grid} from "@mui/material";
import List from "../../components/List";
import ArtistItem from "../../components/ArtistItem";
import {useAppDispatch, useAppSelector} from "../../hook/redux";
import {fetchArtists} from "../../store/action-creators/artist";

const Artists: FC = () => {
    const dispatch = useAppDispatch()
    const {artists, loading, error} = useAppSelector(state => state.artist)

    return (
        <>
            <Title>
                Artists
            </Title>
            {!loading && <Grid container spacing={2}>
                <List items={artists} renderItem={(artist) =>
                    <Grid item xs={2} key={artist._id}>
                        <ArtistItem {...artist}/>
                    </Grid>}
                />
            </Grid>
            }
        </>
    );
};

export default Artists;