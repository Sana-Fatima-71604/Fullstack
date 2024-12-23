import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import { MantineProvider } from'@mantine/core';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

<MantineProvider
  withGlobalStyles
  withNormalizeCSS
  theme={{
    colorScheme: 'light',
  }}
>
<BrowserRouter>
<App />
</BrowserRouter>
</MantineProvider>

);

