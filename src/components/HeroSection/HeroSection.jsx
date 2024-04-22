import React from 'react';
import { Typography, Button, Box, Container, styled } from '@mui/material';
import { keyframes } from '@mui/system';
import { Link } from 'react-router-dom';
import './heroSection.css';

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

const HeroContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  background: 'linear-gradient(45deg, #6a11cb 0%, #2575fc 100%)',
  color: theme.palette.primary.contrastText,
  paddingTop: theme.spacing(25),
  paddingBottom: theme.spacing(12),
  textAlign: 'center',
  position: 'relative',
  overflow: 'hidden',
  marginLeft: '-50vw',
  left: '50%',
  width: '100vw',
}));

const HeroContent = styled(Container)(({ theme }) => ({
  zIndex: 1,
  position: 'relative',
}));

const HeroTitle = styled(Typography)(({ theme }) => ({
  fontSize: '3.5rem',
  fontWeight: 'bold',
  marginBottom: theme.spacing(2),
  animation: `${fadeIn} 1s ease-in-out`,
  fontFamily: 'IBM Plex Sans, sans-serif',
}));

const HeroSubtitle = styled(Typography)(({ theme }) => ({
  fontSize: '1.5rem',
  marginBottom: theme.spacing(4),
  animation: `${fadeIn} 1s ease-in-out 0.2s`,
}));

const HeroButton = styled(Button)(({ theme }) => ({
  fontSize: '1.2rem',
  padding: theme.spacing(1.5, 4),
  borderRadius: theme.spacing(3),
  background: 'linear-gradient(45deg, #ff416c 0%, #ff4b2b 100%)',
  color: theme.palette.primary.contrastText,
  transition: 'transform 0.3s ease-in-out',
  animation: `${fadeIn} 1s ease-in-out 0.4s`,
  '&:hover': {
    transform: 'scale(1.05)',
  },
}));

const HeroBackground = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'rgba(0, 0, 0, 0.5)',
    zIndex: 1,
  },
}));

const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroBackground />
      <HeroContent maxWidth={false}>
        <HeroTitle variant="h2">Welcome to My Programming Language</HeroTitle>
        <HeroSubtitle variant="h5">
          The next-generation language for innovative and efficient software development.
        </HeroSubtitle>
        <HeroButton variant="contained" size="large" component={Link} to="/compile">
          Try it out
        </HeroButton>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;