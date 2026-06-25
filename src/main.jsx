import { createRoot } from 'react-dom/client'
import './index.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createBrowserRouter, RouterProvider } from 'react-router';
import AuthContext from './component/AuthProvider/AuthContext';
import { HelmetProvider } from 'react-helmet-next';
import React from 'react';
import Layout from './component/pages/Layout/Layout';
import Dashboard from './component/pages/UserPanel/Dashboard/Dashboard';
import Underconstraction from './component/pages/Shared/Underconstraction';
import MySurvey from './component/pages/UserPanel/MySurvey/MySurvey';

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout></Layout>,
    children: [
      {
        index: true,
        element: <Dashboard></Dashboard>
      },
      {
        path: '/my-surveys',
        element: <MySurvey></MySurvey>
      },
      {
        path: "*",
        element: <Underconstraction></Underconstraction>
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <AuthContext>
      <HelmetProvider>
        <React.StrictMode>
          <RouterProvider router={router}></RouterProvider>
        </React.StrictMode>
      </HelmetProvider>
    </AuthContext>
  </QueryClientProvider>,
)
