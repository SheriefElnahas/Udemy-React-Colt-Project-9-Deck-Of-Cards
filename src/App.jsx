import "./App.css";

import axios from 'axios';

import React from "react";
import Card from "./Card";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cardId: "" ,imgSrc: "" };

  }
  async componentDidMount() {
    const result = await axios("https://deckofcardsapi.com/api/deck/new/shuffle/");
    const id = result.data.deck_id;
    this.setState({cardId: id});
  
    // const result2 = await axios(`https://deckofcardsapi.com/api/deck/${id}/draw/.`);
    // this.setState({ imgSrc: result2.data.cards[0].image });

  }

  async getCard() {
    const result2 = await axios(`https://deckofcardsapi.com/api/deck/${this.state.cardId}/draw/.`);
    this.setState({ imgSrc: result2.data.cards[0].image });
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
          <button onClick={() => this.getCard()}>Deal me a card!</button>
          </div>
       

        </div>
        <Card  imgUrl={this.state.imgSrc}/>
        <Card  imgUrl={this.state.imgSrc}/>
      </div>
    );
  }
}

export default App;
