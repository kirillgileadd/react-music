import {styled} from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import {alpha, Button} from "@mui/material";

export const StyledButton = styled(Button)(({theme}) => ({
    color: theme.palette.text.primary,
    borderRadius: '40px',
    letterSpacing: '2px'
}))
