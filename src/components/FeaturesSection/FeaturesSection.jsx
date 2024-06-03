// FeaturesSection.js

import React from 'react';
import { Typography, Grid, Box, IconButton, styled } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info'; // For general information
import SpeedIcon from '@mui/icons-material/Speed'; // For performance features
import SecurityIcon from '@mui/icons-material/Security'; // For security features
import GroupIcon from '@mui/icons-material/Group'; // For community or collaborative features
import ExtensionIcon from '@mui/icons-material/Extension'; // For extensibility or plugin features
import CodeIcon from '@mui/icons-material/Code';

const SectionTitle = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(6),
  textAlign: 'center',
  fontWeight: 'bold',
  color: theme.palette.text.primary,
  textTransform: 'uppercase',
  letterSpacing: '2px',
}));

const Feature = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.05)',
  },
}));

const FeatureIcon = styled(IconButton)(({ theme }) => ({
  backgroundColor: '#ff416c',
  color: theme.palette.getContrastText(theme.palette.primary.main),
  marginBottom: theme.spacing(2),
  '&:hover': {
    backgroundColor: '#ef416c',
  },
  fontSize: '48px',
}));

const FeatureTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 'bold',
  color: theme.palette.text.primary,
}));

const FeatureDescription = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
}));

const features = [
  {
    title: 'Fast Execution',
    description: 'Experience lightning-fast execution speeds, enhancing your development workflow.',
    Icon: SpeedIcon,
  },
  {
    title: 'Robust Security',
    description: 'Advanced security features to keep your data safe and secure.',
    Icon: SecurityIcon,
  },
  {
    title: 'Collaborative Environment',
    description: 'Tools and features that enhance teamwork and collaboration.',
    Icon: GroupIcon,
  },
  {
    title: 'Extensibility',
    description: 'Easily extend and customize with plugins and integrations.',
    Icon: ExtensionIcon,
  },
  {
    title: 'Familiar Syntax',
    description: 'Easy-to-understand syntax that is similar to popular programming languages.',
    Icon: CodeIcon,
  },

];

const FeaturesSection = () => {
  return (
    <Box marginBottom={12}>
      <Grid container spacing={6} justifyContent="center">
        {features.map((feature, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Feature>
              <FeatureIcon>
                <feature.Icon fontSize="large" />
              </FeatureIcon>
              <FeatureTitle variant="h5">{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
            </Feature>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default FeaturesSection;
