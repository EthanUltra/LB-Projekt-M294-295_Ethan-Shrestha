import React,{useState,useEffect} from 'react';
import "../../App";
import {useParams } from 'react-router-dom';
import axios from 'axios';
import { BOOK_DETAILS_URL } from '../../API';
import { useAppContext } from '../context/appContext';

const BookDetails = () => {

    const [ book, setBook] = useState({});

    const { id } = useParams();

    useEffect(()=> {
        axios.get(`${BOOK_DETAILS_URL}/${id}`)
        .then(res=> {
            setBook(res.data);
        }).catch(err=> console.log(err));
    }, [id])

    const { favourites, addToFavourites, removeFromFavourites } = useAppContext();

    const { orders, addToOrders, removeFromOrders } = useAppContext();


    const favouritesChecker = (id) => {
        const boolean = favourites.some((book) => book.id === id);
        return boolean;
    };

    const buyerChecker = (id) => {
        const boolean = orders.some((book) => book.id === id);
        return boolean;
    };

  return (
    <div class="book-details">
        <div className="book-image">
            <h2>{book?.title}</h2>
            <img src={book?.image_url} alt="#"/>
        </div>
        <div className="book-description">
            <h2>Description</h2>
            <p>{book?.description}</p>
            <h2>Authors</h2>
            <p>{book?.authors}</p>
            <h2>Genres</h2>
            <p>{book?.genres}</p>
            <h2>Rating</h2>
            <p>{book.rating}</p>
              <div>
                  {favouritesChecker(book.id) ? (
                      <button onClick={() => removeFromFavourites(book.id)}>
                          Remove from Favourites
                      </button>
                  ) : (
                      <button onClick={() => addToFavourites(book)}>
                          Add to Favourites
                      </button>
                  )};

                  {buyerChecker(book.id) ? (
                      <button onClick={() => removeFromOrders(book.id)}>
                          Remove From Order
                      </button>
                  ) : (
                      <button onClick={() => addToOrders(book)}>
                          Add to Order
                      </button>
                  )};

              </div>
        </div>
    </div>
  );
}

export default BookDetails;