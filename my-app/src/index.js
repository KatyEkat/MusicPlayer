import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; 

import { Fragment } from 'react';
import { ThemeProvider } from './Providers/ThemeProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Fragment>

    <ThemeProvider>
      
      <App />

    </ThemeProvider>


  </Fragment>

);


