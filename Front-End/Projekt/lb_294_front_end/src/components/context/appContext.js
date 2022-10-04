import { createContext, useContext } from 'react';
import { useState } from 'react';

const AppContext = createContext(null);

export const useAppContext = () => {
    const context = useContext(AppContext);

    if(context === undefined) {
        throw new Error('Appcontext must be within appContextProvider')
    }

    return context;
} 

const AppContextProvider = ({children}) => {
    const [favourites, setFavourites] = useState([]);
    const [orders, setOrders] = useState([]);

    const addToFavourites = (book) => {
        const oldFavourites = [...favourites];

        const newFavourites = oldFavourites.concat(book);

        setFavourites(newFavourites);
    }

    const removeFromFavourites = (id) => {
        const oldFavourites = [...favourites];
        const newFavourites = oldFavourites.filter((book) => book.id !== id);

        setFavourites(newFavourites);
    }

    const addToOrders = (book) => {
        const oldOrders = [...orders];

        const newOrders = oldOrders.concat(book);

        setOrders(newOrders);
    }


    const removeFromOrders = (id) => {
        const oldOrders = [...orders];
        const newOrders = oldOrders.filter((book) => book.id !== id);

        setOrders(newOrders);
    }

    return (
        <AppContext.Provider value={{ favourites, addToFavourites, removeFromFavourites, orders, addToOrders, removeFromOrders }}>
            {children}
        </AppContext.Provider>
    );
};

export default AppContextProvider;