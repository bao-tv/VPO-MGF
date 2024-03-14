import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createEmotionCache, theme } from './utils'
import LayoutMain from './layout/LayoutMain';
import { CacheProvider } from '@emotion/react'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'
import 'react-toastify/dist/ReactToastify.min.css'
// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <CacheProvider value={clientSideEmotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ToastContainer />
        <LayoutMain >
          <App />
        </LayoutMain>
      </ThemeProvider>
    </CacheProvider>
  </React.StrictMode>
);
