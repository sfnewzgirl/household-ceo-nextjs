import * as React from 'react';
import type { NextPage } from 'next';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

const Bills: NextPage = () => {
    return (
      <Container maxWidth="lg">
        <Typography variant="h5" component="h1"  gutterBottom>
        Monthly bill tracking
        </Typography>
        <Button variant="outlined" size="small">
            <Link href="/" underline="none">
                Home
            </Link>
        </Button>
      </Container>
    );
  };
  
export default Bills;