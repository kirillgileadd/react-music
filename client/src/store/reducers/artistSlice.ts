import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IArtist} from "../../models/IArtist";
import {fetchArtists} from "../action-creators/artist";

export interface ArtistState {
    artists: IArtist[];
    loading: boolean;
    error: string;
}

const initialState: ArtistState = {
    artists: [],
    loading: false,
    error: '',
}

export const artistSlice = createSlice({
    name: 'track',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchArtists.pending, (state, action) => {
                state.loading = true
            })
            .addCase(fetchArtists.fulfilled, (state, action: PayloadAction<IArtist[]>) => {
                state.loading = false
                state.artists = action.payload
                state.error = ''
            })
            .addCase(fetchArtists.rejected, (state, action ) => {
                // @ts-ignore
                state.error = action.payload
            })
    }
})

export default artistSlice.reducer