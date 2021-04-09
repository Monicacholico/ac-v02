import React, {Component} from 'react';
import "./App.css"
import API_KEY from "./credentials";

class Location extends Component {
    state = {
      isLoading: true,
      locations: [],
      error: null
    };
    fetchLocations() {
        const url = 'https://cors-anywhere.herokuapp.com/https://sahmed93846.activehosted.com/api/3/addresses';
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
            locations: data.addresses,
            isLoading: false,
          })
        )
        .catch(error => this.setState({ error, isLoading: false }));
    }

    componentDidMount() {
      this.fetchLocations();
    }
    render() {
      const { isLoading, locations, error } = this.state;
      return (
        <React.Fragment>
          {error ? <p>{error.message}</p> : null}
          {!isLoading ? (
            locations.map(location => {
              const { city, state } = location;
              return (
                <td className="table-cell">
                  <p>{city}, {state}</p>
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

export default Location;
