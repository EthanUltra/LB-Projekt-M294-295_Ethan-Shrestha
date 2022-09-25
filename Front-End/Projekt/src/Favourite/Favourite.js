/* eslint-disable no-useless-constructor */
import React from 'react';

import "./Favourite.css"
import BookList from "./BookList";
import BookFavourite from "./BookFavourite";
import ButtonComponent from "./ButtonComponent";
import FormInput from "./FormInput"

class Favourite extends React.Component {
    state = {
        books: [
            {
                id: 1,
                name: "Clockwork-2008",
                image: require('./Bookcover/Clockwork-2008.png'),
                description: "This is a book about...",
                author: "Anthony Burgess"
            },
            {
                id: 2,
                name: "The Gravity",
                image: require('./Bookcover/TheGravity.png'),
                description: "This is a book about aliens...",
                author: "Nille Lewis"
            }
        ],
        booksfav: [],
        itsloading: false
    };
    
    addToFavourite = id => {
        const data = this.state.books.find(item => item.id === id);
        this.setState({
            booksfav: [...this.state.booksfav, data]
        });
    };

    deleteToFavourite = id => {
        const hapus = this.state.booksfav.filter(item => item.id !== id);
        this.setState({ booksfav: hapus});
    };

    addNewBook = data => {
        this.setState({
            books: [data, ...this.state.books]
        });
    };

    render() {
        return (
            <div className="container">
                <h1 className="center">Here are your favourite books!</h1>
                <FormInput />
                <div className="wrap">
                    <div className="container-left">
                        <BookList books={this.state.books} add={this.addToFavourite} />
                        <hr/>
                    </div>
                    <div className="container-right">
                        <BookFavourite
                            booksfav={this.state.booksfav}
                            delete={this.deleteToFavourite}
                        />
                    </div>
                    <div>
                        <ButtonComponent load={this.state.isloading} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Favourite;