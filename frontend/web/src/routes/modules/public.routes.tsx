import React from 'react';
import { Route, Outlet } from 'react-router-dom';
import PublicRoute from '../PublicRoute';

const Auth = React.lazy(() => import('@/pages/Auth'));
const EmailConfirmation = React.lazy(() => import('@/components/auth/EmailConfirmation'));
const ResetPassword = React.lazy(() => import('@/components/auth/ResetPassword'));
const InstagramCallback = React.lazy(() => import('@/pages/InstagramCallback'));
const GoogleCallback = React.lazy(() => import('@/pages/GoogleCallback'));
const GoogleCalendarCallback = React.lazy(() => import('@/pages/GoogleCalendarCallback'));
const GoogleSheetsCallback = React.lazy(() => import('@/pages/GoogleSheetsCallback'));
const GitHubCallback = React.lazy(() => import('@/pages/GitHubCallback'));
const NotionCallback = React.lazy(() => import('@/pages/NotionCallback'));
const StripeCallback = React.lazy(() => import('@/pages/StripeCallback'));
const LinearCallback = React.lazy(() => import('@/pages/LinearCallback'));
const MondayCallback = React.lazy(() => import('@/pages/MondayCallback'));
const AtlassianCallback = React.lazy(() => import('@/pages/AtlassianCallback'));
const MicrosoftCallback = React.lazy(() => import('@/pages/MicrosoftCallback'));
const AsanaCallback = React.lazy(() => import('@/pages/AsanaCallback'));
const HubSpotCallback = React.lazy(() => import('@/pages/HubSpotCallback'));
const PayPalCallback = React.lazy(() => import('@/pages/PayPalCallback'));
const CanvaCallback = React.lazy(() => import('@/pages/CanvaCallback'));
const SupabaseCallback = React.lazy(() => import('@/pages/SupabaseCallback'));
const SurveyResponse = React.lazy(() => import('@/pages/Public/Survey/SurveyResponse'));
const Widget = React.lazy(() => import('@/pages/Widget'));

export const publicRoutes = (
  <Route
    element={
      <PublicRoute>
        <React.Suspense fallback={null}>
          <Outlet />
        </React.Suspense>
      </PublicRoute>
    }
  >
    <Route path="/login" element={<Auth />} />
    <Route path="/auth">
      <Route path="confirm-email" element={<EmailConfirmation />} />
      <Route path="confirmation" element={<EmailConfirmation />} />
      <Route path="reset-password" element={<ResetPassword />} />
      <Route path="password/edit" element={<ResetPassword />} />
    </Route>

    <Route path="/instagram/callback" element={<InstagramCallback />} />
    <Route path="/google/callback" element={<GoogleCallback />} />
    <Route path="/google-calendar/callback" element={<GoogleCalendarCallback />} />
    <Route path="/google-sheets/callback" element={<GoogleSheetsCallback />} />
    <Route path="/github/callback" element={<GitHubCallback />} />
    <Route path="/notion/callback" element={<NotionCallback />} />
    <Route path="/stripe/callback" element={<StripeCallback />} />
    <Route path="/linear/callback" element={<LinearCallback />} />
    <Route path="/monday/callback" element={<MondayCallback />} />
    <Route path="/atlassian/callback" element={<AtlassianCallback />} />
    <Route path="/asana/callback" element={<AsanaCallback />} />
    <Route path="/hubspot/callback" element={<HubSpotCallback />} />
    <Route path="/paypal/callback" element={<PayPalCallback />} />
    <Route path="/canva/callback" element={<CanvaCallback />} />
    <Route path="/supabase/callback" element={<SupabaseCallback />} />
    <Route path="/microsoft/callback" element={<MicrosoftCallback />} />

    <Route path="/widget" element={<Widget />} />
    <Route path="/survey/responses/:uuid" element={<SurveyResponse />} />
  </Route>
);
