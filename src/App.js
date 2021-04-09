import React, {Component} from 'react';
import Table from './Table';
import './App.css';
// import 'camp-css';

class App extends Component {
  render() {
     return(
       <section>
         <h1 className="mint App">Active Campaign Coding Challenge</h1>
         <Table/>
       </section>

     )
  }
}

export default App;
