import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Route, Routes } from 'react-router-dom';

import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';
import { MainPage } from './pages/main';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <HashRouter>
      <Header />
      <Routes>
        <Route path='/' element={<MainPage />} />
      </Routes>
      <Footer />
    </HashRouter>
  </React.StrictMode>
);
