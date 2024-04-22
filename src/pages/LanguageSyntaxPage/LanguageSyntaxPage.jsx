import React from 'react';
import { Tabs, Tab, Typography, Box, Paper, Grid, styled } from '@mui/material';

const CustomContainer = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  backgroundColor: theme.palette.background.paper,
  display: 'flex',
  height: '100%',
  marginTop: theme.spacing(8),
}));

const CustomTabPanel = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
}));

const CustomTabs = styled(Tabs)(({ theme }) => ({
  borderRight: `1px solid ${theme.palette.divider}`,
  marginRight: theme.spacing(3),
}));

const CustomPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function LanguageSyntax() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <CustomContainer>
      <CustomTabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Language Syntax Tabs"
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        <Tab label="Data Types" {...a11yProps(0)} />
        <Tab label="Control Structures" {...a11yProps(1)} />
        <Tab label="Functions" {...a11yProps(2)} />
        <Tab label="Operators" {...a11yProps(3)} />
        {/* Add more tabs as needed */}
      </CustomTabs>
      <TabPanel value={value} index={0}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <CustomPaper>
              <Typography variant="h6">Integer</Typography>
              <Typography>Represents whole numbers.</Typography>
              <Typography variant="body2" component="div">
                Example: <br />
                <code>var age: int = 30;</code>
              </Typography>
            </CustomPaper>
          </Grid>
          <Grid item xs={12} md={6}>
            <CustomPaper>
              <Typography variant="h6">String</Typography>
              <Typography>Represents sequences of characters.</Typography>
              <Typography variant="body2" component="div">
                Example: <br />
                <code>var name: str = "John Doe";</code>
              </Typography>
            </CustomPaper>
          </Grid>
          {/* Add more data types as needed */}
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <CustomPaper>
          <Typography variant="h6">If Statement</Typography>
          <Typography>Used to make decisions in your code.</Typography>
          <Typography variant="body2" component="div">
            Example: <br />
            <code>
              if (condition) &#123;<br />
              &nbsp;&nbsp;// code to execute if condition is true<br />
              &#125;
            </code>
          </Typography>
        </CustomPaper>
        {/* Add more control structures as needed */}
      </TabPanel>
      <TabPanel value={value} index={2}>
        {/* Functions content */}
      </TabPanel>
      <TabPanel value={value} index={3}>
        {/* Operators content */}
      </TabPanel>
      {/* Add more TabPanels as needed */}
    </CustomContainer>
  );
}
