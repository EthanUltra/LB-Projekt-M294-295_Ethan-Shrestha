import './App.css';
import { Routes, Route } from 'react-router-dom';
import Account from "./components/Layout/Account/Account";
import BookDetails from './components/Layout/Books/BookDetails';
import BookList from "./components/Layout/Books/BookList";
import Favourites from './components/Layout/Favourites/Favourites';
import Footer from "./components/Layout/Footer/Footer";
import Forums from "./components/Layout/Forums/Forums";
import Navbar from "./components/Layout/Navigation/Navbar";
import Searchbar from "./components/Layout/Searchbar/Searchbar";
import Orders from './components/Layout/Orders/Orders';
import NotFound from './components/Layout/NotFound';
import AddAccount from './components/Layout/Account/AddAccount';
import EditAccount from './components/Layout/Account/EditAccount';
import ViewAccount from './components/Layout/Account/ViewAccount';
import AddForums from './components/Layout/Forums/AddForums';
import EditForums from './components/Layout/Forums/EditForums';
import ViewForums from './components/Layout/Forums/ViewForums';
import Book from './components/Layout/Books/Book';
import AddBook from './components/Layout/Books/AddBook';
import EditBook from './components/Layout/Books/EditBook';
import ViewBook from './components/Layout/Books/ViewBook';

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
        <Route path="/searchbar" element={<Searchbar />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/addaccount" element={<AddAccount />} />
        <Route path="/editaccount/:id" element={<EditAccount />} />
        <Route path="/viewaccount/:id" element={<ViewAccount />} />
        <Route path="/addforums" element={<AddForums />} />
        <Route path="/editforums/:id" element={<EditForums />} />
        <Route path="/viewforums/:id" element={<ViewForums />} />
        <Route path="/book" element={<Book />} />
        <Route path="/addbook" element={<AddBook />} />
        <Route path="/editbook/:id" element={<EditBook />} />
        <Route path="/viewbook/:id" element={<ViewBook />} />
      <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
