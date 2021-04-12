import React, {Component} from 'react';
import './App.css';
import API_KEY from './credentials';


const options = {
    method: 'GET',
    headers: {
        "Api-Token": `${API_KEY}`,
        "Accept": "application/json"
        }
    }

class Td extends Component {
    state = {
        isLoading: false,
        users: [],
        error: null
    }
    fetchUsers() {
        const url = 'https://cors-anywhere.herokuapp.com/https://sahmed93846.activehosted.com/api/3/contacts';
        return fetch(url, options)
            .then(response => response.json())
            .then(data => this.setState({
                users: data.contacts,
                isLoading: false,
            })
            )
            .catch(error => this.setState({ error, isLoading: false }));
    }
    componentDidMount() {
        this.fetchUsers();
    }
    render() {
        const {users, isLoading, erro} = this.state;
        return(
            <td>
                {users.map(user => {
                const {firstName, lastName} = user;
                    return <p>{firstName} {lastName}</p>
                })}
            </td>
        )
    };

}

export default Td;