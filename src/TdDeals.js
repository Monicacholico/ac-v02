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

class TdDeals extends Component {
    state = {
        isLoading: false,
        deals: [],
        error: null
    }
    fetchDeals() {
        const url = 'https://cors-anywhere.herokuapp.com/https://sahmed93846.activehosted.com/api/3/deals?orders[title]=ASC&orders[value]=ASC&orders[cdate]=ASC&orders[contact_name]=ASC&orders[contact_orgname]=ASC&orders[next-action]=ASC';
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
        const {deals, isLoading, error} = this.state;
        return(
            <td>
                {deals.map(deal => {
                const {stage} = deal;
                    return <p>{stage}</p>
                })}
            </td>
        )
    };
}

export default TdDeals;