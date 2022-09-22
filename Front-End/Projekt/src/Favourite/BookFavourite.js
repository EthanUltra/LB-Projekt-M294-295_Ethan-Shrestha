import React from "react";

class BookFavourite extends React.Component {
    render() {
        const fav = this.props.booksfav.map(item => (
            <div className="listbook" key={item.id}>
                <div className="imagenya">
                    <img className="imgstyle" src={item.image} alt={"item.name"} />
                </div>
                <div className="descnya">
                    <h3>Judul: {item.name}</h3>
                    <p>
                        <br />
                        <span>Author: {item.author}</span>
                        <button onClick={() => this.props.delete(item.id)}>Delete from Favourites</button>
                    </p>
                </div>
            </div>
            ));
            return (
                <div>
                    <h2>Daftar Buku</h2>
                    {fav}
                </div>
            );
        }
    }

export default BookFavourite;