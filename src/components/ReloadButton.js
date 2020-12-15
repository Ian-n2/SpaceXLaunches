import React from 'react';

class ReloadButton extends React.Component{



  render(){
    return(
      <button className="reloadButton" onClick={this.props.reload}>Reload Data</button>
    )
  }


}
export default ReloadButton;
