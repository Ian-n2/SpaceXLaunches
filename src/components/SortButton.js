import React from 'react';

class SortButton extends React.Component{


  nameChange(){
    let name = "Sort Descending"
    if(this.props.ascending === false){
      name = "Sort Ascending"
    }
    return name
  }

  render(){


    return(
      <button className="sort" onClick={this.props.handleChangeOrder}>{this.nameChange()}</button>
    )
  }

}
export default SortButton;
