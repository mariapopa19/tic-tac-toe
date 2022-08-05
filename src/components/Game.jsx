import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Table from "./Table";

const Game = () => {
    const location = useLocation();
    const {player1, player2} = location.state;

    console.log('p1(from Game): ', player1);
    console.log('p2(from Game): ', player2);

    const turn1 = true;
    const gameTurn = (turn=true) => {
        return turn ? player1 : player2;
    }


    return (
        <div className='position-absolute top-50 start-50 translate-middle'>
            <h1 className='d-flex justify-content-center fs-1'>Tic Tac Toe</h1>
            <Table />
            <label className='fs-5'>Player: {gameTurn(turn1)}</label>
        </div>
    )
}

export default Game;