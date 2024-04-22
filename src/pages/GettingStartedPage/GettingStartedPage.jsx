import React from 'react';
import {
  Container, Typography, Box, Grid, Accordion, AccordionSummary, AccordionDetails, 
  IconButton, Tooltip, Link, styled
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CodeIcon from '@mui/icons-material/Code';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';

const CustomContainer = styled(Container)(({ theme }) => ({
  marginTop: theme.spacing(10),
  marginBottom: theme.spacing(10),
}));

const Highlight = styled(Typography)(({ theme }) => ({
  background: `linear-gradient(45deg, ${theme.palette.secondary.light} 30%, ${theme.palette.secondary.main} 90%)`,
  '-webkit-background-clip': 'text',
  '-webkit-text-fill-color': 'transparent',
}));

const CodeBlock = styled(Box)(({ theme }) => ({
  background: theme.palette.action.hover,
  padding: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
  fontFamily: '"Fira code", "Fira Mono", monospace',
  overflow: 'auto',
  margin: theme.spacing(1, 0),
}));

const GettingStarted = () => {
  return (
    <CustomContainer maxWidth="lg">
      <Box textAlign="center" marginBottom={4}>
        <Highlight variant="h2" component="div" gutterBottom>
          Getting Started with YourLanguageName
        </Highlight>
        <Typography variant="h6" color="textSecondary" component="p">
          Dive into the simplicity and power of YourLanguageName. Start building right away.
        </Typography>
      </Box>

      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} md={6}>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6">1. Installation</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography paragraph>
                Begin by downloading the YourLanguageName compiler or interpreter from the official [source]. Make sure to verify the system requirements before installation.
              </Typography>
              <Typography paragraph>
                For detailed installation instructions, refer to our <Link href="#">installation guide</Link>.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>

        <Grid item xs={12} md={6}>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6">2. Setup Your Environment</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography paragraph>
                Setting up your development environment is crucial for a seamless coding experience. Follow our comprehensive setup guide to configure your IDE, set environment variables, and more.
              </Typography>
              <Typography paragraph>
                Access the full setup guidelines <Link href="#">here</Link>.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>

        <Grid item xs={12}>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6">3. Write Your First Program</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography paragraph>
                Your first program in YourLanguageName will be the classic "Hello, World!". Open your text editor or IDE, create a new file named 'helloWorld.yln', and enter the following code:
              </Typography>
              <CodeBlock>
                # YourLanguageName syntax for Hello World<br />
                print("Hello, World!")
              </CodeBlock>
              <Tooltip title="Run your code">
                <IconButton color="primary">
                  <PlayCircleFilledIcon />
                </IconButton>
              </Tooltip>
              <Typography paragraph>
                Save your file and run it using the command line or your IDE's run feature. Congratulations, you've just written and executed your first YourLanguageName program!
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>

        <Grid item xs={12}>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6">4. Explore Language Features</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography paragraph>
                YourLanguageName comes packed with features designed to make development intuitive and efficient. Here are some key features you might find interesting:
              </Typography>
              <CodeBlock>
                # Feature 1: Example Code<br />
                # Feature 2: Example Code<br />
                # Feature 3: Example Code
              </CodeBlock>
              <Typography paragraph>
                Dive deeper into these features and discover more by checking out our <Link href="#">full documentation</Link>.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>
      </Grid>
    </CustomContainer>
  );
};

export default GettingStarted;
