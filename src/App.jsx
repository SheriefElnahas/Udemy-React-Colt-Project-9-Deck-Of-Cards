import './App.css';

import React from "react";
import Card from './Card';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div>
        <h1><span className="card">♦️</span> Card Dealer <span className="card">♦️</span></h1>
        <h3><span className="card">♦️</span> A Little demo made with react <span className="card">♦️</span></h3>

        < Card />
        </div>

      </div>
    );
  }
}

export default App;
