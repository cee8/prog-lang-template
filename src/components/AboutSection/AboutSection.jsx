import React from 'react';
import { Typography, Box, Divider, List, ListItem, ListItemIcon, ListItemText, styled } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'; // An example icon, similar to the checkmark in your screenshot



const SectionContainer = styled(Box)(({ theme }) => ({
  // Adjust the padding and other styles as needed to match your design
  padding: theme.spacing(4),
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  // Add styles for the section title (e.g., font size, weight)
  fontWeight: 'bold',
  marginBottom: theme.spacing(2),
  fontFamily: '"IBM Plex Sans", sans-serif',
fontSize: 48,

}));

const StyledDivider = styled(Divider)(({ theme }) => ({
  // Add styles for the divider, if needed
  margin: `${theme.spacing(2)}px 0`,
}));

const StyledListItem = styled(ListItem)(({ theme }) => ({
  padding: 0, // Remove padding to match the design in the screenshot
  alignItems: 'flex-start', // Aligns the icon and text to the top
}));

const StyledListItemIcon = styled(ListItemIcon)(({ theme }) => ({
  minWidth: 'auto', // Remove the default padding around the icon
  marginRight: theme.spacing(2), // Add some space between the icon and text
}));

const StyledListItemText = styled(ListItemText)(({ theme }) => ({
  '& .MuiListItemText-primary': {
    // Styles for the text itself
    fontSize: theme.typography.body1.fontSize, // Match the font size to body1 text size
  },
}));

const ProgramFitSection = () => {
  return (
    <SectionContainer>
      <SectionTitle variant="h4">Who should apply?</SectionTitle>
      <StyledDivider />
      <List disablePadding>
        <StyledListItem>
          <StyledListItemIcon>
            <CheckCircleOutlineIcon color="success" /> {/* Icon with success color */}
          </StyledListItemIcon>
          <StyledListItemText primary="College students from underrepresented background pursuing a BS/BA in technical field (Computer Science, Engineering, Math, Statistics) graduating in December 2025 or Spring/Summer 2026" />
        </StyledListItem>
        <StyledListItem>
          <StyledListItemIcon>
            <CheckCircleOutlineIcon color="success" />
          </StyledListItemIcon>
          <StyledListItemText primary="People passionate about problem solving, with internship or project experience" />
        </StyledListItem>
        <StyledListItem>
          <StyledListItemIcon>
            <CheckCircleOutlineIcon color="success" />
          </StyledListItemIcon>
          <StyledListItemText primary="People who can commit a minimum of 15 hours a week to dedicate to the program from May 6 - November 2024" />
        </StyledListItem>
      </List>
    </SectionContainer>
  );
};

export default ProgramFitSection;
