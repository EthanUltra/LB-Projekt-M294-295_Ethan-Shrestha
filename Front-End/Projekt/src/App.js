import './App.css';
import {
  Routes,
  Route,
  Outlet
} from 'react-router-dom'

import Account from './Account/Account';
import Language from './Language';
import Rating from './Rating';
import TopBooks from './TopBooks';
import Genres from './Genres/Genres';
import Home from './Home';
import Favourite from './Favourite';
import Forums from './Forums';
import NotFound from './NotFound';
import Navigation from './Navigation';
import Privacy from './Account/Privacy';
import Information from './Account/Information';
import Orders from './Account/Orders';
import TermsAndService from './Account/Terms and Service';
import Support from './Account/Support'
import React from 'react';

function Layout() {
  return (
    <div className="App">
      <Navigation />
      <div className="content">
        <header className="App-header">
          <h1>Willkommen zum Webshop für Bücher</h1>
          <Outlet />
        </header>
      </div>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="home" element={<Home />} />
        <Route path="account" element={<Account />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="information" element={<Information />} />
          <Route path="orders" element={<Orders />} />
          <Route path="termsandservice" element={<TermsAndService />} />
          <Route path="support" element={<Support />} />
        <Route path="language" element={<Language />} />
        <Route path="rating" element={<Rating />} />
        <Route path="topbooks" element={<TopBooks />} />
        <Route path="genres" element={<Genres />} />
        <Route path="favourite" element={<Favourite />} />
        <Route path="forums" element={<Forums />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}


export default App;
