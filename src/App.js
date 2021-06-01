import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      count: 0,
    };
    this.winnerLine = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
  }

  playStyle = {
    height: "150px",
    width: "150px",
    border: "2px solid black",
    margin: "50px auto",
  };

  blockStyle = {
    height: "50px",
    width: "50px",
    border: "1px solid black",
    float: "left",
    boxSizing: `border-box`,
    textAlign: "center",
    paddingTop: "10px",
    fontSize: "20px",
  };

  isWinner = () => {
    let s = this.state.count % 2 === 0 ? "X" : "O";
    for (let i = 0; i < this.winnerLine.length; i++) {
      let line = this.winnerLine[i];

      if (
        this.state.squares[line[0]] === s &&
        this.state.squares[line[1]] === s &&
        this.state.squares[line[2]] === s
      ) {
        alert(s + " win");
        setTimeout(() => {
          this.setState({ squares: Array(9).fill(null) });
          this.setState({ count: 0 });
        }, 2000);
      }
    }
    if (this.state.count >= 8 && this.state.squares !== null) {
      alert("Nobody wins");
      setTimeout(() => {
        this.setState({ squares: Array(9).fill(null) });
        this.setState({ count: 0 });
      }, 2000);
    }
  };

  clickHendler = (event) => {
    let data = event.target.getAttribute("data");
    let currentSquares = this.state.squares;

    if (currentSquares[data] === null) {
      currentSquares[data] = this.state.count % 2 === 0 ? "X" : "O";
      this.setState({ count: this.state.count + 1 });
      this.setState({ squares: currentSquares });
    }
    this.isWinner();
  };

  render() {
    const { squares } = this.state;
    return (
      <div style={this.playStyle}>
        {squares.map((square, index) => {
          return (
            <div
              style={this.blockStyle}
              onClick={this.clickHendler}
              data={index}
              key={index}
            >
              {square}
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
