import axios from "axios";
import {ITrack} from "../../models/ITrack";
import {createAsyncThunk} from "@reduxjs/toolkit";


export const fetchTracks = createAsyncThunk(
    'track/fetchAll',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get<ITrack[]>('http://localhost:5000/tracks')
            return response.data
        } catch (e) {
            return thunkAPI.rejectWithValue('Fetching Tracks error')
        }
    }
)
