import './Card.css';

import React, { Component } from 'react'
import axios from 'axios';

export default class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {cardId : '', imgSrc : ''};
    }
    async componentDidMount() {
        const result = await axios('https://deckofcardsapi.com/api/deck/new/shuffle/');
        const id = result.data.deck_id;
        this.setState({cardId: id});
        

    }

    async getCard() {
        const result = await axios(`https://deckofcardsapi.com/api/deck/${this.state.cardId}/draw/.`);
        this.setState({imgSrc: result.data.cards[0].image})
    }

  render() {
    
    return (
      <div className='Card'>
        <button onClick={() => this.getCard()}>Deal me a card!</button>
        <img src={this.state.imgSrc} alt="" />

      </div>
    )
  }
}
