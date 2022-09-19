import './App.css';
import {
  Routes,
  Route,
  Outlet
} from 'react-router-dom'

import Konto from './Konto';
import Sprache from './Sprache';
import Bewertungen from './Bewertungen';
import TopBücher from './TopBücher';
import Genres from './Genres';
import Home from './Home';
import Favourite from './Favourite';
import Forums from './Forums';
import NotFound from './NotFound';
import Navigation from './Navigation';
import React from 'react';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="home" element={<Home />} />
        <Route path="konto" element={<Konto />} />
        <Route path="sprache" element={<Sprache />} />
        <Route path="bewertungen" element={<Bewertungen />} />
        <Route path="topbücher" element={<TopBücher />} />
        <Route path="genres" element={<Genres />} />
        <Route path="favourite" element={<Favourite />} />
        <Route path="forums" element={<Forums />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

function Layout() {
  return (
    <div className="App">
      <Navigation />
      <div className="content">
        <header className="App-header">
          <h1>Willkommen zum Webshop für Bücher</h1>
          <h1>Test to see if this is right</h1>
          <h1>Hi It's me!</h1>
          <h1>Yes</h1>
          <Outlet/>
        </header>
      </div>
    </div>
  );
}


export default App;
