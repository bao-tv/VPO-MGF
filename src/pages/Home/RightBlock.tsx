import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import {xmlToJson} from 'utils';
// import {json.txt} from '/json.txt';
import VPOOverview from 'components/organismos/VPOOverview';
import VPODetails from '../VPODetails';
import CPODetails from '../CPODetails';
// import Data from 'json.json';

export default function RightBlock() {
  const [value, setValue] = React.useState('Overview');
  const [jsonData, setJsonData] = React.useState([]);
  // console.log('bao jsonData: ', jsonData);

  React.useEffect(() => {
    fetch('/data.json')
      .then(response => response.json())
      .then(data => {
        setJsonData(data);
      })
      .catch(error => {
        console.error('Error fetching JSON data:', error);
      });
  }, []);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  // console.log('bao xmlData: ', xmlData ? xmlData['ns0:LSPPurchaseOrders']['ns1:LSPPurchaseOrder']['LSPPurchaseHeader'] : 'xmlData is null or undefined');

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
        <TabPanel value="Overview" sx={{
          padding: '12px'
        }}><VPOOverview /></TabPanel>
        <TabPanel value="VPO-Details" sx={{padding: '12px'}}><VPODetails dataVPODetails={jsonData.length ? jsonData : []}/></TabPanel>
        <TabPanel value="CPO-Details" sx={{padding: '12px'}}><CPODetails dataCPODetails={jsonData.length ? jsonData[4] : []}/></TabPanel>
        <TabPanel value="Delivery">Delivery</TabPanel>
        <TabPanel value="Attachments">Attachments</TabPanel>
        <TabPanel value="MultiView-Reflist">MultiView Reflist</TabPanel>
      </TabContext>
    </Box>
  );
}
