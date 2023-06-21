import React, { Component } from 'react';
import dice1 from "../../assets/1.png";
import dice2 from "../../assets/2.png";
import dice3 from "../../assets/3.png";
import dice4 from "../../assets/4.png";
import dice5 from "../../assets/5.png";
import dice6 from "../../assets/6.png";
import "./game.scss";

class GameComponent extends Component {
  constructor(props: any) {
    super(props);
    this.state = {
      selectedDice: "",
    };
  }

  handleDice() {
    const dices = [dice1, dice2, dice3, dice4, dice5, dice6];
    const rand = Math.floor(Math.random() * dices.length);
    const selectedDice = dices[rand];
    this.setState({ selectedDice });
  }

  render() {
    const { selectedDice } = this.state as any;
    return (
      <div className="container">
        <div className="main">
          <img src={selectedDice} className="image dice" alt="" />
          <div className="center">
            <div className="new-game-btn btn--new">🔄 New Game</div>
            <div className="center-bottom">
              <div className="roll-btn btn--roll" onClick={() => this.handleDice()}>🎲 Roll Dice</div>
              <div className="hold-btn btn--hold">📥 Hold</div>
            </div>
          </div>
          <div className="main-left players active">
            <div>
              <div className="player-name">Player 1</div>
              <div className="player-score">0</div>
            </div>
            <div className="board">
              <div className="current">Current</div>
              <div className="point">0</div>
            </div>
          </div>
          <div className="main-right players">
            <div>
              <div className="player-name">Player 2</div>
              <div className="player-score">0</div>
            </div>
            <div className="board">
              <div className="current">Current</div>
              <div className="point">0</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GameComponent;
