import React, {FC} from 'react';
import {styled} from "@mui/material/styles";
import {Card} from "@mui/material";
import playBtn from "../assets/playBtn.svg";
import {IArtist} from "../models/IArtist";
import Typography from "@mui/material/Typography";
import {RouterLink} from "../UI/RouterLink";

const Artist = styled(Card)(({theme}) => ({
    backgroundColor: theme.palette.secondary.main,
    padding: theme.spacing(1, 0),
    boxShadow: 'none',
    position: 'relative',
    textAlign: "center",
    "&:hover": {
        // backgroundColor: theme.palette.secondary.dark,
        "&::before": {
            transition: "all 0.3s",
            opacity: 1,
        }
    },
    bordeRadius: theme.shape.borderRadius,
    "&::before": {
        zIndex: 2,
        opacity: 0,
        content: '""',
        width: '50px',
        height: '50px',
        position: "absolute",
        left: "7px",
        top: "15px",
        backgroundImage: `url(${playBtn})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        color: "red",
    },
}))

export const ArtistImage = styled('img')`
  clip-path: circle(50%);
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: relative;
`


const ArtistItem: FC<IArtist> = ({albums, name, tracks, _id, picture}) => {
    return (
        <RouterLink to={_id}>
            <Artist>
                <ArtistImage src={picture ?? 'https://img08.rl0.ru/afisha/e904x508p0x178f4000x2286q85i/s.afisha.ru/mediastorage/92/02/a49aecadc4d0446785ee9cad0292.jpg'}/>
                <Typography variant={'body1'} sx={{mb: 1}}>
                    {name}
                </Typography>
                <Typography variant={'body2'} sx={{color: 'gray'}}>
                    Tracks: {tracks.length}
                </Typography>
            </Artist>
        </RouterLink>
    );
};

export default ArtistItem;