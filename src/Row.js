import React, {Component} from 'react';
import API_KEY from './credentials';

const options = {
    method: 'GET',
    headers: {
        "Api-Token": `${API_KEY}`,
        "Accept": "application/json"
        }
}
class Row extends Component {
    state = {
        isLoading: true,
        users: [],
        totalValue: [],
        deals: [],
        tags: [],
        locations: [],
        error: null
      };

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

    fetchTotalValue() {
        const url = 'https://cors-anywhere.herokuapp.com/https://sahmed93846.activehosted.com/api/3/deals?orders[title]=ASC&orders[value]=ASC&orders[cdate]=ASC&orders[contact_name]=ASC&orders[contact_orgname]=ASC&orders[next-action]=ASC';
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
            deals: data.deals,
            isLoading: false,
          })
        )
        .catch(error => this.setState({ error, isLoading: false }));
    }

    fetchDeals() {
        const url = 'https://cors-anywhere.herokuapp.com/https://sahmed93846.activehosted.com/api/3/deals?orders[title]=ASC&orders[value]=ASC&orders[cdate]=ASC&orders[contact_name]=ASC&orders[contact_orgname]=ASC&orders[next-action]=ASC';
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
            deals: data.deals,
            isLoading: false,
          })
        )
        .catch(error => this.setState({ error, isLoading: false }));
    }

    fetchTags() {
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
        this.fetchUsers();
        this.fetchTotalValue();
        this.fetchDeals();
        this.fetchTags();
        this.fetchLocations();
    }

    render() {
        const { isLoading, users, deals, tags, locations, error } = this.state;
        let numberWithCommas = function numberWithCommas(x) {
            var parts = x.toString().split(".");
            parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            return parts.join(".");
        };
        const totalValueCell = deals.map( deal => {
            const { activityCount, value, currency} = deal;
            return (
              <td className="table-cell">
                <p>{activityCount} ${numberWithCommas(value)} {currency}</p>
              </td>
            )
        });
        return (
            <React.Fragment>
            {error ? <p>{error.message}</p> : null}
            {!isLoading ? (
                users.map(user => {
                const { firstName, lastName } = user;
                return (
                    <tr className="table-row">
                        <td className="table-cell name">
                        <p>{firstName} {lastName}</p>
                        </td>
                        {/* <td> */}
                        {/* {totalValueCell} */}
                        {/* </td> */}
                    </tr>
                );
                })
            ) : (
                <td><p>Loading ...</p></td>
            )}
        </React.Fragment>
        )
    }
}

export default Row;
