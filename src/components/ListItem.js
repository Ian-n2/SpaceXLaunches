import React from 'react';

class ListItem extends React.Component {

  render(){
    return(
      <div>
      {this.props.launches.map(launches => (
        <li key={launches.id}>
        <h3>{launches.mission_name}</h3>
        <p>{launches.launch_date_local}</p>
        <p>{launches.launch_year} |take out once fliter is finished</p>
        <h5>{launches.rocket.rocket_id}</h5>
        </li>
      ))}
      </div>
    )
  }
}
export default ListItem;
