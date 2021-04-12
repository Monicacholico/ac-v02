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

class TdTotalValue extends Component {
    state = {
        isLoading: false,
        deals: [],
        error: null
    }
    fetchTotalValue() {
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
        this.fetchTotalValue();
    }
    render() {
        let numberWithCommas = function numberWithCommas(x) {
            var parts = x.toString().split(".");
            parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            return parts.join(".");
        };
        const {deals, isLoading, erro} = this.state;
        return(
            <td>
                {deals.map(deal => {
                const {accountActivity, value, currency} = deal;
                    return <p>{accountActivity} ${numberWithCommas(value)} {currency}</p>
                })}
            </td>
        )
    };

}

export default TdTotalValue;