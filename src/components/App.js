import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogImgContainer from './HogImgContainer'
import Sort from './Sort'

class App extends Component {

state = {
  hogs: hogs,
  type: "name"
}



  onChangeType = (event) => {
    console.log(event.target.value);
    this.setState({
      type: event.target.value
    })
  }

  sortHog = () => {
    let copy = [...this.state.hogs]
    // debugger
    switch(this.state.type){
      case "name":
        this.setState({
          hogs: copy.sort(function(a, b) {
              const textA = a.name.toUpperCase();
              const textB = b.name.toUpperCase();
              return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
          })
        })
       break;
      case "weight":
        this.setState({
          hogs: copy.sort(function(a, b) {
              const textA = a['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'];
              const textB = b['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'];
              return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
          })
        })
       break;
      case "greased":

        console.log(copy)
        this.setState({
          hogs: copy.filter((hog) => {
            return hog.greased
          })
        })
        break;
    }
  }

  render() {
    return (
      <div className="App">
          < Nav />
          < Sort onChangeType={this.onChangeType} sortHog={this.sortHog}/>
          < HogImgContainer hogs={this.state.hogs} />

      </div>
    )
  }
}

export default App;
