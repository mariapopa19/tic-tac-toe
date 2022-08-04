import React, { useState, useEffect } from 'react';
import Table from "./Table";

const Game = () => {


    return (
        <div className='position-absolute top-50 start-50 translate-middle'>
            <h1 className='d-flex justify-content-center fs-1'>Tic Tac Toe</h1>
            <Table />
            <span className='fs-5'>Player: 1</span>
        </div>
    )
}

export default Game;