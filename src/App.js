import React,{useState} from 'react';
import "./index.css"
export default function App() {
  const[squares,setSquares] = useState(Array(9).fill(null));
  const[next,setnext] = useState(true);
  const[winner,setwinner] = useState(null);

  // TODO: handles the buttons "X" or "O"
  const handleClick = (index) =>{
        if(squares[index]) return;
        const newSquares = squares.slice();
        newSquares[index] = next?"X":"O";
        setSquares(newSquares);
        setnext(!next);
        checkWinner(newSquares);
        if(!winner && squares[index]){
          alert("No winner is Found Reset the Game")
        }
  }

//  TODO: Clears the Input 
  const ResetGame = () =>{
    setSquares(Array(9).fill(null));
    setnext(true);
    setwinner(null);
  }

  const checkWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let line of lines) {
      const [a, b, c] = line;
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        setwinner(squares[a]);
        return;
      }
    }
    // TODO: // Check for draw
    if (!squares.includes(null)) {
      setwinner("Draw");
    }
  };


  return (
    <div className="App">
        <h1 className="heading">Tic Tac Toe</h1>
        {winner && alert(winner==="Draw"?"Its a Draw":`Winner is ${winner}`)}
       <div className="buttons">
          {
            squares.map((square,index)=>{
              return(
                <>
                  <button onClick={()=>handleClick(index)} key={index}>{square}</button>
                </>
              )
            })
          }
       </div>
            <div><button onClick={ResetGame} className="Reset">New Game</button></div>
    </div>
  );
}