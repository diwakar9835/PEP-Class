// import { createRoot } from 'react-dom/client';
// import App from './App.jsx';
import ContextThemeProvider from "./ContextThemeProvider.jsx";

// createRoot(document.getElementById('root')).render(
// <ContextThemeProvider>
//   <App />
// </ContextThemeProvider>
// );  

import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import AppRouter from "./AppRouter.jsx";
import { Provider } from "react-redux";
import store from "./store.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
  <BrowserRouter>
    <ContextThemeProvider>
      {/* <App /> */}
      <AppRouter />
    </ContextThemeProvider>
  </BrowserRouter>
  </Provider>
);
