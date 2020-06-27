import React, { Component } from 'react';
import './Coin.css';
import heads from './img/heads.png';
import tails from './img/tails.jpeg';

class Coin extends Component {
  render() {
    return (
      <div className="Coin">
        <img src={this.props.side === "heads" ? heads : tails} alt="dollar coin"/>
      </div>
    );
  }
}

export default Coin;
