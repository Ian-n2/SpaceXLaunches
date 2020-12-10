import React from 'react';
import ListItem from './ListItem.js'

class List extends React.Component {

  render(){
    return(
      <div>
      <ul>
      <ListItem launches={this.props.data}/>
      </ul>
      </div>
    )
  }
}

export default List;
