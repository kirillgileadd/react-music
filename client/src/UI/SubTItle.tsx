import {styled} from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import {alpha} from "@mui/material";

export const SubTitle = styled(Typography)(({theme}) => ({
    textTransform: 'uppercase',
    color: alpha(theme.palette.grey["400"], 0.6),
    letterSpacing: '2px'
}))
