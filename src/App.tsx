import React from 'react';
import './App.css';
import GlobalStyle from './theme/GlobalStyle';
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from 'styled-components';
import { HomePage } from './views/HomePage';
import { theme } from "./theme/mainTheme";
import { LoginPage } from './views/LoginPage';
import { UserPage } from './views/UserPage';
import { CreateProject } from './views/CreateProject';
import {RegisterPage} from "./views/RegisterPage";
import {LogoutPage} from "./views/LogoutPage";
import { TasksToProject } from './views/TasksToProject';

function App() {

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/user" element={<UserPage />} />
            <Route path="/project/add" element={<CreateProject />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/logout" element={<LogoutPage />} />
            <Route path="/task/add" element={<TasksToProject />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
