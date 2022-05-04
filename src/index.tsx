import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import {GlobalStyle } from './styles/global';

import { BrowserRouter,Routes, Route, } from "react-router-dom";
import {Home} from "./routes/Home";






const root = ReactDOM.createRoot(document.getElementById('root')as Element);
root.render(
  <BrowserRouter>
  <Routes>
  <Route path="/" element={<App />} />
  <Route path="Home" element={<Home />} />
  </Routes>
    < GlobalStyle />

  </BrowserRouter>
);


