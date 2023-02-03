import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Route, Routes } from 'react-router-dom';

import { BookPage } from './pages/book';
import { ContractPage } from './pages/contract/contract';
import { Layout } from './pages/layout/layout';
import { MainPage } from './pages/main/main-page';
import { RulesPage } from './pages/rules/rules';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  // eslint-disable-next-line react/jsx-filename-extension
  <React.StrictMode>
    {/* <Provider store={store}> */}
    <HashRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<MainPage />} />
          <Route path='/terms' element={<RulesPage />} />
          <Route path='/contract' element={<ContractPage />} />
          <Route path='/book' element={<BookPage />} />
        </Route>
      </Routes>
    </HashRouter>
    {/* </Provider> */}
  </React.StrictMode>
);
