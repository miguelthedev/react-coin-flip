import React, { Component } from 'react';
import Coin from "./Coin";
import './CoinFlipper.css';

class CoinFlipper extends Component {
  constructor(props) {
    super(props);

    this.state = {
      side: "heads",
      heads: 0,
      tails: 0,
      flips: 0
    };

    this.clickHandler = this.clickHandler.bind(this);
  }

  flipCoin(prevState) {
    let randomNum = Math.floor(Math.random() * 2);
    let newState;

    if (randomNum === 1) {
      newState = {
        side: "heads",
        heads: prevState.heads + 1,
        flips: prevState.flips + 1
      };
    } else {
      newState = {
        side: "tails",
        tails: prevState.tails + 1,
        flips: prevState.flips + 1
      };
    }

    return newState;
  }

  clickHandler(e) {
    this.setState(this.flipCoin);
  }

  render() {
    return (
      <div className="CoinFlipper card">
        <h1 className="blue-text text-darken-4">Flip a Coin!</h1>
        <Coin side={this.state.side}/>
        <button onClick={this.clickHandler} className="waves-effect waves-light btn blue darken-4">Flip!</button>
        <p>Out of {this.state.flips} flips, there have been {this.state.heads} heads and {this.state.tails} tails.</p>
      </div>
    );
  }
}

export default CoinFlipper;
