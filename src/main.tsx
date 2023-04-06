import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'virtual:windi.css';
import Home from './pages/Home';
import Hooks from './pages/Hooks';
import Forms from './pages/Forms';
import Advanced from './pages/Advanced';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/hooks',
    element: <Hooks />,
  },
  {
    path: '/forms',
    element: <Forms />,
  },
  {
    path: '/advanced',
    element: <Advanced />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
