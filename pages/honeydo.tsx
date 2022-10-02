import React, {useState} from 'react';
import type { NextPage } from 'next';
import Button from '@mui/material/Button';
import items from '../data/honeydo.json';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

const HoneyDo: NextPage = () => {
    console.log('items => ', items);

    return (
      <Container maxWidth="lg">
        <Typography variant="h5" component="h1"  gutterBottom>
        There's always something to do
        </Typography>
        <Typography variant="h6" component="h1"  gutterBottom>
        What's on your list?
        </Typography>
        <Button variant="outlined" size="small">
            <Link href="/" underline="none">
                Home
            </Link>
        </Button>
      </Container>
    );
  };
  
export default HoneyDo;