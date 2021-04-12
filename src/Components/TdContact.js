import React, {Component} from 'react';

class TdContact extends Component {
    render() {
        const {firstName, lastName} = this.props.contact;
        return (
            <td>{firstName}{lastName}</td>
        )
    }
}

export default TdContact;