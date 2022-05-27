import React, {FC} from 'react';
import {Grid} from "@mui/material";
import {SubTitle} from "../UI/SubTItle";
import List from "./List";
import TrackItem from "./TrackItem";
import Box from "@mui/material/Box";
import {ITrack} from "../models/ITrack";

interface TrackListProps {
    tracks: ITrack[]
}

const TrackList:FC<TrackListProps> = ({tracks}) => {
    return (
        <Box>
            <Grid container>
                <Grid item xs={5.5}> <SubTitle variant='body2'> TRACK</SubTitle></Grid>
                <Grid item xs={3}> <SubTitle variant='body2'> ARTIST</SubTitle></Grid>
                <Grid item xs={3}> <SubTitle variant='body2'> ALBUM</SubTitle></Grid>
                <Grid item xs={0.5}> <SubTitle variant='body2'> TIME</SubTitle></Grid>
            </Grid>
            <List items={tracks} renderItem={(track) => <TrackItem {...track}/>}/>
        </Box>
    );
};

export default TrackList;