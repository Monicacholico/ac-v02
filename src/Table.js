import React, {Component} from 'react';
import Tr from './Tr';
import Contact from './Contact';
import Deal from './Deal';
import Tag from './Tag';
import Location from './Location';
import TotalValue from './TotalValue';
import Row from './Row';
import Td from './Td';
import './App.css';
import Fetcher from './Fetcher';
import AnotherRow from './AnotherRow';
import TdTotalValue from './TdTotalValue';
import TdDeals from './TdDeals';
import TdTag from './TdTag';
import TdContact from './Components/TdContact'
import sampleUserNames from './sample-usernames';


class Table extends Component {
    state = {
        contacts: {}
    }

    loadSampleContacts = () => {
        this.setState({contacts: sampleUserNames});
    }

    render() {
        const {contacts} = this.state;
        // const { firstName, lastName} = user;
        // console.log(users);
        return (
            <section className="section">
                <table className="legend">
                    <thead>
                        <tr className="ac_lists-subheaders">
                        <th className="table-cell text_left">Contact</th>
                        <th className="table-cell text_left">Total Value</th>
                        <th className="table-cell text_left">Deals</th>
                        <th className="table-cell text_left">Tags</th>
                        {/* <th className="table-cell text_left">Location</th> */}
                        </tr>
                    </thead>
                <tbody>
                    {contacts.map(contact => {
                        const {firstName, lastName} = contact;
                        return (
                            <tr>
                                {/* <TdContact
                                key={key}
                                index={key}
                                contact={this.state.contacts[key]}
                                /> */}
                                <td>{firstName} {lastName}</td>
                            </tr>

                        )
                    })}
                    {Object.keys(this.state.contacts).map(key => {
                        <TdContact
                        key={key}
                        index={key}
                        contact={this.state.contacts[key]}
                        />
                    })}
                    {/* <tr className="table-row">
                        <td className="table-cell name text_underline"><Contact/></td>
                        <td className=""><TotalValue/></td>
                        <td className=""><Deal/></td>
                        <td className=""><Tag/></td>
                        <td className=""><Location/></td>
                    </tr> */}
                    {/* <Tr/> */}
                    <tr>
                    {/* <Row/> */}
                    </tr>
                    {/* <Fetcher/> */}
                    {/* <AnotherRow/> */}
                    {/* <tr>
                        <Td userName={'Monica Lopez'}/>
                        <TdTotalValue/>
                        <TdDeals/>
                        <TdTag/>
                    </tr> */}
                </tbody>
                </table>
            </section>
        )
    }
}

export default Table;