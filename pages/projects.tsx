import * as React from 'react';
import type { NextPage } from 'next';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const Projects: NextPage = () => {
    return (
      <Container maxWidth="lg">
        <Typography variant="h5" component="h1"  gutterBottom>
        Some things take a little more time and effort
        </Typography>
      </Container>
    );
  };
  
export default Projects;