import * as React from 'react';
import type { NextPage } from 'next';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const Bills: NextPage = () => {
    return (
      <Container maxWidth="lg">
        <Typography variant="h5" component="h1"  gutterBottom>
        Monthly bill tracking
        </Typography>
      </Container>
    );
  };
  
export default Bills;