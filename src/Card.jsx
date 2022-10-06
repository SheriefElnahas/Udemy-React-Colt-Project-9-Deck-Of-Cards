import './Card.css';

import React, { Component } from 'react'


export default class Card extends Component {
    

  render() {
    let randomRotateDeg = `rotate(${Math.ceil(Math.random() * 30) * (Math.round(Math.random()) ? 1 : -1)}deg)`;

    return (
      <div className='Card' >

        <img style={{transform : randomRotateDeg}} src={this.props.imgUrl} alt="" />

      </div>
    )
  }
}
