import React from 'react';
import List from './components/List.js'


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
      <List launches={this.state.data}/>
      <ul>
      {this.state.data.map(data => (
        <li key={data.id}>
        {data.mission_name}
        </li>
      ))}
      </ul>
      </div>
    );
  }
}

export default App;
