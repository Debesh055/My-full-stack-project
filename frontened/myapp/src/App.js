//app.js

import './App.css';
import { useState } from "react";
import Signup from './signup'
import Login from './login'
import Home from './home';
import LogOut from './logout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>      
        <Route path="/register" element={<Signup/>}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/logout" element={<LogOut />}></Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;

