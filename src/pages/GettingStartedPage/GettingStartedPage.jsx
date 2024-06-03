import React from 'react';
import {
  Container, Typography, Box, Grid, Accordion, AccordionSummary, AccordionDetails, 
  IconButton, Tooltip, Link, styled, Divider
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CodeIcon from '@mui/icons-material/Code';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';

const CustomContainer = styled(Container)(({ theme }) => ({
  marginTop: theme.spacing(10),
  marginBottom: theme.spacing(10),
}));

const CustomGrid = styled(Grid)(({ theme }) => ({
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(2),
}));

const Highlight = styled(Typography)(({ theme }) => ({
  background: `linear-gradient(45deg, ${'#ff416c'} 30%, ${'#ef416c'} 90%)`,
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
          Getting Started with the Language
        </Highlight>
        <Typography variant="h6" color="textSecondary" component="p">
          Dive into the simplicity and power of the language. Start building right away.
        </Typography>
      </Box>

      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} md={6}>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Box sx={{ width: '100%' }}>
                <Typography variant="h6">1. Understanding the structure</Typography>
                <Typography variant="body1" sx={{ mt: 1 }}>
                  Explore the main components of the organization. Learn about our main repositories and their purpose within our ecosystem. See more below:
                </Typography>
              </Box>
            </AccordionSummary>
            <Divider />
            <AccordionDetails>
              <Typography paragraph>
                <strong>The Language Repository:</strong> This is the core language repository, where the language's syntax and core functionalities are developed. More details are available <Link href="https://github.com/language-repo" target="_blank" rel="noopener">here</Link>.
              </Typography>
              <Typography paragraph>
                <strong>The Online Compiler:</strong> Hosted in the <Link href="https://github.com/output-backend" target="_blank" rel="noopener">output-backend</Link> repository, this tool allows users to compile and run language code directly in their web browsers.
              </Typography>
              <Typography paragraph>
                <strong>The Website:</strong> Managed under the <Link href="https://github.com/language-website" target="_blank" rel="noopener">language-website</Link> repository, it serves as the primary informational and documentation hub for the language.
              </Typography>
              <Typography paragraph>
                For a detailed overview of the language, refer to our <Link href="https://github.com/language-repo/README.md">README</Link> or our <Link href="/docs/syntax">Language Syntax</Link> page.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>

        <Grid item xs={12} md={6}>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Box sx={{ width: '100%' }}>
                <Typography variant="h6">2. Setup Your Environment</Typography>
                <Typography variant="body1" sx={{ mt: 1 }}>
                  You can either use the <Link href="/compile">Online Compiler</Link> or set up your local development environment. To set up your local environment, follow the steps below:
                </Typography>
              </Box>
            </AccordionSummary>
            <Divider />
            <AccordionDetails>
              <Typography paragraph>
                <strong>Step 1:</strong> In the <Link href="https://github.com/language-repo" target="_blank" rel="noopener">Language Repository</Link>, you will find the main files under the src. The files that can be found there are analyzer.js, compiler.js, core.js, generator.js, optimizer.js, parser.js, language.js, and language.ohm.
              </Typography>
              <Typography paragraph>
                <strong>Step 2:</strong> These files can be used in your local development environment. Clone the repository and set up your local environment to start developing in the language.
              </Typography>
              <Typography paragraph>
                <strong>Step 3:</strong> To compile and run your code, use the command <code>node compiler.js yourFile.language</code> in your terminal.
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
              <Box sx={{ width: '100%' }}>
                <Typography variant="h6">3. Write your first program</Typography>
                <Typography variant="body1" sx={{ mt: 1 }}>
                  Writing your first program in the language is simple and fun. Let's get started!
                </Typography>
              </Box>
            </AccordionSummary>
            <Divider />
            <AccordionDetails>
              <Typography paragraph>
                Your first program in the language will be the classic "Hello, World!". Open your text editor or IDE, create a new file named 'helloWorld.language', and enter the following code:
              </Typography>
              <CodeBlock>
                // Language syntax for Hello World<br />
                print("Hello, World!");
              </CodeBlock>
              <Typography paragraph>
                Run it using the "compile and run button" or your IDE's run feature. Congratulations, you've just written and executed your first program in the language!
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>

        <Grid item xs={12}>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Box sx={{ width: '100%' }}>
                <Typography variant="h6">4. Explore Language Features</Typography>
                <Typography paragraph>
                  The language comes packed with features designed to make development intuitive and efficient.
                </Typography>
              </Box>
            </AccordionSummary>
            <Divider />
            <AccordionDetails>
              <Typography paragraph>
                To learn more about them, dive deeper into the features and discover more by checking out our <Link href="/docs/syntax">syntax</Link> and <Link href="/">homepage</Link>.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>
      </Grid>
    </CustomContainer>
  );
};

export default GettingStarted;

