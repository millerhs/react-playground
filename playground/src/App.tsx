import TabContext from '@mui/lab/TabContext';
import TabPanel from '@mui/lab/TabPanel';
import Grid from '@mui/material/Grid';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import React from 'react';
import ChatContainer from './components/ChatContainer';

enum TabOptions {
  Chat = 'Chat',
}

const App = () => {
  const [selectedTab, setSelectedTab] = React.useState<TabOptions>(
    TabOptions.Chat
  );

  const handleTabChange = (
    event: React.SyntheticEvent,
    newValue: TabOptions
  ) => {
    setSelectedTab(newValue);
  };

  return (
    <Grid
      container
      direction='column'
      alignItems='center'
      sx={{ width: '100vw', height: '100vh', padding: '4rem' }}
    >
      <Grid container sx={{ width: '70%', height: '100%' }}>
        <TabContext value={selectedTab}>
          <Grid container item direction='row'>
            <Tabs
              value={selectedTab}
              onChange={handleTabChange}
              variant='fullWidth'
              sx={{ width: '100%' }}
            >
              <Tab label='Chat' value={TabOptions.Chat} />
            </Tabs>
          </Grid>
          <Grid container item sx={{ height: '100%', width: '100%' }}>
            <TabPanel value={TabOptions.Chat}>
              <ChatContainer />
            </TabPanel>
          </Grid>
        </TabContext>
      </Grid>
    </Grid>
  );
};

export default App;
