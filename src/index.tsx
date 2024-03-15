import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import LayoutMain from './layout/LayoutMain';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the grid


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <LayoutMain >
      <App />
    </LayoutMain>
  </React.StrictMode>
);
