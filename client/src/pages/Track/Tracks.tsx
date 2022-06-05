import React, {FC, useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from "../../hook/redux";
import {fetchTracks} from "../../store/action-creators/track";
import {Title} from "../../UI/Title";
import TrackList from "../../components/TrackList";
import {Box} from "@mui/material";
import {StyledButton} from "../../UI/StyledButton";
import CreateTrackModal from "./CreateTrackModal";


const Tracks: FC = () => {
    const dispatch = useAppDispatch()
    const [modalVisible, setModalVisible] = useState<boolean>(false)
    const {tracks, loading, error} = useAppSelector(state => state.track)

    useEffect(() => {
        dispatch(fetchTracks())
    }, [])

    return (
        <div>
            <Box
                display='flex'
                justifyContent='space-between'
                alignItems='flex-start'
            >
                <Title
                    variant='h5'
                    sx={{mb: 2}}
                >
                    Tracks
                </Title>
                <StyledButton
                    onClick={() => setModalVisible(true)}
                    variant='contained'>
                    Add Track
                </StyledButton>
            </Box>
            {loading ? <div>LOADING</div> : <TrackList tracks={tracks}/>}
            {error && <div>{error}</div> }
            <CreateTrackModal open={modalVisible} handleModal={setModalVisible}/>
        </div>
    );
};

export default Tracks;