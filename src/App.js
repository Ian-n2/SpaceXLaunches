import React from 'react';
import List from './components/List.js';
import Filter from './components/Filter.js';
import './stylesheet.scss';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      data: []
    }
  }

  componentDidMount(){
    fetch('https://api.spacexdata.com/v3/launches')
    .then(res => res.json())
    .then(data => this.setState({data: data}))
  }

  render(){
    console.log(this.state.data)
    return(
      <div>
      <h1>welcome</h1>
      <Filter year={this.state.data} />
      <List data={this.state.data}/>
      </div>
    );
  }
}

export default App;
