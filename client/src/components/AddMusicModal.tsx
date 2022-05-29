import React, {FC} from 'react';
import {Box, Modal, Typography, Button} from "@mui/material";
import {styled} from "@mui/material/styles";
import {StyledButton} from "../UI/StyledButton";
import {RouterLink} from "../UI/RouterLink";
import {RouteNames} from "../routes"

const MusicModalContent = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  background-color: white;
  box-shadow: none;
  padding: 32px;
  border: 0;
  border-radius: 10px;
`

const MusicModal = styled(Modal)`
  color: #000;
`

interface AddMusicModalProps {
    open: boolean
    setOpen: (open: boolean) => void
}

const AddMusicModal:FC<AddMusicModalProps> = ({open, setOpen}) => {
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <MusicModal
            open={open}
            onClose={handleClose}
        >
            <MusicModalContent >
                <Typography variant="h6" component="h2">
                    Do you want to add an album or a single?
                </Typography>
                <Box sx={{ mt: 2 }}>
                    <RouterLink to={RouteNames.ADD_TRACK}>
                        <StyledButton sx={{mr: 2}} variant='contained'>Single</StyledButton>
                    </RouterLink>

                    <StyledButton variant='contained'>Album</StyledButton>
                </Box>
            </MusicModalContent>
        </MusicModal>
    );
};

export default AddMusicModal;