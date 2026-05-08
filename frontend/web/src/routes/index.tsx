import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import CustomerRoute from './CustomerRoute';
import SmartRedirect from './SmartRedirect';
import RouterGuard from '@/guards/RouterGuard';
import PermissionRoute from './PermissionRoute';

import MainLayout from '@/components/layout/MainLayout';

const PageLoader = () => (
  <div className="flex items-center justify-center h-full">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
  </div>
);

// --- Lazy-loaded pages (code splitting) ---

// Public pages
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

// Customer pages
const Dashboard = React.lazy(() => import('@/pages/Customer/Dashboard'));
const Agents = React.lazy(() => import('@/pages/Customer/Agents'));
const AgentEditPage = React.lazy(() => import('@/pages/Customer/Agents/Agent/AgentEditPage'));
const MCPServers = React.lazy(() => import('@/pages/Customer/Agents/MCPServers'));
const CustomMCPServers = React.lazy(() => import('@/pages/Customer/Agents/CustomMCPServers'));
const Tools = React.lazy(() => import('@/pages/Customer/Agents/Tools'));
const CustomTools = React.lazy(() => import('@/pages/Customer/Agents/CustomTools'));
const Contacts = React.lazy(() => import('@/pages/Customer/Contacts'));
const ScheduledActions = React.lazy(() => import('@/pages/Customer/Contacts/ScheduledActions'));
const ChatPage = React.lazy(() => import('@/pages/Customer/Chat/ChatPage'));
const Pipelines = React.lazy(() => import('@/pages/Customer/Pipelines/Pipelines'));
const PipelineKanban = React.lazy(() => import('@/pages/Customer/Pipelines/PipelineKanban'));
const AccountSettings = React.lazy(() => import('@/pages/Customer/Settings/Account').then(m => ({ default: m.AccountSettings })));
const Teams = React.lazy(() => import('@/pages/Customer/Settings/Teams/Teams'));
const AddUsers = React.lazy(() => import('@/pages/Customer/Settings/Teams').then(m => ({ default: m.AddUsers })));
const Users = React.lazy(() => import('@/pages/Customer/Settings/Users'));
const Labels = React.lazy(() => import('@/pages/Customer/Settings/Labels'));
const CustomAttributes = React.lazy(() => import('@/pages/Customer/Settings/CustomAttributes'));
const CannedResponses = React.lazy(() => import('@/pages/Customer/Settings/CannedResponses'));
const Macros = React.lazy(() => import('@/pages/Customer/Settings/Macros').then(m => ({ default: m.Macros })));
const Integrations = React.lazy(() => import('@/pages/Customer/Settings/Integrations').then(m => ({ default: m.Integrations })));
const EmailTemplateEditor = React.lazy(() => import('@/pages/Customer/Settings/EmailTemplateEditor'));
const WebhooksPage = React.lazy(() => import('@/pages/Customer/Settings/Integrations/WebhooksPage'));
const OAuthAppsPage = React.lazy(() => import('@/pages/Customer/Settings/Integrations/OAuthAppsPage'));
const DashboardAppsPage = React.lazy(() => import('@/pages/Customer/Settings/Integrations/DashboardAppsPage'));
const AccessTokens = React.lazy(() => import('@/pages/Customer/Settings/AccessTokens/AccessTokens'));
const SlackIntegrationPage = React.lazy(() => import('@/pages/Customer/Settings/Integrations/SlackIntegrationPage'));
const OpenAIPage = React.lazy(() => import('@/pages/Customer/Settings/Integrations/OpenAIPage'));
const BMSPage = React.lazy(() => import('@/pages/Customer/Settings/Integrations/BMSPage'));
const LeadSquaredPage = React.lazy(() => import('@/pages/Customer/Settings/Integrations/LeadSquaredPage'));
const HubSpotPage = React.lazy(() => import('@/pages/Customer/Settings/Integrations/HubSpotPage'));
const ShopifyPage = React.lazy(() => import('@/pages/Customer/Settings/Integrations/ShopifyPage'));
const LinearPage = React.lazy(() => import('@/pages/Customer/Settings/Integrations/LinearPage'));
const DashboardAppPage = React.lazy(() => import('@/pages/Customer/DashboardApp'));
const Channels = React.lazy(() => import('@/pages/Customer/Channels').then(m => ({ default: m.Channels })));
const ChannelSettings = React.lazy(() => import('@/pages/Customer/Channels').then(m => ({ default: m.ChannelSettings })));
const NewChannel = React.lazy(() => import('@/pages/Customer/Channels').then(m => ({ default: m.NewChannel })));

// Admin pages
const AdminSettingsLayout = React.lazy(() => import('@/pages/Admin/Settings'));
const SmtpConfig = React.lazy(() => import('@/pages/Admin/Settings/SmtpConfig'));
const StorageConfig = React.lazy(() => import('@/pages/Admin/Settings/StorageConfig'));
const SocialLoginConfig = React.lazy(() => import('@/pages/Admin/Settings/SocialLoginConfig'));
const ChannelConfig = React.lazy(() => import('@/pages/Admin/Settings/ChannelConfig'));
const OpenAIConfig = React.lazy(() => import('@/pages/Admin/Settings/OpenAIConfig'));
const IntegrationsConfig = React.lazy(() => import('@/pages/Admin/Settings/IntegrationsConfig'));
const InboundEmailConfig = React.lazy(() => import('@/pages/Admin/Settings/InboundEmailConfig'));
const FrontendRuntimeConfig = React.lazy(() => import('@/pages/Admin/Settings/FrontendRuntimeConfig'));

const Tutorials = React.lazy(() => import('@/pages/Customer/Tutorials'));

const Documentation = React.lazy(() => import('@/pages/Shared/Documentation'));
const Marketplace = React.lazy(() => import('@/pages/Shared/Marketplace'));
const Profile = React.lazy(() => import('@/pages/Shared/Profile'));

const Setup = React.lazy(() => import('@/pages/Setup/Setup'));
const OnboardingPage = React.lazy(() => import('@/pages/Setup/OnboardingPage'));

const NotFound = React.lazy(() => import('@/pages/NotFound'));
const Unauthorized = React.lazy(() => import('@/pages/Unauthorized'));
const Widget = React.lazy(() => import('@/pages/Widget'));

// --- Helper components ---

const SuspenseWrap: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <Suspense fallback={<PageLoader />}>{children}</Suspense>
);

const ProtectedPage: React.FC<{
  resource: string;
  action: string;
  children: React.ReactNode;
}> = ({ resource, action, children }) => (
  <PrivateRoute>
    <CustomerRoute>
      <MainLayout>
        <PermissionRoute resource={resource} action={action}>
          <SuspenseWrap>{children}</SuspenseWrap>
        </PermissionRoute>
      </MainLayout>
    </CustomerRoute>
  </PrivateRoute>
);

const ChatRouteElement = (
  <ProtectedPage resource="conversations" action="read">
    <ChatPage />
  </ProtectedPage>
);

const AppRouter = () => {
  return (
    <BrowserRouter>
      <RouterGuard>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            {/* Smart root redirect */}
            <Route
              path="/"
              element={
                <PrivateRoute>
                  <SmartRedirect />
                </PrivateRoute>
              }
            />

            {/* Public routes */}
            <Route path="/login" element={<PublicRoute><SuspenseWrap><Auth /></SuspenseWrap></PublicRoute>} />
            <Route path="/auth/confirm-email" element={<PublicRoute><SuspenseWrap><EmailConfirmation /></SuspenseWrap></PublicRoute>} />
            <Route path="/auth/confirmation" element={<PublicRoute><SuspenseWrap><EmailConfirmation /></SuspenseWrap></PublicRoute>} />
            <Route path="/auth/reset-password" element={<PublicRoute><SuspenseWrap><ResetPassword /></SuspenseWrap></PublicRoute>} />
            <Route path="/auth/password/edit" element={<PublicRoute><SuspenseWrap><ResetPassword /></SuspenseWrap></PublicRoute>} />

            {/* OAuth Callbacks */}
            <Route path="/instagram/callback" element={<PublicRoute><SuspenseWrap><InstagramCallback /></SuspenseWrap></PublicRoute>} />
            <Route path="/google/callback" element={<PublicRoute><SuspenseWrap><GoogleCallback /></SuspenseWrap></PublicRoute>} />
            <Route path="/google-calendar/callback" element={<PublicRoute><SuspenseWrap><GoogleCalendarCallback /></SuspenseWrap></PublicRoute>} />
            <Route path="/google-sheets/callback" element={<PublicRoute><SuspenseWrap><GoogleSheetsCallback /></SuspenseWrap></PublicRoute>} />
            <Route path="/github/callback" element={<PublicRoute><SuspenseWrap><GitHubCallback /></SuspenseWrap></PublicRoute>} />
            <Route path="/notion/callback" element={<PublicRoute><SuspenseWrap><NotionCallback /></SuspenseWrap></PublicRoute>} />
            <Route path="/stripe/callback" element={<PublicRoute><SuspenseWrap><StripeCallback /></SuspenseWrap></PublicRoute>} />
            <Route path="/linear/callback" element={<PublicRoute><SuspenseWrap><LinearCallback /></SuspenseWrap></PublicRoute>} />
            <Route path="/monday/callback" element={<PublicRoute><SuspenseWrap><MondayCallback /></SuspenseWrap></PublicRoute>} />
            <Route path="/atlassian/callback" element={<PublicRoute><SuspenseWrap><AtlassianCallback /></SuspenseWrap></PublicRoute>} />
            <Route path="/asana/callback" element={<PublicRoute><SuspenseWrap><AsanaCallback /></SuspenseWrap></PublicRoute>} />
            <Route path="/hubspot/callback" element={<PublicRoute><SuspenseWrap><HubSpotCallback /></SuspenseWrap></PublicRoute>} />
            <Route path="/paypal/callback" element={<PublicRoute><SuspenseWrap><PayPalCallback /></SuspenseWrap></PublicRoute>} />
            <Route path="/canva/callback" element={<PublicRoute><SuspenseWrap><CanvaCallback /></SuspenseWrap></PublicRoute>} />
            <Route path="/supabase/callback" element={<PublicRoute><SuspenseWrap><SupabaseCallback /></SuspenseWrap></PublicRoute>} />
            <Route path="/microsoft/callback" element={<PublicRoute><SuspenseWrap><MicrosoftCallback /></SuspenseWrap></PublicRoute>} />

            {/* Public widget & survey */}
            <Route path="/widget" element={<PublicRoute><SuspenseWrap><Widget /></SuspenseWrap></PublicRoute>} />
            <Route path="/survey/responses/:uuid" element={<PublicRoute><SuspenseWrap><SurveyResponse /></SuspenseWrap></PublicRoute>} />

            {/* Setup routes */}
            <Route path="/setup" element={<SuspenseWrap><Setup /></SuspenseWrap>} />
            <Route path="/setup/onboarding" element={<SuspenseWrap><OnboardingPage /></SuspenseWrap>} />

            {/* Contacts */}
            <Route path="/contacts" element={<ProtectedPage resource="contacts" action="read"><Contacts /></ProtectedPage>} />
            <Route path="/contacts/:contactId" element={<ProtectedPage resource="contacts" action="read"><Contacts /></ProtectedPage>} />
            <Route path="/contacts/scheduled-actions" element={<ProtectedPage resource="contacts" action="read"><ScheduledActions /></ProtectedPage>} />

            {/* Pipelines */}
            <Route path="/pipelines" element={<ProtectedPage resource="pipelines" action="read"><Pipelines /></ProtectedPage>} />
            <Route path="/pipelines/:pipelineId" element={<ProtectedPage resource="pipelines" action="read"><PipelineKanban /></ProtectedPage>} />

            {/* Settings */}
            <Route path="/settings/account" element={<ProtectedPage resource="accounts" action="read"><AccountSettings /></ProtectedPage>} />
            <Route path="/settings/users" element={<ProtectedPage resource="users" action="read"><Users /></ProtectedPage>} />
            <Route path="/settings/teams" element={<ProtectedPage resource="teams" action="read"><Teams /></ProtectedPage>} />
            <Route path="/settings/teams/:teamId/add-users" element={<ProtectedPage resource="teams" action="create"><AddUsers /></ProtectedPage>} />
            <Route path="/settings/labels" element={<ProtectedPage resource="labels" action="read"><Labels /></ProtectedPage>} />
            <Route path="/settings/attributes" element={<ProtectedPage resource="custom_attribute_definitions" action="read"><CustomAttributes /></ProtectedPage>} />
            <Route path="/settings/canned-responses" element={<ProtectedPage resource="canned_responses" action="read"><CannedResponses /></ProtectedPage>} />
            <Route path="/settings/macros" element={<ProtectedPage resource="macros" action="read"><Macros /></ProtectedPage>} />
            <Route path="/settings/integrations" element={<ProtectedPage resource="integrations" action="read"><Integrations /></ProtectedPage>} />

            {/* Redirects from old settings paths to agents */}
            <Route path="/settings/custom-tools" element={<Navigate to="/agents/custom-tools" replace />} />
            <Route path="/settings/custom-mcp-servers" element={<Navigate to="/agents/custom-mcp-servers" replace />} />

            {/* Integration sub-pages */}
            <Route path="/settings/integrations/webhooks" element={<ProtectedPage resource="webhooks" action="read"><WebhooksPage /></ProtectedPage>} />
            <Route path="/settings/integrations/oauth-apps" element={<ProtectedPage resource="oauth_applications" action="read"><OAuthAppsPage /></ProtectedPage>} />
            <Route path="/settings/integrations/dashboard-apps" element={<ProtectedPage resource="dashboard_apps" action="read"><DashboardAppsPage /></ProtectedPage>} />
            <Route path="/settings/integrations/slack" element={<ProtectedPage resource="integrations" action="read"><SlackIntegrationPage /></ProtectedPage>} />
            <Route path="/settings/integrations/openai" element={<ProtectedPage resource="integrations" action="read"><OpenAIPage /></ProtectedPage>} />
            <Route path="/settings/integrations/bms" element={<ProtectedPage resource="integrations" action="read"><BMSPage /></ProtectedPage>} />
            <Route path="/settings/integrations/leadsquared" element={<ProtectedPage resource="integrations" action="read"><LeadSquaredPage /></ProtectedPage>} />
            <Route path="/settings/integrations/hubspot" element={<ProtectedPage resource="integrations" action="read"><HubSpotPage /></ProtectedPage>} />
            <Route path="/settings/integrations/shopify" element={<ProtectedPage resource="integrations" action="read"><ShopifyPage /></ProtectedPage>} />
            <Route path="/settings/integrations/linear" element={<ProtectedPage resource="integrations" action="read"><LinearPage /></ProtectedPage>} />
            <Route path="/settings/integrations/:integrationId" element={<ProtectedPage resource="integrations" action="read">
              <div className="p-6">
                <div className="h-full flex items-center justify-center">
                  <div className="text-center">
                    <h2 className="text-2xl font-bold mb-2">Configuracao</h2>
                    <p className="text-muted-foreground">Pagina de configuracao em desenvolvimento</p>
                  </div>
                </div>
              </div>
            </ProtectedPage>} />

            {/* Dashboard Apps */}
            <Route path="/dashboard-app/:appId" element={<ProtectedPage resource="integrations" action="read"><DashboardAppPage /></ProtectedPage>} />

            {/* Access Tokens */}
            <Route path="/settings/access-tokens" element={<ProtectedPage resource="access_tokens" action="read"><AccessTokens /></ProtectedPage>} />

            {/* Email Template Editor */}
            <Route path="/settings/email-template-editor" element={<ProtectedPage resource="message_templates" action="create"><EmailTemplateEditor /></ProtectedPage>} />

            {/* Reports placeholder */}
            <Route path="/reports" element={<ProtectedPage resource="reports" action="read">
              <div className="flex items-center justify-center h-full">
                <div className="text-center">
                  <h2 className="text-2xl font-bold mb-2">Relatorios</h2>
                  <p className="text-muted-foreground">Pagina em desenvolvimento</p>
                </div>
              </div>
            </ProtectedPage>} />

            {/* Bots placeholder */}
            <Route path="/bots" element={<ProtectedPage resource="bots" action="read">
              <div className="flex items-center justify-center h-full">
                <div className="text-center">
                  <h2 className="text-2xl font-bold mb-2">Bots</h2>
                  <p className="text-muted-foreground">Pagina em desenvolvimento</p>
                </div>
              </div>
            </ProtectedPage>} />

            {/* Channels */}
            <Route path="/channels" element={<ProtectedPage resource="channels" action="read"><Channels /></ProtectedPage>} />
            <Route path="/channels/new" element={<ProtectedPage resource="channels" action="create"><NewChannel /></ProtectedPage>} />
            <Route path="/channels/:id/settings" element={<ProtectedPage resource="channels" action="create"><ChannelSettings /></ProtectedPage>} />

            {/* Agents */}
            <Route path="/agents" element={<Navigate to="/agents/list" replace />} />
            <Route path="/agents/list" element={<ProtectedPage resource="ai_agents" action="read"><Agents /></ProtectedPage>} />
            <Route path="/agents/new" element={<ProtectedPage resource="ai_agents" action="create"><Agents /></ProtectedPage>} />
            <Route path="/agents/:id/edit" element={<ProtectedPage resource="ai_agents" action="update"><AgentEditPage /></ProtectedPage>} />
            <Route path="/agents/management" element={<ProtectedPage resource="ai_agents" action="read"><Agents /></ProtectedPage>} />
            <Route path="/agents/mcp-servers" element={<ProtectedPage resource="ai_mcp_servers" action="read"><MCPServers /></ProtectedPage>} />
            <Route path="/agents/custom-mcp-servers" element={<ProtectedPage resource="ai_custom_mcp_servers" action="read"><CustomMCPServers /></ProtectedPage>} />
            <Route path="/agents/tools" element={<ProtectedPage resource="ai_tools" action="read"><Tools /></ProtectedPage>} />
            <Route path="/agents/custom-tools" element={<ProtectedPage resource="ai_custom_tools" action="read"><CustomTools /></ProtectedPage>} />

            {/* Dashboard */}
            <Route path="/dashboard" element={<ProtectedPage resource="dashboard" action="read"><Dashboard /></ProtectedPage>} />

            {/* Conversations / Chat */}
            <Route path="/conversations" element={ChatRouteElement} />
            <Route path="/conversations/:conversationId" element={ChatRouteElement} />

            {/* Tutorials */}
            <Route path="/tutorials" element={
              <PrivateRoute>
                <CustomerRoute>
                  <MainLayout>
                    <SuspenseWrap><Tutorials /></SuspenseWrap>
                  </MainLayout>
                </CustomerRoute>
              </PrivateRoute>
            } />

            {/* Admin Settings */}
            <Route
              path="/settings/admin"
              element={
                <PrivateRoute>
                  <CustomerRoute>
                    <MainLayout>
                      <PermissionRoute resource="installation_configs" action="manage">
                        <SuspenseWrap><AdminSettingsLayout /></SuspenseWrap>
                      </PermissionRoute>
                    </MainLayout>
                  </CustomerRoute>
                </PrivateRoute>
              }
            >
              <Route path="email" element={<SuspenseWrap><SmtpConfig /></SuspenseWrap>} />
              <Route path="storage" element={<SuspenseWrap><StorageConfig /></SuspenseWrap>} />
              <Route path="social-login" element={<SuspenseWrap><SocialLoginConfig /></SuspenseWrap>} />
              <Route path="channels" element={<SuspenseWrap><ChannelConfig /></SuspenseWrap>} />
              <Route path="openai" element={<SuspenseWrap><OpenAIConfig /></SuspenseWrap>} />
              <Route path="integrations" element={<SuspenseWrap><IntegrationsConfig /></SuspenseWrap>} />
              <Route path="inbound-email" element={<SuspenseWrap><InboundEmailConfig /></SuspenseWrap>} />
              <Route path="frontend-runtime" element={<SuspenseWrap><FrontendRuntimeConfig /></SuspenseWrap>} />
            </Route>

            {/* Shared routes */}
            <Route path="/documentation" element={<PrivateRoute><MainLayout><SuspenseWrap><Documentation /></SuspenseWrap></MainLayout></PrivateRoute>} />
            <Route path="/marketplace" element={<PrivateRoute><MainLayout><SuspenseWrap><Marketplace /></SuspenseWrap></MainLayout></PrivateRoute>} />
            <Route path="/profile" element={<PrivateRoute><MainLayout><SuspenseWrap><Profile /></SuspenseWrap></MainLayout></PrivateRoute>} />

            {/* Error routes */}
            <Route path="/unauthorized" element={<PrivateRoute><SuspenseWrap><Unauthorized /></SuspenseWrap></PrivateRoute>} />
            <Route path="*" element={<SuspenseWrap><NotFound /></SuspenseWrap>} />
          </Routes>
        </Suspense>
      </RouterGuard>
    </BrowserRouter>
  );
};

export default AppRouter;
