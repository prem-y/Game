import { useState } from "react";
import './app.css'

function Square({value, onSquareClick}){
  return(
    <>
      <button className="rowBox" onClick={onSquareClick}>{value}</button>
    </>
  )
}

function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsnext, setXisnext] = useState(true);
  function handleClick(i){
    if (squares[i] || calculateWinner(squares)){
      return;
    }
    const nextSquares = squares.slice();
    if(xIsnext){
      nextSquares[i] = "X";
    }
    else{
      nextSquares[i] = "O";
    }
    setSquares(nextSquares);
    setXisnext(!xIsnext);
  }

  

  let status;
  let winner = calculateWinner(squares);
  if(winner){
    status = 'Winner is '+ winner;
  }
  else{
    status = "Turn is " + (xIsnext ? 'X' : 'O');
  }

  return (  
    <>
      <div className="title">Tic Tac Toe</div>
      <div className="gameArea">
      <div className="status">{status}</div>
      <div className="row">
      <Square value={squares[0]} onSquareClick = {() => handleClick(0)}/>
      <Square value={squares[1]} onSquareClick = {() => handleClick(1)}/>
      <Square value={squares[2]} onSquareClick = {() => handleClick(2)}/>
      </div>
      <div className="row">
      <Square value={squares[3]} onSquareClick = {() => handleClick(3)}/>
      <Square value={squares[4]} onSquareClick = {() => handleClick(4)}/>
      <Square value={squares[5]} onSquareClick = {() => handleClick(5)}/>

      </div>
      <div className="row">
      <Square value={squares[6]} onSquareClick = {() => handleClick(6)}/>
      <Square value={squares[7]} onSquareClick = {() => handleClick(7)}/>
      <Square value={squares[8]} onSquareClick = {() => handleClick(8)}/>
      </div>
      </div>

    </>
  );
}

function calculateWinner(squares){
  const lines = [
    //Horizontal win check
    [0,1,2],
    [3,4,5],
    [6,7,8],

    //Verticle win check
    [0,3,6],
    [1,4,7],
    [2,5,8],

    //Diagonal win check
    [0,4,8],
    [2,4,6]
  ]

  for(let i = 0; i<lines.length; i++){
    const [a,b,c] = lines[i];
    if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
      console.log(squares[a]);
      return squares[a];
    }
  }
  return null;
}

export default App;
