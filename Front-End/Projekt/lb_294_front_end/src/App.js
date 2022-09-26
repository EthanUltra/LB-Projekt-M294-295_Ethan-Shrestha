import './App.css';
import { Routes, Route } from 'react-router-dom';
import BookList from "./components/BookList";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Favourites from './components/Favourites';
import BookDetails from './components/BookDetails';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<BookList />} /> 
        <Route path="/books/:id" element={<BookDetails />} /> 
        <Route path="/favourites" element={<Favourites />} /> 
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
