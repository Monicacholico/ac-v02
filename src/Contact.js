import React, {Component} from 'react';
import "./App.css"
import API_KEY from "./credentials";

class Contact extends Component {
    state = {
      isLoading: true,
      users: [],
      error: null
    };
    fetchUsers() {
        const url = 'https://cors-anywhere.herokuapp.com/https://sahmed93846.activehosted.com/api/3/contacts';
    const options = {
        method: 'GET',
        headers: {
            "Api-Token": `${API_KEY}`,
            "Accept": "application/json"
            }
        };
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
      const { isLoading, users, error } = this.state;
      console.log(users);
      return (
        <React.Fragment>
          {error ? <p>{error.message}</p> : null}
          {!isLoading ? (
            users.map(user => {
              const { firstName, lastName } = user;
              return (
                <td className="table-cell name">
                  <p>{firstName} {lastName}</p>
                </td>
              );
            })
          ) : (
              <td><p>Loading ...</p></td>
          )}
          {
       }
        </React.Fragment>
      );
    }
  }

export default Contact;
