import React from 'react';
import {
  Grid, Card, CardActionArea, CardContent, CardMedia, Typography, Accordion, AccordionSummary, AccordionDetails, useTheme, useMediaQuery
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import StringManipulationIcon from '@mui/icons-material/TextFields'; // Placeholder icon
import DataStructuresIcon from '@mui/icons-material/Storage'; // Placeholder icon
import MathFunctionsIcon from '@mui/icons-material/Functions'; // Placeholder icon

function LibraryFeatureCard({ title, description, icon, expandedComponent }) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <Card sx={{ maxWidth: 345, m: 2, boxShadow: 3, '&:hover': { boxShadow: 8 } }}>
      <CardActionArea>
        <CardMedia>
          {React.cloneElement(icon, { style: { fontSize: matches ? 60 : 40, margin: '36px', color: theme.palette.primary.main } })}
        </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      {expandedComponent}
    </Card>
  );
}

export default function StandardLibrary() {
  return (
    <Grid container justifyContent="center" alignItems="stretch" spacing={2} sx={{ p: 3 }}>
      <Grid item xs={12} sm={6} md={4}>
        <LibraryFeatureCard
          title="String Manipulation"
          description="Functions for string operations."
          icon={<StringManipulationIcon />}
          expandedComponent={
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Details</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Detailed documentation and examples for string manipulation functions, such as string_length, substring, etc.
                </Typography>
              </AccordionDetails>
            </Accordion>
          }
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <LibraryFeatureCard
          title="Data Structures"
          description="Utilities for managing collections."
          icon={<DataStructuresIcon />}
          expandedComponent={
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Details</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Explore arrays, sets, maps, and more with comprehensive guides on each data structure's usage and best practices.
                </Typography>
              </AccordionDetails>
            </Accordion>
          }
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <LibraryFeatureCard
          title="Math Functions"
          description="Mathematical utilities and constants."
          icon={<MathFunctionsIcon />}
          expandedComponent={
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Details</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  From basic arithmetic to complex number operations, discover all the math functions available in the standard library.
                </Typography>
              </AccordionDetails>
            </Accordion>
          }
        />
      </Grid>
      {/* Additional categories as needed */}
    </Grid>
  );
}
