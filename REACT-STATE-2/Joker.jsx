

import { useState , useEffect } from "react"

export default function Joker (){

    

    const URL = "https://official-joke-api.appspot.com/random_joke" ;
                 
    const newJoke = async () => {
        let response = await fetch(URL) ;
        let jsonResponse = await response.json();
        console.log(jsonResponse);
        setJoke({setup:jsonResponse.setup , punchline:jsonResponse.punchline})
    }


    useEffect( () => {async function firstJoke(){
        let response = await fetch(URL) ;
        let jsonResponse = await response.json();
        console.log(jsonResponse);
        setJoke({setup:jsonResponse.setup , punchline:jsonResponse.punchline})
    }
    firstJoke();
} , [ ]
)


    let [joke , setJoke] = useState({}) ;


    return (
        <div>
            <h3>Joker!</h3>
            <h2>{joke.setup}</h2>
            <h2>{joke.punchline}</h2>
            <button onClick={newJoke}>new joke</button>
        </div>
    )
}