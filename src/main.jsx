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
import Rewards from './component/pages/UserPanel/Rewards/Rewards';
import Insight from './component/pages/UserPanel/Insight/Insight';
import Userprofile from './component/pages/UserPanel/UserProfile/Userprofile';
import UserLogin from './component/pages/Authentication/UserLogin';
import UserPrivateRoute from './component/pages/privateroute/UserPrivateRoute';
import Offerwalls from './component/pages/UserPanel/EarnMoney/offerwalls/Offerwalls';
import RegistrationPage from './component/pages/Authentication/RegistrationPage';
import AlartComponent from './component/pages/Shared/AlartComponent';

const queryClient = new QueryClient();

const router = createBrowserRouter([
  // {
  //   path: '/',
  //   element: <UserPrivateRoute><Layout></Layout></UserPrivateRoute>,
  //   children: [
  //     {
  //       index: true,
  //       element: <Dashboard></Dashboard>
  //     },
  //     {
  //       path: '/my-surveys',
  //       element: <MySurvey></MySurvey>
  //     },
  //     {
  //       path: '/rewards',
  //       element: <Rewards></Rewards>
  //     },
  //     {
  //       path: '/insights',
  //       element: <Insight></Insight>
  //     },
  //     {
  //       path: '/user-profile',
  //       element: <Userprofile></Userprofile>
  //     },
  //     {
  //       path: '/Offerwalls',
  //       element: <Offerwalls></Offerwalls>
  //     },
  //     {
  //       path: "*",
  //       element: <Underconstraction></Underconstraction>
  //     }
  //   ]
  // },
  // {
  //   path: "*",
  //   element: <Underconstraction></Underconstraction>
  // },
  {
    path: "*",
    element: <AlartComponent></AlartComponent>
  },
  // {
  //   path: '/user-login',
  //   element: <UserLogin></UserLogin>
  // },
  // {
  //   path: '/user-registration',
  //   element: <RegistrationPage></RegistrationPage>
  // }
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
