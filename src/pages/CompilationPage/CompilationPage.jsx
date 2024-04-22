// src/pages/CompilationPage/CompilationPage.jsx
import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Grid, Paper, styled } from '@mui/material';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CompilationContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
  backgroundColor: theme.palette.grey[100],
  marginBottom: -9,
}));

const FloatingWindow = styled(Paper)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  width: '98%',
  height: '80vh',
  borderRadius: theme.spacing(2),
  boxShadow: theme.shadows[8],
  overflow: 'hidden',
}));

const EditorContainer = styled(Box)(({ theme }) => ({
  flex: 1,
  padding: theme.spacing(3),
  backgroundColor: theme.palette.grey[100],
}));

const OutputContainer = styled(Box)(({ theme }) => ({
  flex: 1,
  padding: theme.spacing(3),
  backgroundColor: theme.palette.grey[900],
  color: theme.palette.common.white,
}));

const CodeInput = styled(TextField)(({ theme }) => ({
  '& .MuiInputBase-root': {
    fontFamily: 'monospace',
    fontSize: '1rem',
  },
}));

const OutputBox = styled(Box)(({ theme }) => ({
  fontFamily: 'monospace',
  fontSize: '1rem',
  overflow: 'auto',
  marginTop: theme.spacing(2),
}));

const CompileButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
}));

const CompilationPage = () => {
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');

  const handleCompile = () => {
    // TODO: Integrate with your grammar, analyzer, and compiler
    // Compile the code and update the output state with the result
    setOutput('Compilation output goes here');
  };

  return (
    <CompilationContainer>
      <FloatingWindow>
        <EditorContainer>
          <Typography variant="h6" gutterBottom>
            Code Editor
          </Typography>
          <CodeInput
            multiline
            rows={20}
            placeholder="Enter your code here"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            fullWidth
          />
          <CompileButton variant="contained" color="primary" onClick={handleCompile}>
            Compile and Run
          </CompileButton>
        </EditorContainer>
        <OutputContainer>
          <Typography variant="h6" gutterBottom>
            Output
          </Typography>
          <OutputBox>
            <SyntaxHighlighter language="text" style={atomDark}>
              {output}
            </SyntaxHighlighter>
          </OutputBox>
        </OutputContainer>
      </FloatingWindow>
    </CompilationContainer>
  );
};

export default CompilationPage;