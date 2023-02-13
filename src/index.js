/* eslint-disable react/jsx-filename-extension */
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';

import { BookPage } from './pages/book';
import { ContractPage } from './pages/contract/contract';
import { Layout } from './pages/layout/layout';
import { MainPage } from './pages/main/main-page';
import { RulesPage } from './pages/rules/rules';
import { store } from './redux/store';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <HashRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Navigate to='/books/all' />} />
          <Route path='/books/*' element={<MainPage />} />
          <Route path='/books/:category' element={<MainPage />} />
          <Route path='/terms' element={<RulesPage />} />
          <Route path='/contract' element={<ContractPage />} />
          <Route path='/books/:category/:id' element={<BookPage />} />
        </Route>
        <Route path='*' element={<Layout />} />
      </Routes>
    </HashRouter>
  </Provider>
);
