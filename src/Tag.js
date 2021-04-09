import React, {Component} from 'react';
import "./App.css"
import API_KEY from "./credentials";

class Tag extends Component {
    state = {
      isLoading: true,
      tags: [],
      error: null
    };
    fetchDeals() {
        const url = 'https://cors-anywhere.herokuapp.com/https://sahmed93846.activehosted.com/api/3/tags';
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
            tags: data.tags,
            isLoading: false,
          })
        )
        .catch(error => this.setState({ error, isLoading: false }));
    }

    componentDidMount() {
      this.fetchDeals();
    }
    render() {
      const { isLoading, tags, error } = this.state;
      return (
        <React.Fragment>
          {error ? <p>{error.message}</p> : null}
          {!isLoading ? (
            tags.map(t => {
              const { tag } = t;
              return (
                <td className="table-cell">
                  <p>{tag}</p>
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

export default Tag;
