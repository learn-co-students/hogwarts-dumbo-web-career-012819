import React from 'react';

export default class Filter extends React.Component {
  render() {
    return (
      <div>
        <select onChange={this.props.handleChange} name="type" id="type">
          <option value="all">All</option>
          <option value="name">Name</option>
          <option value="weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water">Weight</option>
        </select>
      </div>
    )
  }
}
