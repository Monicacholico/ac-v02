import React, {Component} from 'react';
import Deal from './Deal';
import Tag from './Tag';
import Location from './Location';
import TotalValue from './TotalValue';
import './App.css';


const Tr = (props) => {
    return (
        <tr className="table-row" data ={props.data}>
            I'm anoter row;
            <td dataField="userName"></td>
            <td dataField="totalvalue"></td>
            <td dataField="deal"></td>
            <td dataField="tag"></td>
        </tr>
    )
}


export default Tr;