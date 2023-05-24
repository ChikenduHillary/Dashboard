import React from 'react';
import { createRoot } from 'react-dom/client';
import { ContextProvider } from './contexts/ContextProvider';

import 'tailwindcss/tailwind.css'
import './index.css';
import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(
    <ContextProvider>
        <App />
    </ContextProvider>
);