import React, {FC} from 'react';
import {ITrack} from "../models/ITrack";
import {styled} from "@mui/material/styles";
import {Card, Grid} from "@mui/material";
import Typography from "@mui/material/Typography";
import playBtn from '../assets/playBtn.svg'



const Track = styled(Card)(({theme}) => ({
    backgroundColor: theme.palette.secondary.main,
    padding: theme.spacing(1, 0),
    boxShadow: 'none',
    position: 'relative',
    "&:hover": {
        backgroundColor: theme.palette.secondary.dark,
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
        width: '35px',
        height: '35px',
        position: "absolute",
        left: "7px",
        top: "15px",
        backgroundImage:  `url(${playBtn})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        color: "red",
    },
}))

const TrackImage = styled('img')`
  width: 50px;
  height: 50px;
  object-fit: cover;
  position: relative;
`

const TrackItem: FC<ITrack> =
    ({
         _id,
         artist,
         audio,
         listens,
         name,
         text,
         picture,
     }) => {
        return (
            <Track>
                <Grid container alignItems='center'>
                    <Grid item xs={5.5}
                          display='flex'
                          alignItems='center'
                    >
                        <TrackImage src={picture} alt=""/>
                        <Typography sx={{ml: 2}}>{name}</Typography>
                    </Grid>
                    <Grid item xs={3}>{artist.name}</Grid>
                    <Grid item xs={3}>Single</Grid>
                    <Grid item xs={0.5}>TIME</Grid>
                </Grid>
            </Track>
        );
    };

export default TrackItem;