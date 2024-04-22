import React from 'react';
import { Typography, Grid, Card, CardContent, CardActions, Button, Box, Container, styled, Divider } from '@mui/material';
import { keyframes } from '@mui/system';
import HeroSection from '../../components/HeroSection/HeroSection';
import CommunitySection from '../../components/CommunitySection/CommunitySection';
import CodeExamplesSection from '../../components/CodeExamplesSection/CodeExamplesSection';
import EcosystemSection from '../../components/EcosystemSection/EcosystemSection';
import FeaturesSection from '../../components/FeaturesSection/FeaturesSection'; 
import AboutSection from '../../components/AboutSection/AboutSection';
// import '../styles/theme.js';

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

const StyledContainer = styled(Container)(({ theme }) => ({
  marginTop: theme.spacing(12),
  marginBottom: theme.spacing(12),
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(6),
  textAlign: 'center',
  fontWeight: 'bold',
  color: theme.palette.text.primary,
  textTransform: 'uppercase',
  letterSpacing: '2px',
  fontFamily: 'IBM Plex Sans, sans-serif',
}));

const FeatureCard = styled(Card)(({ theme }) => ({
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

const FeatureCardContent = styled(CardContent)(({ theme }) => ({
  padding: theme.spacing(4),
}));

const FeatureCardActions = styled(CardActions)(({ theme }) => ({
  justifyContent: 'center',
  padding: theme.spacing(2),
  backgroundColor: theme.palette.primary.main,
}));

const FeatureButton = styled(Button)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  fontWeight: 'bold',
  textTransform: 'uppercase',
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
}));

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

const HomePage = () => {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      <StyledContainer>
        {/* Features Section */}
        <Box marginTop={12} marginBottom={12}>
          <SectionTitle variant="h4">Features</SectionTitle>
          <FeaturesSection />
        </Box>
        {/* <Divider sx={{ my: 4 }} /> */}
        {/* About Section */}
        {/* <Box marginBottom={12}> */}
          {/* <SectionTitle variant="h4">About</SectionTitle> */}
          {/* <AboutSection /> */}
        {/* </Box> */}
        <Divider sx={{ my: 4 }} />
        {/* Code Examples Section */}
        <Box marginBottom={12}>
          <SectionTitle variant="h4">Code Examples</SectionTitle>
          <CodeExamplesSection />
        </Box>
        <Divider sx={{ my: 4 }} />
        {/* Ecosystem Section */}
        {/* <Box marginBottom={12}>
          <SectionTitle variant="h4">Ecosystem</SectionTitle>
          <EcosystemSection />
        </Box> */}
        
        {/* Community Section */}
        <Box marginBottom={12}>
          <SectionTitle variant="h4">The Team</SectionTitle>
          <CommunitySection />
        </Box>
        {/* <Box marginBottom={12}>
          <SectionTitle variant="h4">Community</SectionTitle> */}
          {/* Add community-related content */}
        {/* </Box> */}
      </StyledContainer>


    </>
  );
};

export default HomePage;