import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.material.blue.light.css';
import TreeListExample from './components/treelist/TreeListExample';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import ChatContainer from './components/chat/ChatContainer';
import Home from './components/Home';
import AnchorTest from './components/AnchorTest';
import { AppBar, Button, ButtonGroup, Grid, Toolbar } from '@mui/material';
import TableTest from './components/TableTest';
import FormTest from './components/FormTest';
import RichTextTest from './components/RichTextText';
import UpdateUrlTest from './components/UpdateUrlTest';
import MuiRteTest from './components/MuiRteTest';
import { createTheme, Theme, ThemeProvider } from '@mui/material/styles';

const defaultTheme: Theme = createTheme({});

const App = () => {
  return (
    <BrowserRouter basename='/react-playground'>
      <ThemeProvider theme={defaultTheme}>
        <Grid container direction='column' sx={{ height: '100%' }}>
          <AppBar position='static'>
            <Toolbar>
              <ButtonGroup
                variant='text'
                aria-label='text button group'
                sx={{ color: 'white' }}
              >
                <Button component={Link} to='/' sx={{ color: 'white' }}>
                  Home
                </Button>
                <Button component={Link} to='/chat' sx={{ color: 'white' }}>
                  Chat
                </Button>
                <Button component={Link} to='/tree' sx={{ color: 'white' }}>
                  Tree
                </Button>
                <Button component={Link} to='/anchor' sx={{ color: 'white' }}>
                  Anchor
                </Button>
                <Button
                  component={Link}
                  to='/datatable'
                  sx={{ color: 'white' }}
                >
                  Data Table
                </Button>
                <Button component={Link} to='/form' sx={{ color: 'white' }}>
                  Form
                </Button>
                <Button component={Link} to='/rte' sx={{ color: 'white' }}>
                  RTE
                </Button>
                <Button component={Link} to='/url' sx={{ color: 'white' }}>
                  URL
                </Button>
                <Button component={Link} to='/mui-rte' sx={{ color: 'white' }}>
                  MUI RTE
                </Button>
              </ButtonGroup>
            </Toolbar>
          </AppBar>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/chat' element={<ChatContainer />} />
            <Route path='/tree' element={<TreeListExample />} />
            <Route path='/anchor' element={<AnchorTest />} />
            <Route path='/datatable' element={<TableTest />} />
            <Route path='/form' element={<FormTest />} />
            <Route path='/rte' element={<RichTextTest />} />
            <Route path='/url' element={<UpdateUrlTest />} />
            <Route path='/mui-rte' element={<MuiRteTest />} />
          </Routes>
        </Grid>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
