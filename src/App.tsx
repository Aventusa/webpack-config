import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import { ROUTES } from './constants/pages';
import { Layout } from './components/Layout/Layout';
import { Home } from './pages/Home/Home';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: ROUTES,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
