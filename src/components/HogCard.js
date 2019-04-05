import React from 'react';

class HogCard extends React.Component {

  state = {
    clicked: false
  }

  getHogImages = (name) => {
    let imgName = name.toLowerCase().split(" ").join("_");
    return require(`../hog-imgs/${imgName}.jpg`);
  }

  handleClick = () => {
    this.setState({clicked: !this.state.clicked})
  }

  render() {
    return (
      <div className="ui card eight wide column">
        <img src={this.getHogImages(this.props.hog.name)} alt={this.props.hog.name} onClick={this.handleClick}/>
        <div className="content">
          <h2>{this.props.hog.name}</h2>
          {this.state.clicked ? <p className="meta">{this.props.hog['highest medal achieved']} {this.props.hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}</p>
            : null
          }
        </div>
      </div>
    )
  }
}

export default HogCard
