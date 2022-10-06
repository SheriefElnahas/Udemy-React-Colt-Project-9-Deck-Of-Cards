import './Card.css';

import React, { Component } from 'react'


export default class Card extends Component {
  render() {
    const {imgUrl, altText, rotateDeg } = this.props;
    return (
      <div className='Card' >
        <img style={{transform : `rotate(${rotateDeg}deg)`}} src={imgUrl} alt={altText} />
      </div>
    )
  }
}
