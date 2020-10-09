import React, { Component } from 'react'
 
import { getUsers } from '../services/api'
 
class Users extends Component {

    getUsers = async () => {
        this.props.showLoading('Loading Users!');

        const response = await getUsers()
            .then(response => {
                this.props.hideLoading();

                return response;
            });
        console.log({ response });
    }
 
    render() {
        return (
            <button onClick={this.getUsers}>Buscar usuários</button>
        )
    }
}
 
export default Users;