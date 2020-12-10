import React from 'react';
import {filterYear} from './../helpers/helpers.js';


class Filter extends React.Component {


  render(){
      const uniqueYear = filterYear(this.props.year)
    return(
      <div>
      <select>
      <option>Filter by year</option>
      {uniqueYear.map(year => (
        <option key={year.id}value={year.launch_year}>
        {year}
        </option>
      ))}
      </select>
      </div>
    )
  }
}
export default Filter;
