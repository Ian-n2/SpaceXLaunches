import React from 'react';
import List from './components/List.js';
import Filter from './components/Filter.js';
import SortButton from './components/SortButton.js';
import ReloadButton from './components/ReloadButton.js';
import './stylesheet.scss';
import {filterYear} from './helpers/helpers.js';


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
    console.log(this.state.data)
    return(
      <div>
      <h1>welcome</h1>
      <ReloadButton reload={this.loadData}/>
      <Filter years={filterYear(this.state.data)} handleChangeYear={this.handleYearChange} />
      <SortButton ascending={this.state.ascending} handleChangeOrder={this.handleChangeOrder}/>
      <List data={this.getData()} selectedYear={this.state.year}/>
      </div>
    );
  }
}

export default App;
