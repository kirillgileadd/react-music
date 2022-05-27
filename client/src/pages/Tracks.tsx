import React, {FC, useState} from 'react';
import {ITrack} from "../models/ITrack";
import {Title} from "../UI/Title";
import TrackList from "../components/TrackList";

const Tracks: FC = () => {
    const [tracks, setTracks] = useState<ITrack[]>([
        {
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
        }
    ])

    return (
        <div>
            <Title
                variant='h5'
                sx={{mb: 2}}
            >
                Tracks
            </Title>

            <TrackList tracks={tracks}/>

        </div>
    );
};

export default Tracks;