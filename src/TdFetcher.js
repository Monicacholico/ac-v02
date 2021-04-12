import React, {Component} from 'react';
import './App.css';

class TdFetcher extends Component {
    render( ) {
        const {firstName, lastName } = this.props.userName;
        return (
            <td className="table-cell">
                {firstName} {lastName}
            </td>
        )
    }
}

export default TdFetcher;