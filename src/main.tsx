import './index.scss';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Portfolio from './pages/Portfolio.tsx';
import TypeWriter from './pages/TypeWriter.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<TypeWriter />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='*' element={<Portfolio />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
