import React, {Component} from 'react';
import "./App.css"
import API_KEY from "./credentials";

class TotalValue extends Component {
    state = {
      isLoading: true,
      deals: [],
      error: null
    };
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

    componentDidMount() {
      this.fetchDeals();
    }
    render() {
        let numberWithCommas = function numberWithCommas(x) {
            var parts = x.toString().split(".");
            parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            return parts.join(".");
        };
      const { isLoading, deals, error } = this.state;
      return (
        <React.Fragment>
          {error ? <p>{error.message}</p> : null}
          {!isLoading ? (
            deals.map(deal => {
              const { activityCount, value, currency} = deal;
              return (
                <td className="table-cell">
                  <p>{activityCount} ${numberWithCommas(value)} {currency}</p>
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

export default TotalValue;
