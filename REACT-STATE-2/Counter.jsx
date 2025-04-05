import { useState , useEffect} from "react"

export default function Counter () {

    let [countx, setCountx] = useState(0)
    let [county, setCounty] = useState(0)


    let incCountx = () => {
        setCountx(currCount => countx +1) ;
    }

    let incCounty = () => {
        setCounty(currCount => county +1) ;
    }

    useEffect(function printSomething(){
        console.log("this is side effect");
    } , 
    [countx , county]  //dependacies (side effect works only in case of x) 
)

    return (
        <div>
            <h3>count = {countx}</h3>
            <button onClick={incCountx}>+1</button>
            <h3>count = {county}</h3>
            <button onClick={incCounty}>+1</button>
        </div>
    )
}