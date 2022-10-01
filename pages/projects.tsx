import * as React from 'react';
import type { NextPage } from 'next';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

const Projects: NextPage = () => {
    return (
      <Container maxWidth="lg">
        <Typography variant="h5" component="h1"  gutterBottom>
        Some things take a little more time and effort
        </Typography>
        <Button variant="outlined" size="small">
            <Link href="/" underline="none">
                Home
            </Link>
        </Button>
      </Container>
    );
  };
  
export default Projects;