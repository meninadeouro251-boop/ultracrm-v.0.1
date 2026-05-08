import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import SmartRedirect from './SmartRedirect';
import RouterGuard from '@/guards/RouterGuard';

// Route Modules
import { publicRoutes } from './modules/public.routes';
import { customerRoutes } from './modules/customer.routes';
import { adminRoutes } from './modules/admin.routes';
import { sharedRoutes } from './modules/shared.routes';

// Base Pages
const Setup = React.lazy(() => import('@/pages/Setup/Setup'));
const OnboardingPage = React.lazy(() => import('@/pages/Setup/OnboardingPage'));
const NotFound = React.lazy(() => import('@/pages/NotFound'));
const Unauthorized = React.lazy(() => import('@/pages/Unauthorized'));

const LoadingFallback = () => (
  <div className="flex items-center justify-center h-screen w-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary" />
  </div>
);

const AppRouter = () => {
  return (
    <BrowserRouter>
      <RouterGuard>
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            {/* Intelligent root redirection */}
            <Route
              path="/"
              element={
                <PrivateRoute>
                  <SmartRedirect />
                </PrivateRoute>
              }
            />

            {/* Modules */}
            {publicRoutes}
            {customerRoutes}
            {adminRoutes}
            {sharedRoutes}

            {/* Setup & Onboarding */}
            <Route path="/setup" element={<Setup />} />
            <Route path="/setup/onboarding" element={<OnboardingPage />} />

            {/* Error Pages */}
            <Route
              path="/unauthorized"
              element={
                <PrivateRoute>
                  <Unauthorized />
                </PrivateRoute>
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </RouterGuard>
    </BrowserRouter>
  );
};

export default AppRouter;
