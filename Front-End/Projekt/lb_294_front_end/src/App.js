import './App.css';
import { Routes, Route } from 'react-router-dom';
import Account from "./components/Layout/Account";
import BookDetails from './components/Books/BookDetails';
import BookList from "./components/Books/BookList";
import Favourites from './components/Layout/Favourites';
import Footer from "./components/Layout/Footer";
import Forums from "./components/Layout/Forums";
import Genres from "./components/Layout/Genres";
import Language from "./components/Layout/Language";
import Navbar from "./components/Layout/Navbar";
import Searchbar from "./components/Layout/Searchbar/Searchbar";
import Rating from "./components/Layout/Rating";
import Orders from './components/Layout/Orders';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<BookList />} /> 
        <Route path="/books/:id" element={<BookDetails />} /> 
        <Route path="/favourites" element={<Favourites />} /> 
        <Route path="/account" element={<Account />} />
        <Route path="/forums" element={<Forums />} />
        <Route path="/language" element={<Language />} />
        <Route path="/searchbar" element={<Searchbar />} />
        <Route path="/genres" element={<Genres />} />
        <Route path="/rating" element={<Rating />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
