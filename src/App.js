import React from 'react';
import List from './components/List.js';
import Filter from './components/Filter.js';
import SortButton from './components/SortButton.js';
import Navbar from './components/Navbar.js';
import launch from './assets/img/launch-home@3x.png';
import {filterYear} from './helpers/helpers.js';
import './stylesheet.scss';


class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      data: [],
      year: null,
      ascending: true
    }
    this.handleYearChange = this.handleYearChange.bind(this)
    this.handleChangeOrder = this.handleChangeOrder.bind(this)
    this.loadData = this.loadData.bind(this)
  }

  componentDidMount(){
    this.loadData()
  }

  loadData(){
    fetch('https://api.spacexdata.com/v3/launches')
    .then(res => res.json())
    .then(data => this.setState({data: data}))
  }

  handleYearChange(event){
    this.setState({year:event.target.value})
  }
  handleChangeOrder(){
    this.setState({ascending:!this.state.ascending})
  }
  getData(){
    if(this.state.ascending){
      return this.state.data
    }
    return [...this.state.data].reverse()

  }

  render(){
    return(
      <div className="app">
      <Navbar reload={this.loadData}/>
      <div className="buttonWrapper"> 
      <Filter years={filterYear(this.state.data)} handleChangeYear={this.handleYearChange}/>
      <SortButton ascending={this.state.ascending} handleChangeOrder={this.handleChangeOrder}/>
      </div>
      <div className="mainWrapper">
      <div className="BackgroundWrapper">
      <img className="launchImg" src={launch}/>
      </div>
      <div className="listWrapper">
      <List data={this.getData()} selectedYear={this.state.year}/>
      </div> 
      </div>
      </div>
    );
  }
}

export default App;
