import React from 'react';

class ListItem{

  render(){
    return(
      <div>
      <li>
    <h3>{this.props.launches.mission_name}</h3>
      </li>
      </div>
    )
  }
}
export default ListItem;
