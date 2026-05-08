import React from 'react';
import { Route, Outlet } from 'react-router-dom';
import PrivateRoute from '../PrivateRoute';
import CustomerRoute from '../CustomerRoute';
import MainLayout from '@/components/layout/MainLayout';
import PermissionRoute from '../PermissionRoute';

const AdminSettingsLayout = React.lazy(() => import('@/pages/Admin/Settings'));
const SmtpConfig = React.lazy(() => import('@/pages/Admin/Settings/SmtpConfig'));
const StorageConfig = React.lazy(() => import('@/pages/Admin/Settings/StorageConfig'));
const SocialLoginConfig = React.lazy(() => import('@/pages/Admin/Settings/SocialLoginConfig'));
const ChannelConfig = React.lazy(() => import('@/pages/Admin/Settings/ChannelConfig'));
const OpenAIConfig = React.lazy(() => import('@/pages/Admin/Settings/OpenAIConfig'));
const IntegrationsConfig = React.lazy(() => import('@/pages/Admin/Settings/IntegrationsConfig'));
const InboundEmailConfig = React.lazy(() => import('@/pages/Admin/Settings/InboundEmailConfig'));
const FrontendRuntimeConfig = React.lazy(() => import('@/pages/Admin/Settings/FrontendRuntimeConfig'));

export const adminRoutes = (
  <Route
    path="/settings/admin"
    element={
      <PrivateRoute>
        <CustomerRoute>
          <MainLayout>
            <PermissionRoute resource="installation_configs" action="manage">
              <AdminSettingsLayout />
            </PermissionRoute>
          </MainLayout>
        </CustomerRoute>
      </PrivateRoute>
    }
  >
    <Route path="email" element={<SmtpConfig />} />
    <Route path="storage" element={<StorageConfig />} />
    <Route path="social-login" element={<SocialLoginConfig />} />
    <Route path="channels" element={<ChannelConfig />} />
    <Route path="openai" element={<OpenAIConfig />} />
    <Route path="integrations" element={<IntegrationsConfig />} />
    <Route path="inbound-email" element={<InboundEmailConfig />} />
    <Route path="frontend-runtime" element={<FrontendRuntimeConfig />} />
  </Route>
);
