import React from 'react';
import { Route, Navigate, Outlet } from 'react-router-dom';
import PrivateRoute from '../PrivateRoute';
import CustomerRoute from '../CustomerRoute';
import MainLayout from '@/components/layout/MainLayout';
import PermissionRoute from '../PermissionRoute';

const Dashboard = React.lazy(() => import('@/pages/Customer/Dashboard'));
const Agents = React.lazy(() => import('@/pages/Customer/Agents'));
const AgentEditPage = React.lazy(() => import('@/pages/Customer/Agents/Agent/AgentEditPage'));
const MCPServers = React.lazy(() => import('@/pages/Customer/Agents/MCPServers'));
const CustomMCPServers = React.lazy(() => import('@/pages/Customer/Agents/CustomMCPServers'));
const Tools = React.lazy(() => import('@/pages/Customer/Agents/Tools'));
const CustomTools = React.lazy(() => import('@/pages/Customer/Agents/CustomTools'));
const Contacts = React.lazy(() => import('@/pages/Customer/Contacts'));
const ScheduledActions = React.lazy(() => import('@/pages/Customer/Contacts/ScheduledActions'));
const Channels = React.lazy(() => import('@/pages/Customer/Channels').then(m => ({ default: m.Channels })));
const ChannelSettings = React.lazy(() => import('@/pages/Customer/Channels').then(m => ({ default: m.ChannelSettings })));
const NewChannel = React.lazy(() => import('@/pages/Customer/Channels').then(m => ({ default: m.NewChannel })));
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
const DashboardAppPage = React.lazy(() => import('@/pages/Customer/DashboardApp/DashboardAppPage'));
const Tutorials = React.lazy(() => import('@/pages/Customer/Tutorials'));

export const customerRoutes = (
  <Route
    element={
      <PrivateRoute>
        <CustomerRoute>
          <MainLayout>
            <Outlet />
          </MainLayout>
        </CustomerRoute>
      </PrivateRoute>
    }
  >
    <Route path="/dashboard" element={<PermissionRoute resource="dashboard"><Dashboard /></PermissionRoute>} />

    <Route path="/contacts">
      <Route index element={<PermissionRoute resource="contacts"><Contacts /></PermissionRoute>} />
      <Route path=":contactId" element={<PermissionRoute resource="contacts"><Contacts /></PermissionRoute>} />
      <Route path="scheduled-actions" element={<PermissionRoute resource="contacts"><ScheduledActions /></PermissionRoute>} />
    </Route>

    <Route path="/pipelines">
      <Route index element={<PermissionRoute resource="pipelines"><Pipelines /></PermissionRoute>} />
      <Route path=":pipelineId" element={<PermissionRoute resource="pipelines"><PipelineKanban /></PermissionRoute>} />
    </Route>

    <Route path="/settings">
      <Route path="account" element={<PermissionRoute resource="accounts"><AccountSettings /></PermissionRoute>} />
      <Route path="users" element={<PermissionRoute resource="users"><Users /></PermissionRoute>} />
      <Route path="teams">
        <Route index element={<PermissionRoute resource="teams"><Teams /></PermissionRoute>} />
        <Route path=":teamId/add-users" element={<PermissionRoute resource="teams" action="create"><AddUsers /></PermissionRoute>} />
      </Route>
      <Route path="labels" element={<PermissionRoute resource="labels"><Labels /></PermissionRoute>} />
      <Route path="attributes" element={<PermissionRoute resource="custom_attribute_definitions"><CustomAttributes /></PermissionRoute>} />
      <Route path="canned-responses" element={<PermissionRoute resource="canned_responses"><CannedResponses /></PermissionRoute>} />
      <Route path="macros" element={<PermissionRoute resource="macros"><Macros /></PermissionRoute>} />
      <Route path="integrations">
        <Route index element={<PermissionRoute resource="integrations"><Integrations /></PermissionRoute>} />
        <Route path="webhooks" element={<PermissionRoute resource="webhooks"><WebhooksPage /></PermissionRoute>} />
        <Route path="oauth-apps" element={<PermissionRoute resource="oauth_applications"><OAuthAppsPage /></PermissionRoute>} />
        <Route path="dashboard-apps" element={<PermissionRoute resource="dashboard_apps"><DashboardAppsPage /></PermissionRoute>} />
        <Route path="slack" element={<PermissionRoute resource="integrations"><SlackIntegrationPage /></PermissionRoute>} />
        <Route path="openai" element={<PermissionRoute resource="integrations"><OpenAIPage /></PermissionRoute>} />
        <Route path="bms" element={<PermissionRoute resource="integrations"><BMSPage /></PermissionRoute>} />
        <Route path="leadsquared" element={<PermissionRoute resource="integrations"><LeadSquaredPage /></PermissionRoute>} />
        <Route path="hubspot" element={<PermissionRoute resource="integrations"><HubSpotPage /></PermissionRoute>} />
        <Route path="shopify" element={<PermissionRoute resource="integrations"><ShopifyPage /></PermissionRoute>} />
        <Route path="linear" element={<PermissionRoute resource="integrations"><LinearPage /></PermissionRoute>} />
        <Route path=":integrationId" element={<PermissionRoute resource="integrations"><div className="p-6"><div className="h-full flex items-center justify-center"><div className="text-center"><h2 className="text-2xl font-bold mb-2">🔧 Configuração</h2><p className="text-muted-foreground">Página de configuração em desenvolvimento</p></div></div></div></PermissionRoute>} />
      </Route>
      <Route path="access-tokens" element={<PermissionRoute resource="access_tokens"><AccessTokens /></PermissionRoute>} />
      <Route path="email-template-editor" element={<PermissionRoute resource="message_templates" action="create"><EmailTemplateEditor /></PermissionRoute>} />

      {/* Legacy Redirections */}
      <Route path="custom-tools" element={<Navigate to="/agents/custom-tools" replace />} />
      <Route path="custom-mcp-servers" element={<Navigate to="/agents/custom-mcp-servers" replace />} />
    </Route>

    <Route path="/dashboard-app/:appId" element={<PermissionRoute resource="integrations"><DashboardAppPage /></PermissionRoute>} />

    <Route path="/bots" element={<PermissionRoute resource="bots"><div className="flex items-center justify-center h-full"><div className="text-center"><h2 className="text-2xl font-bold mb-2">🤖 Bots</h2><p className="text-muted-foreground">Página em desenvolvimento</p></div></div></PermissionRoute>} />

    <Route path="/channels">
      <Route index element={<PermissionRoute resource="channels"><Channels /></PermissionRoute>} />
      <Route path="new" element={<PermissionRoute resource="channels" action="create"><NewChannel /></PermissionRoute>} />
      <Route path=":id/settings" element={<PermissionRoute resource="channels" action="create"><ChannelSettings /></PermissionRoute>} />
    </Route>

    <Route path="/reports" element={<PermissionRoute resource="reports"><div className="flex items-center justify-center h-full"><div className="text-center"><h2 className="text-2xl font-bold mb-2">📊 Relatórios</h2><p className="text-muted-foreground">Página em desenvolvimento</p></div></div></PermissionRoute>} />

    <Route path="/agents">
      <Route index element={<Navigate to="/agents/list" replace />} />
      <Route path="list" element={<PermissionRoute resource="ai_agents"><Agents /></PermissionRoute>} />
      <Route path="new" element={<PermissionRoute resource="ai_agents" action="create"><Agents /></PermissionRoute>} />
      <Route path=":id/edit" element={<PermissionRoute resource="ai_agents" action="update"><AgentEditPage /></PermissionRoute>} />
      <Route path="management" element={<PermissionRoute resource="ai_agents"><Agents /></PermissionRoute>} />
      <Route path="mcp-servers" element={<PermissionRoute resource="ai_mcp_servers"><MCPServers /></PermissionRoute>} />
      <Route path="custom-mcp-servers" element={<PermissionRoute resource="ai_custom_mcp_servers"><CustomMCPServers /></PermissionRoute>} />
      <Route path="tools" element={<PermissionRoute resource="ai_tools"><Tools /></PermissionRoute>} />
      <Route path="custom-tools" element={<PermissionRoute resource="ai_custom_tools"><CustomTools /></PermissionRoute>} />
    </Route>

    <Route path="/conversations">
      <Route index element={<PermissionRoute resource="conversations"><ChatPage /></PermissionRoute>} />
      <Route path=":conversationId" element={<PermissionRoute resource="conversations"><ChatPage /></PermissionRoute>} />
    </Route>

    <Route path="/tutorials" element={<Tutorials />} />
  </Route>
);
