import * as React from 'react';
import type { NextPage } from 'next';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const HoneyDo: NextPage = () => {
    return (
      <Container maxWidth="lg">
        <Typography variant="h5" component="h1"  gutterBottom>
        There's always something to do
        </Typography>
        <Typography variant="h6" component="h1"  gutterBottom>
        What's on your list?
        </Typography>
      </Container>
    );
  };
  
export default HoneyDo;