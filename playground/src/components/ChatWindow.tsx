import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Modal from '@mui/material/Modal';
import Paper, { PaperProps } from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Draggable from 'react-draggable';

const ChatWindow = (props: { handleClose: Function }) => {
  return (
    <Draggable>
      <Paper elevation={5} sx={{ cursor: 'move' }}>
        <Typography variant={'h3'}>Drag meeeee</Typography>
      </Paper>
    </Draggable>
  );
};

export default ChatWindow;
