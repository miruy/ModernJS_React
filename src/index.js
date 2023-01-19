import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { AdminFlagProvider } from './components/providers/AdminFlagProvider';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(

  <AdminFlagProvider>
    <App />
  </AdminFlagProvider>,

);