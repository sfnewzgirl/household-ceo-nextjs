import React, {useEffect, useState} from 'react';
import type { NextPage } from 'next';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import {HomePageProps, PagesData, TabPanelProps} from '../types/index.types';
import Typography from '@mui/material/Typography';

export async function getStaticProps() {
    const pagesData = require ('../data/pages.json');
    const pages = JSON.parse(pagesData);
    console.log('state props ', pages);
    return {
      props: {
        pages: pages.pages,
      },
    }
  }

function TabPanel(props: TabPanelProps) {
  const { children, index, pages, value, ...other } = props;
  console.log('pages ??? ', pages);
  
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

function VerticalTabs({pages}) {
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
      <TabPanel pages={pages} value={value} index={0}>
        <Typography variant="subtitle1" component="h1"  gutterBottom>
            Monthly bill tracking
        </Typography>
        <Button variant="outlined" size="small">
            <Link href="/bills" underline="none">
                Bills
            </Link>
        </Button>
      </TabPanel>
      <TabPanel pages={pages} value={value} index={1}>
        <Typography variant="subtitle1" component="h1"  gutterBottom>
            There's always something to do
        </Typography>
        <Button variant="outlined" size="small">
            <Link href="/honeydo" underline="none">
                Honey do
            </Link>
        </Button>
      </TabPanel>
      <TabPanel pages={pages} value={value} index={2}>
        <Typography variant="subtitle1" component="h1"  gutterBottom>
            Some things take a little more time and effort
        </Typography>
        <Button variant="outlined" size="small">
            <Link href="/projects" underline="none">
                Projects
            </Link>
        </Button>
      </TabPanel>
    </Box>
  );
}

const HomePage: NextPage = (props: HomePageProps) => {
    const {pages} = props;
    console.log('pages ?? ', props.pages);
    return (
      <Container maxWidth="lg">
        <Typography variant="h4" component="h1" gutterBottom>
        Welcome to Household CEO
        </Typography>
        <Typography variant="h5" component="h1"  gutterBottom>
        The place where running the household is a collective effort
        </Typography>
        <VerticalTabs pages={pages} />
      </Container>
    );
  };
  
export default HomePage