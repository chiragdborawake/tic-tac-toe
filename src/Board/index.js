import { useState, useEffect } from 'react';
import './index.css';
import Square from '../Square';
export default function Board() {

    const x = useState(Array(9).fill(null));
    const squares = x[0];
    const setSquares = x[1];

    const [xIsNext, setXIsNext] = useState(true);
    const [winPosition, setWinPosition] = useState(Array(9).fill(false));
    function handleClick(i) {
        const newSquares = [...squares];
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        newSquares[i] = xIsNext ? 'X' : '0';
        setSquares(newSquares);
        setXIsNext(!xIsNext);
    }
    useEffect(() => {
        if (calculateWinner(squares) || squares[i]) {
            const coordinate = getCoordinate(squares);
            const newCoordinate = Array(9).fill(false);
            for (var i = 0; i < 3; i++) {
                newCoordinate[coordinate[i]] = true;
            }
            setWinPosition(newCoordinate);
        }

    }, squares)


    function renderSquare(i, winPosition) {
        return <Square value={squares[i]} winPosition={winPosition} handleClick={() => { handleClick(i) }} />;
    }
    var draw = true;
    for (var i = 0; i < squares.length; i++) {
        if (squares[i] === null) {
            draw = false;
        }
    }
    const winner = calculateWinner(squares);
    let status;
    if (winner) {
        status = 'Winner: ' + winner;
    }
    else if (draw) {
        status = 'Game Draw';
    }
    else {
        status = 'Next player: ' + (xIsNext ? 'X' : 'O');
    }

    return (
        <div className='board'>
            <div className='status'>
                {status}
            </div>
            <div className='board-row'>
                {renderSquare(0, winPosition[0])}
                {renderSquare(1, winPosition[1])}
                {renderSquare(2, winPosition[2])}
            </div>

            <div className='board-row'>
                {renderSquare(3, winPosition[3])}
                {renderSquare(4, winPosition[4])}
                {renderSquare(5, winPosition[5])}
            </div>

            <div className='board-row'>
                {renderSquare(6, winPosition[6])}
                {renderSquare(7, winPosition[7])}
                {renderSquare(8, winPosition[8])}
            </div>
            {(winner || draw) && (
                <div><button className='reset' onClick={() => {
                    setSquares(Array(9).fill(null));
                    setWinPosition(Array(9).fill(false));
                }
                }>Reset</button></div>)
            }
        </div>
    );
    function calculateWinner(squares) {
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
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    }
    function getCoordinate(squares) {
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
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return [a, b, c];
            }
        }
    }
}