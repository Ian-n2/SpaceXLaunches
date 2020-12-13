import React from 'react';


class Filter extends React.Component {
  constructor(props){
    super(props)
  }


  //pass year down as props to list as selectedYear
  render(){
    return(
      <div>
      <select onChange={this.props.handleChangeYear} className="filterYear">
      <option value='' >Filter by year</option>
      {this.props.years.map(year => (
        <option key={year.id} value={year.launch_year}>
        {year}
        </option>
      ))}
      </select>
      </div>
    )
  }
}
export default Filter;
