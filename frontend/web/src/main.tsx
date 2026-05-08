import React from 'react';
import { createRoot } from 'react-dom/client';
import "@ultraapi/design-system/styles";
import './styles/globals.css';
import './i18n/config'; // Importar configuração do i18n
import App from './App.tsx';
import { initTheme } from './utils/themeUtils';
import { initGA4 } from './utils/ga4Utils';

// Inicialização do tema antes do React montar
initTheme();

// Inicialização do Google Analytics 4
initGA4();

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
