import React from 'react';
import '../App';
import { useAppContext } from './context/appContext';
import { useNavigate } from 'react-router-dom';

const Orders = () => {

    const { orders, addToOrders, removeFromOrders } = useAppContext();

    console.log('orders are', orders);

    const navigate = useNavigate();

    const ordersChecker = (id) => {
        const boolean = orders.some((book) => book.id === id);
        return boolean;
    };

    return (
        <div className="favourites">
            {orders.length > 0 ? (
                orders.map((book) => (
                    <div key={book.id} className="book">
                        <div>
                            <h4>{book.title}</h4>
                        </div>
                        <div>
                            <img src={book.image_url} alt="#" onClick={() => navigate(`/books/${book.id}`)} />
                        </div>
                        <div>
                            {ordersChecker(book.id) ? (
                                <button onClick={() => removeFromOrders(book.id)}>
                                    Remove from Favourites
                                </button>
                            ) : (
                                <button onClick={() => addToOrders(book)}>
                                    Add to Favourites
                                </button>
                            )}
                        </div>
                    </div>
                ))
            ) : (
                <h1>You don't have any favourite books yet!</h1>
            )}
        </div>
    );
};
export default Orders;