import React, {Component} from 'react';
import API_KEY from './credentials';
import axios from 'axios';
import './App.css';


class AnotherRow extends Component {
    state = {
        isLoading: true,
        allData: [],
        users: [],
        totalValue: [],
        deals: [],
        tags: [],
        error: null
      };

  async fetchPost (path) {
        const url =`https://cors-anywhere.herokuapp.com/https://sahmed93846.activehosted.com/api/3/${path}`;
        const options = {
            method: 'GEt',
            headers: {
                "Api-Token": `${API_KEY}`,
                "Accept": "application/json",
                }
            };
        try {
            this.setState({...this.state, isLoading: true});
            const response = await axios.get(
                url, options
            );
            console.log(response);
            this.setState({allData: response.data, isLoading:false})
            console.log(this.state);
        } catch(error) {
            console.log(error.message);
            this.setState({...this.state, isLoading: false})
        }
    };

    componentDidMount() {
        this.fetchPost('contacts');
        this.fetchPost('deals?orders[title]=ASC&orders[value]=ASC&orders[cdate]=ASC&orders[contact_name]=ASC&orders[contact_orgname]=ASC&orders[next-action]=ASC');
        this.fetchPost('tags');
    }


    render() {
        const {allData, isLoading, error } = this.state;
        console.log(this.state.allData.contacts);

        // console.log(allData.Object.keys(this.state.data.tags));
        return (
            <React.Fragment>
            {error ? <p>{error.message}</p> : null}
            {!isLoading ? (
                <tr>
                    Here goes the Table with Data!
                    {Object.keys(this.state.allData).map(key => <td key={key}>{key}</td>)}
                    {/* {allData.map(data => {
                        console.log(data);
                        // const { firstname, lastname} = data.contacts;
                        // console.log(data.contacts);
                        return (
                            <td>I'm a cell</td>
                        )
                    })} */}
                </tr>
            ) : (
                <td><p>Loading ...</p></td>
            )}
        </React.Fragment>
        )
    }


}


export default AnotherRow;