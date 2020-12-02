import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "bootstrap/dist/css/bootstrap.css";
import RouterDom from "./ReactRouter/Component/RouterDom";
import {BrowserRouter} from "react-router-dom";
import "./Index.css";
import NavbarRouter from "./ReactRouter/Component/NavbarRouter";

ReactDOM.render(
  <>
    <App />
  </>,
  document.getElementById('root')
);

