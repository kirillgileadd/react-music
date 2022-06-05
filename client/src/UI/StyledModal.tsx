import {styled} from "@mui/material/styles";
import {Box, Modal} from "@mui/material";

export const StyledModalContent = styled(Box)`
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

export const StyledModal = styled(Modal)`
  color: #000;
`
