import "./App.css";

import axios from 'axios';

import React from "react";
import Card from "./Card";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cardId: "" , imgsArr: [], cardsRemaining: 52 };
    
  }
  async componentDidMount() {
    const result = await axios("https://deckofcardsapi.com/api/deck/new/shuffle/");
    const id = result.data.deck_id;
    this.setState({cardId: id});
  }


  randomRotateDeg() {
    return Math.ceil(Math.random() * 45) * (Math.round(Math.random()) ? 1 : -1);
  }

  async getCard() {
    if(this.state.cardsRemaining !== 0) {
      const result = await axios(`https://deckofcardsapi.com/api/deck/${this.state.cardId}/draw/.`);
      const cardData = result.data.cards[0];

      const cardObject = {
        imgSrc: cardData.image,
        altText: `${cardData.value} - ${cardData.suit}`,
        rotateDeg: this.randomRotateDeg(),
      }
  
  
      this.setState({imgsArr: [...this.state.imgsArr, cardObject ], cardsRemaining: result.data.remaining})
    } else {
      alert("Error : no cards remaining")
    } 
  }

  render() {
    return (
      <div className="App">
        <div className="App-card-container">
          <div className="card container">
          <h1> <span className="card">♦️</span> Card Dealer  <span className="card">♦️</span>
          </h1>
          <h3>  <span className="card">♦️</span> A Little demo made with react <span className="card">♦️</span>
          </h3>

          <button disabled={this.state.cardsRemaining === 0 ? true : false}  onClick={() => this.getCard()}>Deal me a card!</button>
          </div>
       

        </div>
  
        {this.state.imgsArr.map((img, index) => {
          return <Card imgUrl={img.imgSrc} key={index} altText={img.altText} rotateDeg={img.rotateDeg}/>
        })}

      </div>
    );
  }
}

export default App;
