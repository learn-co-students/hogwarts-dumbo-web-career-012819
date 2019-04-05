import React, { Component } from 'react';
import '../App.css';
import HogContainer from './HogContainer'
import Filter from './Filter'
import Nav from './Nav'
import hogs from '../porkers_data';


class App extends Component {

  state = {
    hogs: hogs
  }

  handleChange = (e) => {
    this.setState({
      hogs: this.filterPigs(e.target.value)
    });
  }

  filterPigs = (value) => {
    let filteredHogs = [...this.state.hogs]
    let filtered = [...filteredHogs.filter(hog => hog.greased)]

    if (value === 'all') {
      return hogs;
    } else {
      return filtered.sort((firstHog, secHog) => firstHog[value] > secHog[value] ? 1 : -1)
    }
  }

  render() {
    return (
      <div className="App">
          <Nav />
          <Filter handleChange={this.handleChange}/>
          <br/><br/>
          <HogContainer hogs={this.state.hogs}/>
      </div>
    )
  }
}

export default App;
