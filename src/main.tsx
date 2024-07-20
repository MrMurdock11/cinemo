import WebApp from '@twa-dev/sdk';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import './index.css';
import { Collection } from './pages/Collection/Collection.tsx';
import { Home } from './pages/Home/Home.tsx';
import { Search } from './pages/Search/Search.tsx';
import { Watchlist } from './pages/Watchlist/Watchlist.tsx';
import { store } from './store';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/collection',
    element: <Collection />,
  },
  {
    path: '/watchlist',
    element: <Watchlist />,
  },
  {
    path: '/search',
    element: <Search />,
  },
]);

WebApp.ready();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);
