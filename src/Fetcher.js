import React, {Component, useState, useEffect} from 'react';
import API_KEY from './credentials';
import Deal from './Deal';
import axios from 'axios';



const Fetcher =  () => {
    const [userName, setUserName] = useState([]);
    const [totalValue, setTotalValue] = useState([]);
    const [deal, setDeal] = useState([]);
    const [tag, setTag ] = useState([]);

    const fetchData = () => {
        const usersApi = 'https://cors-anywhere.herokuapp.com/https://sahmed93846.activehosted.com/api/3/contacts';
        const dealsApi = 'https://cors-anywhere.herokuapp.com/https://sahmed93846.activehosted.com/api/3/deals?orders[title]=ASC&orders[value]=ASC&orders[cdate]=ASC&orders[contact_name]=ASC&orders[contact_orgname]=ASC&orders[next-action]=ASC';
        const tagsApi = 'https://cors-anywhere.herokuapp.com/https://sahmed93846.activehosted.com/api/3/tags';
        const options = {
            "Api-Token": `${API_KEY}`,
        }
        const getUserName = axios.get(usersApi, options);
        const getDeals = axios.get(dealsApi, options);
        const getTags = axios.get(tagsApi, options);
        axios.all([getUserName, getDeals, getTags]).then(
            axios.spread((...allData) => {
                const allDataUsers = allData[0];
                const allDataDeals = allData[1];
                const allDataTags = allData[2];

                console.log(allDataUsers)
                console.log(allDataDeals)
                console.log(allDataTags)
            })

        )
    }

    useEffect(() => {
        fetchData()
    },[]);

    // async fetchPost = (path) => {
    //     const url =`https://cors-anywhere.herokuapp.com/https://sahmed93846.activehosted.com/api/3/${path}`;
    //     const options = {
    //         method: 'GEt',
    //         headers: {
    //             "Api-Token": `${API_KEY}`,
    //             "Accept": "application/json",
    //             }
    //         };
    //     try {
    //         this.setState({...this.state, isFetching: true});
    //         const response = await axios.get(
    //             url, options
    //         );
    //         console.log(response);
    //         this.setState({dataDroplets: response.data, isFetching:false})
    //         console.log(this.state);
    //     } catch(error) {
    //         console.log(error.message);
    //         this.setState({...this.state, isFetching: false})
    //     }
    // }

    return (
        <tr className="table-row">
            I'm a Row
            <td className="">I'm a cell</td>
            <td className="">I'm a cell</td>
            <td className="">I'm a cell</td>
        </tr>
    )


}
export default Fetcher;