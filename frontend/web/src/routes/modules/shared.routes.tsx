import React from 'react';
import { Route, Outlet } from 'react-router-dom';
import PrivateRoute from '../PrivateRoute';
import MainLayout from '@/components/layout/MainLayout';

const Documentation = React.lazy(() => import('@/pages/Shared/Documentation'));
const Marketplace = React.lazy(() => import('@/pages/Shared/Marketplace'));
const Profile = React.lazy(() => import('@/pages/Shared/Profile'));

export const sharedRoutes = (
  <Route
    element={
      <PrivateRoute>
        <MainLayout>
          <Outlet />
        </MainLayout>
      </PrivateRoute>
    }
  >
    <Route path="/documentation" element={<Documentation />} />
    <Route path="/marketplace" element={<Marketplace />} />
    <Route path="/profile" element={<Profile />} />
  </Route>
);
