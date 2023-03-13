import * as React from 'react';

import Modal from '@mui/material/Modal';
import {Box, SxProps, Theme} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface ICustomModalProps {
  /**
   * State which is used to show the modal.
   * @default false
   */
  isVisible: boolean;
  /**
   * Function to be called when the modal is closed.
   * @default () => null
   */
  onClose: () => void;
  /**
   * Children of the modal.
   */
  children: React.ReactNode;
}

const style: SxProps<Theme> = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '77%',
  height: 'calc(100vh - 40px)',
  maxHeight: 'calc(100vh - 40px)',
  overflowY: 'auto',
  bgcolor: 'background.paper',
  border: '1px solid #000',
  borderRadius: 1,
  p: 4,
};

const CustomModal = ({isVisible = false, children, onClose = () => null}: ICustomModalProps) => (
  <div>
    <Modal
      open={isVisible}
      onClose={onClose}
      aria-labelledby="keep-mounted-modal-title"
      aria-describedby="keep-mounted-modal-description"
    >
      <Box sx={style}>
        <Box sx={{width: '100%', height: 30}}>
          <CloseIcon onClick={onClose} />
        </Box>
        {children}
      </Box>
    </Modal>
  </div>
);
export default CustomModal;
