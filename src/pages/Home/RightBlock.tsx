import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
<<<<<<< HEAD
import VPODetail from '../VPODetails'
=======
import VPOOverview from '../../components/organismos/VPOOverview';
>>>>>>> 5e7026100be55ccc82d00a6caf8f22708bb28b5c

export default function RightBlock() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Overview" value="Overview" />
            <Tab label="VPO Details" value="VPO-Details" />
            <Tab label="CPO Details" value="CPO-Details" />
            <Tab label="Delivery" value="Delivery" />
            <Tab label="Attachments" value="Attachments" />
            <Tab label="MultiView Reflist" value="MultiView-Reflist" />
          </TabList>
        </Box>
<<<<<<< HEAD
        <TabPanel value="Overview">Item One</TabPanel>
        <TabPanel value="VPO-Details"><VPODetail /></TabPanel>
=======
        <TabPanel value="Overview" sx={{
          padding: '12px'
        }}><VPOOverview /></TabPanel>
        <TabPanel value="VPO-Details">Item Two</TabPanel>
>>>>>>> 5e7026100be55ccc82d00a6caf8f22708bb28b5c
        <TabPanel value="CPO-Details">Item Three</TabPanel>
        <TabPanel value="Delivery">Delivery</TabPanel>
        <TabPanel value="Attachments">Attachments</TabPanel>
        <TabPanel value="MultiView-Reflist">MultiView Reflist</TabPanel>
      </TabContext>
    </Box>
  );
}
