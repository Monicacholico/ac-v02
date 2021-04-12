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

class TdTag extends Component {
    state = {
        isLoading: false,
        tags: [],
        error: null
    }
    fetchTags() {
        const url = 'https://cors-anywhere.herokuapp.com/https://sahmed93846.activehosted.com/api/3/tags';
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
        this.fetchTags();
    }
    render() {
        const {tags, isLoading, error} = this.state;
        return(
            <td>
                {tags.map(t => {
                const {tag} = t;
                    return <p>{tag}</p>
                })}
            </td>
        )
    };
}

export default TdTag;