import React from 'react';


class ListItem extends React.Component {



  render(){
    return(
      <div className="listItemWrapper">
      {this.props.launches.map(launches => (

        <i className='listItem'>
        <div className='divder'>
        <div className="number">
        <h3>#{launches.flight_number}</h3>
        </div>
        <div className="title">
        <h3>{launches.mission_name}</h3>
        </div>
        </div>
        <div className='infoWrapper'>
        <div className="date">
        <p>{launches.launch_date_local}</p>
        </div>
        <div className="rocket">
        <h5>{launches.rocket.rocket_name}</h5>
        </div>
        </div>
        </i>

      ))}
      </div>
    )
  }
}
export default ListItem;
