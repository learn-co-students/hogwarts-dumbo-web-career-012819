import React from 'react';
import HogCard from './HogCard';

export default class HogContainer extends React.Component {

  createHogCard = () => {
    return this.props.hogs.map(hog => {
      return <HogCard hog={hog} key={hog.name} handleClick={this.handleClick}/>
    });
  }

  render() {
    return (
      <div className="ui grid container">
        {this.createHogCard()}
      </div>
    )
  }
}
