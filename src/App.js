import './App.css';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';

function App() {

  // const player1Input = useRef(null);
  // const player2Input = useRef(null);

  const [player1Input, setPlayer1Input] = useState('');
  const [player2Input, setPlayer2Input] = useState('');

  const navigate = useNavigate();


  const handleClick = () => {
    console.log(player1Input);
    console.log(player2Input);
    navigate('/game', {state: {player1: player1Input, player2: player2Input}});
  }

  return (
    <div className='col position-absolute top-50 start-50 translate-middle text-center d-grid gap-3'>
      <h1>Tic Tac Toe</h1>
      <div>
        <label className='m-2'>Plese enter player 1 name: </label>
        <input type='text' placeholder='Your nickname...' onChange={e => setPlayer1Input(e.target.value)} />
      </div>
      <div>
        <label className='m-2'>Plese enter player 2 name: </label>
        <input type='text' placeholder='Your nickname...' onChange={e => setPlayer2Input(e.target.value)} />
      </div>
      <div className='text-center d-flex justify-content-center'>
        <Button variant="light" size='lg' onClick={handleClick} >
          Start the game
        </Button>
      </div>
    </div>
  );
}

export default App;