import React, {FC} from 'react';
import {Box, Typography} from "@mui/material";
import {StyledButton} from "../UI/StyledButton";
import {StyledModal, StyledModalContent} from "../UI/StyledModal";

interface AddMusicModalProps {
    open: boolean
    setOpen: (open: boolean) => void
}

const AddMusicModal: FC<AddMusicModalProps> = ({open, setOpen}) => {
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <StyledModal
            open={open}
            onClose={handleClose}
        >
            <StyledModalContent>
                <Typography variant="h6" component="h2">
                    Do you want to add an album or a single?
                </Typography>
                <Box sx={{mt: 2}}>
                    <StyledButton sx={{mr: 2}} variant='contained'>Single</StyledButton>
                    <StyledButton variant='contained'>Album</StyledButton>
                </Box>
            </StyledModalContent>
        </StyledModal>
    );
};

export default AddMusicModal;