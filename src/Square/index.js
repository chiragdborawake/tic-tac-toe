import './index.css';
export default function Square({value, winPosition,handleClick}) {
    return (
        
        <button className = { winPosition ? 'win-position':'square'}   onClick={handleClick}>{value}</button>
    );
}