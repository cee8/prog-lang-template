import React from 'react';
import { Box, Container, Typography, Link, styled } from '@mui/material';

const FooterContainer = styled(Box)(({ theme }) => ({
  backgroundColor: '#f4f4f4',
  color: '#333',
  padding: theme.spacing(4),
  marginTop: 'auto',
}));

const FooterContent = styled(Container)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

const FooterText = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

const FooterLink = styled(Link)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  textDecoration: 'none',
  '&:hover': {
    textDecoration: 'underline',
  },
}));

const Footer = () => {
  return (
    <FooterContainer component="footer">
      <FooterContent maxWidth="md">
        <FooterText variant="body1" align="center">
          &copy; {new Date().getFullYear()} My Programming Language. All rights reserved.
        </FooterText>
        <FooterLink href="/terms" variant="body2">
          Terms of Service
        </FooterLink>
        <FooterLink href="/privacy" variant="body2">
          Privacy Policy
        </FooterLink>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;