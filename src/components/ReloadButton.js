import React from 'react';

class ReloadButton extends React.Component{



  render(){
    return(
      <button onClick={this.props.reload}>Reload Data</button>
    )
  }


}
export default ReloadButton;
