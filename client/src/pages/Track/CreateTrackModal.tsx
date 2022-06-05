import React, {FC} from 'react';
import {Box, Modal,Typography} from "@mui/material";
import {StyledModal, StyledModalContent} from "../../UI/StyledModal";
import CreateTrackForm from "../../components/CreateTrackForm";

interface CreateTrackModalProps {
    open: boolean
    handleModal: (bol: boolean) => void
}

const CreateTrackModal:FC<CreateTrackModalProps> = ({open, handleModal}) => {
    return (
        <StyledModal
            open={open}
            onClose={() => handleModal(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <StyledModalContent >
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Text in a modal
                </Typography>
                <CreateTrackForm/>
            </StyledModalContent>
        </StyledModal>
    );
};

export default CreateTrackModal;