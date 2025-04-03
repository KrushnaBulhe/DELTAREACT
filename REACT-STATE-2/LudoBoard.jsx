
import { useState } from "react"

export default function LudoBoard () {

    let [moves , setMoves] = useState({blue:0 , red:0 , yellow:0 , green:0});

    let UpdateBlue = () => {
        setMoves( (prevMoves) => {
           return {...prevMoves , blue:prevMoves.blue+1} ;
        }) ;
    }

    let UpdateYello = () => {
        setMoves( (prevMoves) => {
           return {...prevMoves , yellow:prevMoves.yellow+1} ;
        }) ;
    }

    let UpdateGreen = () => {
        setMoves( (prevMoves) => {
           return {...prevMoves , green:prevMoves.green+1} ;
        }) ;
    }

    let UpdateRed = () => {
        setMoves( (prevMoves) => {
           return {...prevMoves , red:prevMoves.red+1} ;
        }) ;
    }

    return (
        <div>
            <p>Game begins</p>
            <div className="board">
                <p>blue moves={moves.blue}</p>
                <button style={{backgroundColor:"blue"}} onClick={UpdateBlue}>+1</button>
                <p>yellow moves={moves.yellow}</p>
                <button style={{backgroundColor:"yellow" , color:"black"}} onClick={UpdateYello}>+1</button>
                <p>green moves={moves.green}</p>
                <button style={{backgroundColor:"green"}} onClick={UpdateGreen}>+1</button>
                <p>red moves={moves.red}</p>
                <button style={{backgroundColor:"red"}} onClick={UpdateRed}>+1</button>
            </div>
        </div>
    )
}