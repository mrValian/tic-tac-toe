import React from 'react';
import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      counter: 0,
      gameCounter: 1,
      xwin: 0,
      ywin: 0,
      disable: false,
    };

    this.winnerLine = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],

      [0, 1, 6],
      [1, 4, 7],
      [2, 5, 6],

      [0, 4, 8],
      [2, 4, 6],
    ];
  }

  game = () => {
    this.setState({
      counter: 0,
      squares: Array(9).fill(null),
      gameCounter: 1,
      disable: false,
    });
  }

  isWinner = () => {
    let s = (this.state.counter % 2 === 0) ? "X" : "O";
    console.log(s);
    for (let i = 0; i < this.winnerLine.length; i++) {
      let line = this.winnerLine[i];
      if (this.state.squares[line[0]] === s && this.state.squares[line[1]] === s && this.state.squares[line[2]] === s) {
        alert(s + " win");
        if (s === "X") {
          this.setState({
            xwin: this.state.xwin + 1,
          });
        } else {
          this.setState({
            ywin: this.state.ywin + 1,
          });
        }
        this.game();
      }
    }
    if (this.state.gameCounter === this.state.squares.length) {
      alert("you don't have any free square");
      this.game();
    } 
  }

  handleClickSquare = (event) => {
    let line = event.target.getAttribute("data");
    let currentSquare = this.state.squares;
    if (currentSquare[line] === null) {
      currentSquare[line] = (this.state.counter % 2 === 0) ? "X" : "O";
      this.setState({
        counter: this.state.counter + 1,
        squares: currentSquare,
        gameCounter: this.state.gameCounter + 1,
        disable: true,
      });
    } else {
      alert("wrong move");
    }
    this.isWinner();
  }

  startOver = () => {
    this.setState({
      counter: 0,
      squares: Array(9).fill(null),
      gameCounter: 1,
      xwin: 0,
      ywin: 0,
      disable: false,
    });
  }

  chooseHand = (event) => {
    if (event.target.value === "0") {
      this.setState({
        counter: 0,
      });
    } else if (event.target.value === "1") {
      this.setState({
        counter: 1,
      });
    }
  }

  render() {
    return(
      <div>
        <div className="tic-tak-toe">
          <div onClick={ this.handleClickSquare } className="square" data="0">
            {this.state.squares[0]}
          </div>
          <div onClick={ this.handleClickSquare } className="square" data="1">
            {this.state.squares[1]}
          </div>
          <div onClick={ this.handleClickSquare } className="square" data="2">
            {this.state.squares[2]}
          </div>
          <div onClick={ this.handleClickSquare } className="square" data="3">
            {this.state.squares[3]}
          </div>
          <div onClick={ this.handleClickSquare } className="square" data="4">
            {this.state.squares[4]}
          </div>
          <div onClick={ this.handleClickSquare } className="square" data="5">
            {this.state.squares[5]}
          </div>
          <div onClick={ this.handleClickSquare } className="square" data="6">
            {this.state.squares[6]}
          </div>
          <div onClick={ this.handleClickSquare } className="square" data="7">
            {this.state.squares[7]}
          </div>
          <div onClick={ this.handleClickSquare } className="square" data="8">
            {this.state.squares[8]}
          </div>
        </div>
        <div className="controle-block">
          <button onClick={ this.startOver } className="start-over">Start Over</button>
          <p>Win X: {this.state.xwin}</p>
          <p>Win O: {this.state.ywin}</p>
          <label htmlFor="exampleFormControlSelect1">Choose</label>
          <select disabled={ this.state.disable } onChange={ this.chooseHand } name="select" className="form-control" id="exampleFormControlSelect1">
            <option value="0">X</option>
            <option value="1">O</option>
          </select>
        </div>
      </div>
    );
  }
}
