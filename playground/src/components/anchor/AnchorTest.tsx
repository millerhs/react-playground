import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Tab } from '@mui/material';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import React from 'react';
import {
  useLocation,
  Location,
  useNavigate,
  NavigateFunction,
} from 'react-router-dom';

enum TabOptions {
  First = '#first',
  Second = '#second',
}

const AnchorTest = () => {
  const location: Location = useLocation();
  const navigate: NavigateFunction = useNavigate();
  const [selectedTab, setSelectedTab] = React.useState(location.hash);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    navigate(`${newValue}`);
    setSelectedTab(newValue);
  };

  return (
    <Box>
      <TabContext value={selectedTab}>
        <TabList onChange={handleChange}>
          <Tab label='First' value={TabOptions.First} />
          <Tab label='Second' value={TabOptions.Second} />
        </TabList>
        <TabPanel value={TabOptions.First}>First Tab</TabPanel>
        <TabPanel value={TabOptions.Second}>Second Tab</TabPanel>
      </TabContext>
    </Box>
  );
};

export default AnchorTest;
