import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; 
import reducer from "./Redux/Reducers";
import { Provider } from "react-redux";

import { Fragment } from 'react';
import { ThemeProvider } from './Providers/ThemeProvider';
import { createStore } from "redux";

const store = createStore(reducer)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Fragment>

  <Provider store={store}>
    <ThemeProvider>
      
      <App />

    </ThemeProvider>
  </Provider>


  </Fragment>

);


