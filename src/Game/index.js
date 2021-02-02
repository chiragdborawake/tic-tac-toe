import React from 'react'
import Board from '../Board';
import './index.css';
export default function Game(){
    return(
       <div className ='game'>
           <div className='game-board'>
               <Board/>
           </div>
       </div>
    );
}