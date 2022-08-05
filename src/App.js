import './App.css';
import Game from './components/Game';
import Button from 'react-bootstrap/Button';
import { useRef } from 'react';
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";

function App() {

  const player1Input = useRef(null);
  const player2Input = useRef(null);

  const navigate = useNavigate();


  const handleClick = () => {
    const player1 = player1Input.current.value;
    const player2 = player2Input.current.value;
    console.log(player1)
    console.log(player2)
    navigate('/game');
    // retrun (<Game first = { player1 } second = { player2 } />);
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <div className='col position-absolute top-50 start-50 translate-middle text-center d-grid gap-3'>
            <h1>Tic Tac Toe</h1>
            <div>
              <label className='m-2'>Plese enter player 1 name: </label>
              <input type='text' ref={player1Input} />
            </div>
            <div>
              <label className='m-2'>Plese enter player 2 name: </label>
              <input type='text' ref={player2Input} />
            </div>
            <div className='text-center d-flex justify-content-center'>
              <Button variant="light" size='lg' onClick={handleClick} >
                Start the game
              </Button>
            </div>
          </div>
        } />
        <Route path='/game' element={<Game first={player1Input.current.value} second={player2Input.current.value}/>} />

        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  );
  // <Game />
}

export default App;