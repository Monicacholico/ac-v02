import React, {Component} from 'react';
import Tr from './Tr';
import Contact from './Contact';
import Deal from './Deal';
import Tag from './Tag';
import Location from './Location';
import TotalValue from './TotalValue';
import Row from './Row';
import './App.css';


class Table extends Component {
    render() {
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
                    {/* <tr className="table-row">
                        <td className="table-cell name text_underline"><Contact/></td>
                        <td className=""><TotalValue/></td>
                        <td className=""><Deal/></td>
                        <td className=""><Tag/></td>
                        <td className=""><Location/></td>
                    </tr> */}
                    {/* <Tr/> */}
                    <Row/>
                </tbody>
                </table>
            </section>
        )
    }
}

export default Table;