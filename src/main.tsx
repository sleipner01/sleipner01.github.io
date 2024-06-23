import './index.scss';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import TypeWriter from './pages/TypeWriter.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<TypeWriter />} />
        <Route path='*' element={<TypeWriter />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
