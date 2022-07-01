import React from 'react';
import './App.css';
import GlobalStyle from './theme/GlobalStyle';
import { Routes, Route, Link } from "react-router-dom";
import { HomePage } from './views/HomePage';

function App() {

  return (
    <>
      <GlobalStyle />
        <Routes>
          <Route path="/" element={<HomePage/>}/>
        </Routes>
    </>
  );
}

export default App;
