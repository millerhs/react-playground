import { Send } from '@mui/icons-material';
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import MenuItem from '@mui/material/MenuItem';
import Modal from '@mui/material/Modal';
import Paper, { PaperProps } from '@mui/material/Paper';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import React from 'react';
import Draggable from 'react-draggable';
import { ResizableBox } from 'react-resizable';
import { Rnd } from 'react-rnd';

enum MessageSource {
  Me,
  Other,
}

type Message = {
  message: string;
  source: MessageSource;
};

//TODO

const ChatWindow = (props: { handleClose: Function }) => {
  const [selectedEntity, setSelectedEntity] = React.useState<string>('1');
  const [messages, setMessages] = React.useState<Message[]>([]);
  const [text, setText] = React.useState<string>('');

  const sendMessage = () => {
    const newMessages = [...messages];

    newMessages.push({ message: text, source: MessageSource.Me });
    newMessages.push({
      message: 'Test other message',
      source: MessageSource.Other,
    });

    setMessages(newMessages);
    setText('');
  };
  console.log(messages);

  return (
    <Rnd
      sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      default={{ x: 0, y: 0, width: 500, height: '60%' }}
      cancel={'.cancelDrag'}
      bounds='window'
    >
      <Paper
        elevation={5}
        sx={{ cursor: 'move', height: '100%', width: '100%' }}
        style={{
          minWidth: 250,
          minHeight: 500,
          maxWidth: 900,
          maxHeight: 1000,
        }}
      >
        <Grid
          container
          direction='column'
          sx={{ width: '100%', height: '100%' }}
        >
          <Grid
            id='title-section'
            container
            item
            direction='row'
            spacing={1}
            alignItems='center'
            sx={{ padding: '1rem' }}
          >
            <Grid item>
              <Typography variant={'h5'}>Speaking with</Typography>
            </Grid>
            <Grid item xs className='cancelDrag'>
              <Select
                value={selectedEntity}
                onChange={(event: SelectChangeEvent) =>
                  setSelectedEntity(event.target.value)
                }
                fullWidth
              >
                <MenuItem value='1'>Entity One</MenuItem>
                <MenuItem value='2'>Entity Two</MenuItem>
                <MenuItem value='3'>Entity Three</MenuItem>
                <MenuItem value='4'>Entity Four</MenuItem>
              </Select>
            </Grid>
          </Grid>
          <Grid item>
            <Divider orientation='horizontal' />
          </Grid>
          <Grid
            id='messages-section'
            container
            item
            direction='column'
            xs
            className='cancelDrag'
            sx={{
              cursor: 'default',
              padding: '1rem',
            }}
            spacing={1}
          >
            {messages.map((value: Message) => {
              const isMyMessage = value.source === MessageSource.Me;
              return (
                <Grid
                  item
                  sx={{
                    textAlign: isMyMessage ? 'right' : 'left',
                  }}
                >
                  <TextField
                    value={value.message}
                    disabled
                    multiline
                    label={isMyMessage ? '' : 'From: Other'}
                    variant='filled'
                    sx={{
                      width: '50%',
                      backgroundColor: isMyMessage ? '#e8f5e9' : '#e3f2fd',
                    }}
                    inputProps={{
                      style: {
                        textAlign:
                          value.source === MessageSource.Me ? 'right' : 'left',
                      },
                    }}
                  />
                </Grid>
              );
            })}
          </Grid>
          <Grid
            id='textfield-section'
            container
            item
            className='cancelDrag'
            sx={{ cursor: 'default', padding: '1rem' }}
          >
            <Grid item xs>
              <form
                onSubmit={(event: any) => {
                  sendMessage();
                  event.stopPropagation();
                  event.preventDefault();
                }}
              >
                <TextField
                  value={text}
                  onChange={(event: any) => setText(event.target.value)}
                  fullWidth
                  placeholder='Send a message...'
                  multiline
                  maxRows={3}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position='end'>
                        <IconButton type='submit'>
                          <Send />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </form>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Rnd>
  );
};

export default ChatWindow;
