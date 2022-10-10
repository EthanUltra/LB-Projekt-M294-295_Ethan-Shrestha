import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import AppContextProvider from './components/context/appContext';
import i18n from "i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from "react-i18next";
import HttpApi from 'i18next-http-backend';


import 'bootstrap/dist/js/bootstrap.min.js';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'flag-icon-css/css/flag-icons.min.css';

import './index.css';
import App from './App';

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs: ['en', 'fr', 'de'],
    fallbacking: 'en',
    detection: {
      // order and from where user language should be detected
      order: ['path', 'cookie', 'htmlTag', 'subdomain'],
      caches: ['cookie'],
    },
    backend: {
      loadPath: '../assets/locales/{{lng}}/translation.json',
    }

  });

const loadingMarkup = (
  <div className="py-4 text-center">
    <h2>Loading...</h2>
  </div>
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Suspense fallback={loadingMarkup}>
    <React.StrictMode>
      <BrowserRouter>
        <AppContextProvider>
          <App />
        </AppContextProvider>
      </BrowserRouter>
    </React.StrictMode>
  </Suspense>
);

const express = require("express");
const mysql = require("mysql");
const cors = require('cors');

const account = express();

account.use(express.json());
account.use(cors({
  origin: "*",
  credentials: true,
})
);

const db = mysql.createConnection({
  user: "LB_Webshop",
  host: "localhost",
  password: "LB_Webshop",
  database: "LB_Webshop",
});

account.post('/http://localhost:8080/api/accounts', (req, res) => {

  const username = req.body.username;
  const email = req.body.email
  const password = req.body.password;

  db.query(
    "INSERT INTO account (username, email, password) VALUES (?,?)",
    [username, email, password],
    (err, result) => {
      console.log(err);
    }
  );
});

account.listen(8080, () => {
  console.log("running on port server");
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
