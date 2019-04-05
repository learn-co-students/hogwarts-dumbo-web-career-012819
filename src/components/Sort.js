import React from 'react'



class Sort extends React.Component {
  render() {
    return(
      <div className="ui form">
        <h3>Sort Hog</h3>
        <div className="field">
          <select name="type" id="type" onChange={this.props.onChangeType}>
            <option value="name">Name</option>
            <option value="weight">Weight</option>
            <option value="greased">Greased Hogs</option>
          </select>
        </div>

        <div className="field">
          <button className="ui secondary button" onClick={this.props.sortHog}>Sort</button>
        </div>
      </div>
    )
  }
}

export default Sort
