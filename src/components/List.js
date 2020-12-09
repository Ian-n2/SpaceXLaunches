import React from 'react';
import ListItem from './ListItem.js'

class List extends React.Component {

  render(){
    return(
      <div>
      <ListItem launches={this.props.launches}/>
      </div>
    )
  }
}

export default List;
