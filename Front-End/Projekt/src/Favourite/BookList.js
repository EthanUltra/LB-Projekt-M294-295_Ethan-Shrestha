/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";

class BookList extends React.Component {
    render() {
        const product = this.props.book.map(item => (
            <div className="listbook" key={item.id}>
                <div className="imagenya">
                    <img className="imgstyle" src={item.image} alt={item.image} />
                </div>
                <div className="descnya">
                    <h3>Judul: {item.name}</h3>
                    <p>
                        <span className="desc">Description: {item.description}</span>
                        <br />
                        <span>Author: {item.author}</span>
                    </p>
                    <button onClick={() => this.props.add(item.add)}>Add to Favourites</button>
                </div>
            </div>
        ));
        return (
            <div>
                <h2>Daftar Buku</h2>
                {product}
            </div>
        )
    }
}

export default BookList;