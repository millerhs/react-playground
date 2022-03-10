import TabContext from '@mui/lab/TabContext';
import TabPanel from '@mui/lab/TabPanel';
import Grid from '@mui/material/Grid';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import React from 'react';

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
    <Grid container direction='column' sx={{ width: '60vw', padidng: '4rem' }}>
      <TabContext value={selectedTab}>
        <Grid container item direction='row'>
          <Tabs value={selectedTab} onChange={handleTabChange}>
            <Tab label='Chat' />
          </Tabs>
        </Grid>
        <Grid container item sx={{ height: '100%' }}>
          <TabPanel value={selectedTab}>Hello</TabPanel>
        </Grid>
      </TabContext>
    </Grid>
  );
};

export default App;
