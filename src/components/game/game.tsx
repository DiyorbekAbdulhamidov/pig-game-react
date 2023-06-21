import React, { Component } from 'react';
import dice1 from "../../assets/1.png";
import dice2 from "../../assets/2.png";
import dice3 from "../../assets/3.png";
import dice4 from "../../assets/4.png";
import dice5 from "../../assets/5.png";
import dice6 from "../../assets/6.png";
import "./game.scss";

class GameComponent extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      selectedDice: "",
      player1Score: 2,
      player2Score: 2,
      player1Point: 0,
      player2Point: 0,
    };
  }

  handleDice = () => {
    const dices = [dice1, dice2, dice3, dice4, dice5, dice6];
    const rand = Math.floor(Math.random() * dices.length);
    const selectedDice = dices[rand];
    this.setState({ selectedDice });
  };

  handleNewGame = () => this.setState({ player1Score: 0, player2Score: 0, selectedDice: "", player1Point: 0, player2Point: 0 });

  render() {
    const { selectedDice, player1Score, player2Score, player1Point, player2Point } = this.state;
    return (
      <div className="container">
        <div className="main">
          <img src={selectedDice} className="image dice" alt="" />
          <div className="center">
            <div className="new-game-btn btn--new" onClick={this.handleNewGame}> 🔄 NEW GAME </div>
            <div className="center-bottom">
              <div className="roll-btn btn--roll" onClick={this.handleDice}> 🎲 ROOL DICE </div>
              <div className="hold-btn btn--hold">📥 Hold</div>
            </div>
          </div>
          <div className="main-left players active">
            <div>
              <div className="player-name">Player 1</div>
              <div className="player-score">{player1Score}</div>
            </div>
            <div className="board">
              <div className="current">Current</div>
              <div className="point">{player1Point}</div>
            </div>
          </div>
          <div className="main-right players">
            <div>
              <div className="player-name">Player 2</div>
              <div className="player-score">{player2Score}</div>
            </div>
            <div className="board">
              <div className="current">Current</div>
              <div className="point">{player2Point}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GameComponent;