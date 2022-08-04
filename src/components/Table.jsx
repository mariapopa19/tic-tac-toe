import React from 'react';
// import './Table.css';
import Square from './Square';

const Table = () => {
    return (
        <div className=''>
            <div className='col d-flex justify-content-center'>
                <Square />
                <Square />
                <Square />
            </div>
            <div className='col d-flex justify-content-center'>
                <Square />
                <Square />
                <Square />
            </div>
            <div className='col d-flex justify-content-center'>
                <Square />
                <Square />
                <Square />
            </div>
        </div>
    );
}

export default Table;