import React, {useState} from 'react';
import type { NextPage } from 'next';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

function VerticalTabs() {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 224 }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        <Tab label="Bills" {...a11yProps(0)} />
        <Tab label="Honey Do" {...a11yProps(1)} />
        <Tab label="Projects" {...a11yProps(2)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Typography variant="subtitle1" component="h1"  gutterBottom>
            Monthly bill tracking
        </Typography>
        <Button variant="outlined" size="small">
            Bills
        </Button>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Typography variant="subtitle1" component="h1"  gutterBottom>
            There's always something to do
        </Typography>
        <Button variant="outlined" size="small">
            Honey Do
        </Button>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Typography variant="subtitle1" component="h1"  gutterBottom>
            Some things take a little more time and effort
        </Typography>
        <Button variant="outlined" size="small">
            Projects
        </Button>
      </TabPanel>
    </Box>
  );
}

const HomePage: NextPage = () => {
    return (
      <Container maxWidth="lg">
        <Typography variant="h4" component="h1" gutterBottom>
        Welcome to Household CEO
        </Typography>
        <Typography variant="h5" component="h1"  gutterBottom>
        The place where running the household is a collective effort
        </Typography>
        <VerticalTabs />
      </Container>
    );
  };
  
export default HomePage