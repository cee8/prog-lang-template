import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer'; // Adjust the path as necessary
import HomePage from './pages/HomePage/HomePage'; // Adjust the path according to your project structure
import DocsPage from './pages/DocsPage/DocsPage';
import GettingStarted from './pages/GettingStartedPage/GettingStartedPage';
import LanguageSyntax from './pages/LanguageSyntaxPage/LanguageSyntaxPage';
import StandardLibrary from './pages/StandardLibraryPage/StandardLibraryPage';
import CompilationPage from './pages/CompilationPage/CompilationPage';
import { ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';

import theme from './styles/theme'; // replace with the path to your theme file

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Box display="flex" flexDirection="column" minHeight="100vh">
          <Header />
          <Box component="main" flexGrow={1}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/compile" element={<CompilationPage />} />
              <Route path="/docs" element={<DocsPage />} />
              <Route path="/docs/getting-started" element={<GettingStarted />} />
              <Route path="/docs/syntax" element={<LanguageSyntax />} />
              <Route path="/docs/standard-library" element={<StandardLibrary />} />
              {/* Future routes will go here */}
            </Routes>
          </Box>
          <Footer />
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
