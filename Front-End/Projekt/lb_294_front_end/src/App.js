import './App.css';
import { Routes, Route } from 'react-router-dom';
import Account from "./components/Account";
import BookDetails from './components/BookDetails';
import BookList from "./components/BookList";
import Cost from './components/Cost';
import Favourites from './components/Favourites';
import Footer from "./components/Footer";
import Forums from "./components/Forums";
import Genres from "./components/Genres";
import Language from "./components/Language";
import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";
import Rating from "./components/Rating";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<BookList />} /> 
        <Route path="/books/:id" element={<BookDetails />} /> 
        <Route path="/favourites" element={<Favourites />} /> 
        <Route path="/account" element={<Account />} />
        <Route path="/cost" element={<Cost />} />
        <Route path="/forums" element={<Forums />} />
        <Route path="/language" element={<Language />} />
        <Route path="/searchbar" element={<Searchbar />} />
        <Route path="/genres" element={<Genres />} />
        <Route path="/rating" element={<Rating />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
