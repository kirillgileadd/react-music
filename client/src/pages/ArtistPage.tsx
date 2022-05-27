import React, {FC, useState} from 'react';
import {Box, Button, Typography} from "@mui/material";
import {ArtistImage} from "../components/ArtistItem";
import {IArtist} from "../models/IArtist";
import {Title} from "../UI/Title";
import {styled} from "@mui/material/styles";
import TrackList from "../components/TrackList";
import AlbumList from "../components/AlbumList";


const BackgroundImage = styled('img')(({theme}) => ({
    position: 'absolute',
    zIndex: 0,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: "100%",
    height: "100%",
    objectFit: 'cover',
    objectPosition: 'center',
    opacity: 0.6,
    filter: "blur(30px)",
}))


const BackgroundDark = styled(Box)(({theme}) => ({
    overflow: 'hidden',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: "100%",
    height: "300px",
    backgroundColor: "#000"
}))

const ArtistPage: FC = () => {
    const [artist, setArtist] = useState<IArtist>({
        _id: '127',
        albums: [
            {
                _id: '123',
                tracks: [],
                artist: 'Royal Blood',
                picture: 'https://images.genius.com/270493ff546c828953ff195975b3a847.1000x1000x1.png',
                name: 'trouble\'s coming'
            },
            {
                _id: '123',
                tracks: [],
                artist: 'Royal Blood',
                picture: 'https://images.genius.com/270493ff546c828953ff195975b3a847.1000x1000x1.png',
                name: 'trouble\'s coming'
            },
            {
                _id: '123',
                tracks: [],
                artist: 'Royal Blood',
                picture: 'https://images.genius.com/270493ff546c828953ff195975b3a847.1000x1000x1.png',
                name: 'trouble\'s coming'
            },
            {
                _id: '123',
                tracks: [],
                artist: 'Royal Blood',
                picture: 'https://images.genius.com/270493ff546c828953ff195975b3a847.1000x1000x1.png',
                name: 'trouble\'s coming'
            },
        ],
        tracks: [{
            _id: '123',
            name: "Oblivion",
            picture: 'https://2di5lnx4t933o2set3vt5ojl-wpengine.netdna-ssl.com/wp-content/uploads/2020/09/M_royalblood_92120.jpg',
            album: 'trouble\'s coming',
            text: 'text', listens: 10,
            audio: '123',
            artist: 'Royal Blood'
        },
            {
                _id: '124',
                name: "Radio",
                picture: 'https://2di5lnx4t933o2set3vt5ojl-wpengine.netdna-ssl.com/wp-content/uploads/2020/09/M_royalblood_92120.jpg',
                album: 'trouble\'s coming',
                text: 'text',
                listens: 10,
                audio: '123',
                artist: 'Royal Blood'
            },
            {
                _id: '125',
                name: "Oblivion",
                picture: 'https://2di5lnx4t933o2set3vt5ojl-wpengine.netdna-ssl.com/wp-content/uploads/2020/09/M_royalblood_92120.jpg',
                album: 'trouble\'s coming',
                text: 'text',
                listens: 10,
                audio: '123',
                artist: 'Royal Blood'
            }],
        name: 'Royal Blood',
        picture: 'https://yt3.ggpht.com/Au8KjCt3N0qeVqRmFqU0aW5B2QsZlqKoCAbSQm_TkADNxOiCp4ToaRzmRrexbLdXF18PVnVyQQ=s900-c-k-c0x00ffffff-no-rj'
    })

    return (
        <Box>
            <BackgroundDark>
                <BackgroundImage src={artist.picture} alt=""/>
            </BackgroundDark>
            <Box
                display='flex'
                alignItems='center'
            >
                <Box sx={{width: "150px"}}>
                    <ArtistImage src={artist.picture}/>
                </Box>
                <Box
                    sx={{zIndex: 10, ml: 2}}
                >
                    <Typography variant='h3' sx={{fontWeight: 'bold'}}>
                        {artist.name}
                    </Typography>

                    <Button>asd</Button>
                </Box>
            </Box>
            <Box sx={{mt: 8}}>
                <Box sx={{mb: 3}}>
                    <Title sx={{mb: 2}}>
                        Popular tracks
                    </Title>
                    <TrackList tracks={artist.tracks}/>
                </Box>
                <Title sx={{mb: 2}}>
                    Popular albums
                </Title>
                <AlbumList albums={artist.albums}/>
            </Box>

        </Box>
    );
};

export default ArtistPage;