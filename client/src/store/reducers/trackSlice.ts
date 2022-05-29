import {ITrack} from "../../models/ITrack";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchTracks} from "../action-creators/track";

export interface TrackState {
    tracks: ITrack[];
    loading: boolean;
    error: string;
}

const initialState: TrackState  = {
    tracks: [],
    loading: false,
    error: '',
}

export const trackSlice = createSlice({
    name: 'track',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchTracks.pending.type]: (state) => {
            state.loading = true
        },
        [fetchTracks.fulfilled.type]: (state, action: PayloadAction<ITrack[]>) => {
            state.loading = false
                 state.tracks = action.payload
                 state.error = ''
        },
        [fetchTracks.rejected.type]: (state, action: PayloadAction<string>) => {
            state.error = action.payload
        },
    }
})

export default trackSlice.reducer