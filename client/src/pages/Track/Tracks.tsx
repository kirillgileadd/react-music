import React, {FC, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hook/redux";
import {fetchTracks} from "../../store/action-creators/track";
import {Title} from "../../UI/Title";
import TrackList from "../../components/TrackList";


const Tracks: FC = () => {
    // const [tracks2, setTracks] = useState<ITrack[]>([
    //     {
    //         _id: '123',
    //         name: "Oblivion",
    //         picture: 'https://2di5lnx4t933o2set3vt5ojl-wpengine.netdna-ssl.com/wp-content/uploads/2020/09/M_royalblood_92120.jpg',
    //         album: 'trouble\'s coming',
    //         text: 'text', listens: 10,
    //         audio: '123',
    //         artist: 'Royal Blood'
    //     },
    //     {
    //         _id: '124',
    //         name: "Radio",
    //         picture: 'https://2di5lnx4t933o2set3vt5ojl-wpengine.netdna-ssl.com/wp-content/uploads/2020/09/M_royalblood_92120.jpg',
    //         album: 'trouble\'s coming',
    //         text: 'text',
    //         listens: 10,
    //         audio: '123',
    //         artist: 'Royal Blood'
    //     },
    //     {
    //         _id: '125',
    //         name: "Oblivion",
    //         picture: 'https://2di5lnx4t933o2set3vt5ojl-wpengine.netdna-ssl.com/wp-content/uploads/2020/09/M_royalblood_92120.jpg',
    //         album: 'trouble\'s coming',
    //         text: 'text',
    //         listens: 10,
    //         audio: '123',
    //         artist: 'Royal Blood'
    //     }
    // ])
    const dispatch = useAppDispatch()
    const {tracks, loading, error} = useAppSelector(state => state.track)

    useEffect(() => {
        dispatch(fetchTracks())
    }, [])

    return (
        <div>
            <Title
                variant='h5'
                sx={{mb: 2}}
            >
                Tracks
            </Title>
            {loading ? <div>LOADING</div> : <TrackList tracks={tracks}/>}
            {error && <div>{error}</div> }
        </div>
    );
};

export default Tracks;