import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './bootstrap.css'
import App from './App';
import Holding from './components/Holding';


import { RouterProvider } from 'react-router-dom';
import { createBrowserRouter } from 'react-router-dom';
import HomeScreen from './components/HomeScreen';
import StockScreen from './components/StockScreen';


const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <HomeScreen />
      },
      {
        path: '/holding',
        element: <Holding />
      },
      {
        path: '/stock/:name',
        element: <StockScreen />
      },
    ]
  },


]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
  <RouterProvider router={appRouter} />
  </React.StrictMode>
);