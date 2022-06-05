import React, {FC} from 'react';
import {Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextField} from "@mui/material";
import styled from "@emotion/styled";
import {useAppSelector} from "../hook/redux";

const SteledMenuItem = styled(MenuItem)`
  color: #000
`

const CreateTrackForm: FC = () => {
    const [artist, setArtist] = React.useState<string>('');
    const {artists, loading, error} = useAppSelector(state => state.artist)
    console.log(artists);

    const handleChange = (event: SelectChangeEvent) => {
        setArtist(event.target.value);
    };

    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': {m: 1, width: '25ch', "& input": {color: 'black'}},
            }}
            noValidate
            autoComplete="off"
        >
            <TextField
                label={"Track name"}
            />
            <TextField
                label={"Liric"}
            />
            <FormControl fullWidth>
                <InputLabel sx={{color: 'black'}} id="demo-simple-select-label">Age</InputLabel>
                <Select
                    sx={{color: 'black !important'}}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={artist}
                    label="Age"
                    onChange={handleChange}
                >
                    {artists.map(artist => <SteledMenuItem
                        value={artist._id}
                        key={artist._id}
                    >{artist.name}</SteledMenuItem>)}
                </Select>
            </FormControl>

        </Box>
    );
};

export default CreateTrackForm;