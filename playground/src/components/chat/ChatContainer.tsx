import { Chat } from '@mui/icons-material';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import Typography from '@mui/material/Typography';
import React from 'react';
import ChatWindow from './ChatWindow';

const ChatContainer = () => {
  const [showChatWindow, setShowChatWindow] = React.useState<boolean>(false);

  return (
    <Box sx={{ height: '100%', width: '100%' }}>
      <Typography variant='h5' sx={{ padding: '1rem' }}>
        Click Floating Action Button to Open Chat Window
      </Typography>
      <Fab
        sx={{ position: 'absolute', bottom: '2rem', right: '2rem' }}
        color='primary'
        onClick={() => setShowChatWindow(!showChatWindow)}
      >
        <Chat />
      </Fab>
      {showChatWindow && (
        <ChatWindow handleClose={() => setShowChatWindow(false)} />
      )}
    </Box>
  );
};

export default ChatContainer;
