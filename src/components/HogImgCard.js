import React from 'react'
import Cherub from '../hog-imgs/cherub.jpg'

class HogImgCard extends React.Component{

  state = {
    clicked: true
  }

  clickHandler = () => {
    this.setState({
      clicked: !this.state.clicked
    })
  }

  render(){
    const isClicked = this.state.clicked
    return(
      <div>
      { isClicked ? (
      <div className="ui centered card">
        <div className="image">
          <img onClick={this.clickHandler} src={this.props.img}/>
        </div>
        <div className="content">
          <a className="header">{this.props.hog.name}</a>
        </div>
      </div>
    ) : (
      <div onClick={this.clickHandler}className="ui centered card">
          <div className="content">
            <div className="header">{this.props.hog.name}</div>
            <div className="meta">Specialty: {this.props.hog.specialty}</div>
            <div className="description">
              <p>{this.props.hog.greased ? "true" : 'false'} </p>
              <p>Weight: {this.props.hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}</p>
              <p>Highest Medal Achieved: {this.props.hog['highest medal achieved']}</p>
            </div>
          </div>
      </div>
    )}
    </div>
    )
  }
}

export default HogImgCard
