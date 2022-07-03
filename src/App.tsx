import React from 'react';
import './App.css';
import GlobalStyle from './theme/GlobalStyle';
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from 'styled-components';
import { HomePage } from './views/HomePage';
import { theme } from "./theme/mainTheme";
import { LoginPage } from './views/LoginPage';

function App() {

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/login" element={<LoginPage />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
