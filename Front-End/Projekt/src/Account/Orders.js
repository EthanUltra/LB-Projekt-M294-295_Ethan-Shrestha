/* eslint-disable no-useless-constructor */
import React from "react";
import { Link } from 'react-router-dom';
import './Orders.css'

const books = [
    { name: "Harry Potter", cost: "20.00Fr", description: "...", rating: "5/5" },
    { name: "The Adventures of Tintin", cost: "15.00Fr", description: "...", rating: "4/5" },
    { name: "All Quiet on the Western Front", cost: "17.50Fr", description:"...", rating: "4.75/5" },
]

class Orders extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h4>Here are your orders!</h4>
                <table>
                    <div>
                        <tr>
                            <th>Name</th>
                            <th>Cost</th>
                            <th>Description</th>
                            <th>Rating</th>
                        </tr>
                        {books.map((val, key) => {
                            return (
                                <tr books={books}>
                                    <td>{val.name}</td>
                                    <td>{val.cost}</td>
                                    <td>{val.description}</td>
                                    <td>{val.rating}</td>
                                </tr>
                            )
                        })}
                    </div>
                </table>
                <p><Link to="../Account">Return to Account</Link></p>
            </div>
        )
    }
}

export default Orders;