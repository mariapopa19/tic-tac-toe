import './App.css';
import Game from './components/Game';
import Button from 'react-bootstrap/Button';
import { useRef } from 'react';

function App() {

  const player1Input = useRef(null);
  const player2Input = useRef(null);


  const handleClick = () => {
    const player1 = player1Input.current.value;
    const player2 = player2Input.current.value;
    console.log(player1)
    console.log(player2)
    // retrun (<Game first = { player1 } second = { player2 } />);
  }

  return (
    <div className='col position-absolute top-50 start-50 translate-middle text-center d-grid gap-3'>
      <h1>Tic Tac Toe</h1>
      <div>
        <span>Plese enter player 1 name: </span>
        <input type='text' ref={player1Input} />
      </div>
      <div>
        <span>Plese enter player 2 name: </span>
        <input type='text' ref={player2Input} />
      </div>
      <div className='text-center d-flex justify-content-center'>
        <Button variant="light" size='lg' onClick={handleClick} >
          Start the game
        </Button>
      </div>
    </div>
    // <Game />
  );
}

export default App;