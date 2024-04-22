// EcosystemSection.js

import React from 'react';
import { Typography, Grid, Card, CardContent, CardActions, Button, styled } from '@mui/material';
import { keyframes } from '@mui/system';

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const EcosystemCard = styled(Card)(({ theme }) => ({
  maxWidth: 400,
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-10px)',
  },
  animation: `${fadeIn} 1s ease-in-out`,
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[8],
  borderRadius: theme.spacing(2),
}));

const EcosystemCardContent = styled(CardContent)(({ theme }) => ({
  padding: theme.spacing(4),
}));

const EcosystemCardActions = styled(CardActions)(({ theme }) => ({
  justifyContent: 'center',
  padding: theme.spacing(2),
  backgroundColor: theme.palette.secondary.main,
}));

const EcosystemButton = styled(Button)(({ theme }) => ({
  color: theme.palette.secondary.contrastText,
  fontWeight: 'bold',
  textTransform: 'uppercase',
  '&:hover': {
    backgroundColor: theme.palette.secondary.dark,
  },
}));

const EcosystemSection = () => (
  <Grid container spacing={6} justifyContent="center">
    {/* Ecosystem Item 1 */}
    <Grid item>
      <EcosystemCard>
        <EcosystemCardContent>
          <Typography variant="h5" gutterBottom>
            Package Manager
          </Typography>
          <Typography>
            Easily manage dependencies and libraries with our package manager.
          </Typography>
        </EcosystemCardContent>
        <EcosystemCardActions>
          <EcosystemButton size="large">Explore</EcosystemButton>
        </EcosystemCardActions>
      </EcosystemCard>
    </Grid>
    {/* Add more ecosystem items */}
  </Grid>
);

export default EcosystemSection;
