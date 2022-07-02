import React from 'react';
import './App.css';
import GlobalStyle from './theme/GlobalStyle';
import { Routes, Route, Link } from "react-router-dom";
import { ThemeProvider } from 'styled-components';
import { HomePage } from './views/HomePage';
import {theme} from "./theme/mainTheme";

function App() {

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
