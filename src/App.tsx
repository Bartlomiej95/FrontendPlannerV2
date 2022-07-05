import React from 'react';
import './App.css';
import GlobalStyle from './theme/GlobalStyle';
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from 'styled-components';
import { HomePage } from './views/HomePage';
import { theme } from "./theme/mainTheme";
import { LoginPage } from './views/LoginPage';
import { UserPage } from './views/UserPage';

function App() {

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/user" element={<UserPage />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
