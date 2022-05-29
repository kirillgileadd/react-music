import React, {FC} from 'react';
import {IAlbum} from "../models/IAlbum";
import {styled} from "@mui/material/styles";
import {Card} from "@mui/material";
import playBtn from "../assets/playBtn.svg";
import Typography from "@mui/material/Typography";
import {RouterLink} from "../UI/RouterLink";

const Album = styled(Card)(({theme}) => ({
    padding: theme.spacing(1),
    boxShadow: 'none',
    position: 'relative',
    backgroundColor: theme.palette.secondary.dark,
    "&:hover": {
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

const AlbumImage = styled('img')`
  width: 100%;
  height: 100%;
  object-fit: cover;
  margin-bottom: 8px;
`

const AlbumItem:FC<IAlbum> = ({picture, artist,tracks,_id,name}) => {
    return (
        <RouterLink to={`/albums/${_id}`}>
            <Album>
                <AlbumImage src={picture} />
                <Typography variant={'body1'}>
                    {name}
                </Typography>
            </Album>
        </RouterLink>
    );
};

export default AlbumItem;