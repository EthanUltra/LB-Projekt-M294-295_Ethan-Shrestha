import React, { Component } from 'react'
import AccountServices from './AccountServices';

class ListAccountComponent extends Component {
    constructor() {
        super();
        this.state = {
            account: []
        }
    }

    componentDidMount() {
        AccountServices.getAccounts().then((res) => {
            this.setState({ account: res.data });
        }
        );
    }

    render() {
        return (
            <div>
                <h2 className="text-center"> Account List </h2>
                <div className="row">
                    <table className="table table-stripend table-bordered">
                        <tbody>
                            <tr>
                                <th>Account Username</th>
                                <th>Account Email</th>
                                <th>Account Password</th>
                            </tr>
                        </tbody>
                        <tbody>
                            {
                                this.state.account.map(
                                    account =>
                                        <tr key={account.account_id}>
                                            <td> {account.username} </td>
                                            <td> {account.email} </td>
                                            <td> {account.password} </td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default ListAccountComponent;