import axios from "axios";
import {createAsyncThunk} from "@reduxjs/toolkit";
import {IArtist} from "../../models/IArtist";


export const fetchArtists = createAsyncThunk(
    'artist/fetchAll',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get<IArtist[]>('http://localhost:5000/artists')
            return response.data
        } catch (e) {
            return thunkAPI.rejectWithValue('Fetching Tracks error')
        }
    }
)
