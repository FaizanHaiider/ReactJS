import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

class Board extends React.Component {
  renderSquare(i) {
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  render() {
    let cols_rows = [[], [], []];
    for(let i=0; i<3; i++) {
      for(let ii=0; ii<3; ii++) {
        cols_rows[i].push(this.renderSquare((i*3) + ii));
      }
    }
    return (
      <div>
        <div className="board-row">
          {cols_rows[0]}
        </div>
        <div className="board-row">
          {cols_rows[1]}
        </div>
        <div className="board-row">
          {cols_rows[2]}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      boardHistory: [
        {
          squares: Array(9).fill(null)
        }
      ],
      locationHistory: [],
      stepNumber: 0,
      xIsNext: true
    };
  }

  handleClick(i) {
    const boardHistory = this.state.boardHistory.slice(0, this.state.stepNumber + 1);
    const locationHistory = this.state.locationHistory.slice();
    const current = boardHistory[boardHistory.length - 1];
    const squares = current.squares.slice();

    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? "X" : "O";
    locationHistory[this.state.stepNumber+1] = i;
    this.setState({
      boardHistory: boardHistory.concat([
        {
          squares: squares
        }
      ]),
      locationHistory: locationHistory,
      stepNumber: boardHistory.length,
      xIsNext: !this.state.xIsNext
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0
    });
  }

  render() {
    const boardHistory = this.state.boardHistory;
    const locationHistory = this.state.locationHistory;
    const current = boardHistory[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    const moves = boardHistory.map((step, move) => {
      let row = parseInt((locationHistory[move]) / 3);
      let col = parseInt((locationHistory[move]) % 3);  
      let row_col_str = ' ('+row+', '+col+')';
      const desc = move ?
        'Go to move #' + move + row_col_str:
        'Go to game start (row, col)';
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });

    let status;
    if (winner) {
      status = "Winner: " + winner;
    } else {
      status = "Next player: " + (this.state.xIsNext ? "X" : "O");
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={i => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(<Game />, document.getElementById("root"));

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
