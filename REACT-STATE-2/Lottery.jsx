
import { useState} from "react"
import {genTicket , sum} from "./helper";
import Ticket from "./Ticket";

export default function Lottery({n=3, winCondition}){

    let [ticket , setTicket] = useState(genTicket(n));

    let isWinning = winCondition(ticket) ;

    let BuyTicket = () => {
        setTicket(genTicket(n));
    }

    return(
        <div>
            <h1>Lottery Game!</h1>
            <Ticket ticket={ticket}/>
            <button onClick={BuyTicket}>Generate Ticket</button>
            <h3>{isWinning && "congratulations , You won !"}</h3>
        </div>
    )
}