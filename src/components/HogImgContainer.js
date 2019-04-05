import React from 'react'
import HogImgCard from './HogImgCard'

class HogImgContainer extends React.Component {

  generateHogCards = () => {
    return this.props.hogs.map((hog) => {
      return <HogImgCard hog={hog} img={this.generateImg(hog.name)}/>
    })
  }

  generateImg = (name) => {
    const imgPath = name.toLowerCase().split(' ').join('_')
    return require(`../hog-imgs/${imgPath}.jpg`)
  }


  render() {
    return(
      <div className='ui grid container'>
        {this.generateHogCards()}
      </div>
    )
  }
}

export default HogImgContainer
