import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  IconButton,
  Collapse,
  Divider,
  styled,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { ExpandMore as ExpandMoreIcon } from '@mui/icons-material';

const DocsContainer = styled(Container)(({ theme }) => ({
  marginTop: theme.spacing(16),
  marginBottom: theme.spacing(12),
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(8),
  textAlign: 'center',
  fontWeight: 'bold',
  color: theme.palette.primary.main,
  textTransform: 'uppercase',
  letterSpacing: theme.spacing(0.5),
}));

const DocCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
  borderRadius: theme.spacing(2),
  boxShadow: theme.shadows[6],
  '&:hover': {
    transform: 'translateY(-15px)',
    boxShadow: theme.shadows[12],
  },
}));

const DocCardContent = styled(CardContent)(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(6),
}));

const DocCardActions = styled(CardActions)(({ theme }) => ({
  justifyContent: 'space-between',
  padding: theme.spacing(4),
  backgroundColor: theme.palette.grey[100],
}));

const DocButton = styled(Button)(({ theme }) => ({
  borderRadius: theme.spacing(3),
  padding: theme.spacing(2, 4),
  fontWeight: 'bold',
  textTransform: 'uppercase',
  transition: 'background-color 0.3s ease-in-out',
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
}));

const ExpandMore = styled(IconButton)(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const documentationSections = [
  {
    title: 'Getting Started',
    description: 'Learn the basics of MyLanguage and set up your development environment.',
    content:
      'This section provides a comprehensive step-by-step guide on how to install MyLanguage, configure your development environment, and write your first program. It covers the essential tools and prerequisites needed to get started with MyLanguage development.',
    link: '/docs/getting-started',
  },
  {
    title: 'Language Syntax',
    description: 'Explore the syntax and structure of MyLanguage with detailed code examples.',
    content:
      'Dive deep into the syntax and structure of MyLanguage. This section covers variables, data types, control flow, functions, and more. Each concept is explained in detail with clear and concise code examples, making it easy to understand and apply the language constructs.',
    link: '/docs/syntax',
  },
  {
    title: 'Standard Library',
    description: "Discover the built-in functions and modules in MyLanguage's standard library.",
    content:
      'MyLanguage comes with a rich standard library that provides a wide range of built-in functions and modules to simplify common programming tasks. This section explores the most commonly used functions and modules, explaining their usage and providing practical examples to help you leverage the power of the standard library.',
    link: '/docs/standard-library',
  },
  // Add more documentation sections
];

const DocsPage = () => {
  const [expandedSection, setExpandedSection] = React.useState(-1);

  const handleExpandClick = (index) => {
    setExpandedSection((prevExpandedSection) => (prevExpandedSection === index ? -1 : index));
  };

  return (
    <DocsContainer maxWidth="lg">
      <SectionTitle variant="h2">Documentation</SectionTitle>
      <Typography variant="h5" align="center" paragraph>
        Comprehensive guides and resources to help you master MyLanguage
      </Typography>
      <Grid container spacing={8} marginTop={8}>
        {documentationSections.map((section, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <DocCard>
              <DocCardContent>
                <Typography variant="h4" gutterBottom>
                  {section.title}
                </Typography>
                <Typography variant="subtitle1">{section.description}</Typography>
                <Divider variant="middle" sx={{ margin: (theme) => theme.spacing(4, 0) }} />
                <Collapse in={expandedSection === index} timeout="auto" unmountOnExit>
                  <Typography variant="body1" color="textSecondary">
                    {section.content}
                  </Typography>
                </Collapse>
              </DocCardContent>
              <DocCardActions>
                <DocButton component={Link} to={section.link} color="primary" variant="contained" size="large">
                  Explore
                </DocButton>
                <ExpandMore
                  expand={expandedSection === index}
                  onClick={() => handleExpandClick(index)}
                  aria-expanded={expandedSection === index}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </ExpandMore>
              </DocCardActions>
            </DocCard>
          </Grid>
        ))}
      </Grid>
    </DocsContainer>
  );
};

export default DocsPage;