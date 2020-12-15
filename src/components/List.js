import React from 'react';
import ListItem from './ListItem.js'

class List extends React.Component {

  render(){
    const launchesToShow = this.props.data.filter(launch => this.props.selectedYear === launch.launch_year)

    let item
    if (!this.props.selectedYear){
      item = this.props.data
    }else{
      item = launchesToShow
    }
  console.log(this.props.selectedYear)
    return(
      <ul>
      <ListItem launches={item}/>
      </ul>
    )
  }
}

export default List;
