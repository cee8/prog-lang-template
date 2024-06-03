import React from 'react';
import { Box, Typography, Grid, Card, CardContent, CardMedia, styled } from '@mui/material';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CodeExampleCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  borderRadius: theme.spacing(2),
  boxShadow: theme.shadows[4],
  backgroundColor: theme.palette.background.paper,
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-5px)',
  },
}));

const CodeExampleImage = styled(CardMedia)(({ theme }) => ({
  height: 200,
  objectFit: 'cover',
}));

const CodeExampleTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 'bold',
  marginBottom: theme.spacing(2),
}));

const CodeExampleDescription = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

const CodeExamplesSection = () => {
  const codeExamples = [
    {
      title: 'Fibonacci Sequence',
      description: 'Generating the Fibonacci sequence in MyLanguage.',
      code: `function fibonacci(n) {
  if (n <= 1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

for (let i = 0; i < 10; i++) {
  print(fibonacci(i));
}`,
      image: 'path/to/fibonacci-image.jpg',
    },

      
    //PRIME
    {
      title: 'Prime Number Checker',
      description: 'A function to check if a number is prime in Rat-language.',
      code: `bool prime(n:int){
        if (n % 2 == 0) || (n % 3 == 0) { return false; }
        while i*i <= n {
          if (n%i==0) || (n%(i+2) ==0) {
              return false;
            }
            i += 6;
        }
        return true;
    }`,
      image: 'path/to/prime-image.jpg',
    },
    //FACTORIAL
    {
        title: 'Factorial',
        description: 'Computing Factorials Rat-language.',
        code: `int factorial(n:int){
          var value: int = 1;
          if (n != 0 && n != 1){
              for i in 2...n {
                  value *= i;
              }
          }
          return value;
      }
      print(factorial(5));
  }`,

        image: 'path/to/fibonacci-image.jpg',
      },
    
    // Add more code examples
  ];

  return (
    <Box>
      <Grid container spacing={4}>
        {codeExamples.map((example, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <CodeExampleCard>
              <CardContent>
                <CodeExampleTitle variant="h6">{example.title}</CodeExampleTitle>
                <CodeExampleDescription>{example.description}</CodeExampleDescription>
                <SyntaxHighlighter language="javascript" style={atomDark}>
                  {example.code}
                </SyntaxHighlighter>
              </CardContent>
            </CodeExampleCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CodeExamplesSection;
