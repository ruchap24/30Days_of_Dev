import { useState } from "react";

export default function Cat(){
    let [fact,setFact]=useState("");
    let btn=()=>{
        fetch('https://cat-fact.herokuapp.com/facts/random')
        .then()
    }
}

// export default function Cat(){
//     let [fact,setFact]=useState('loading...')
//     let btn=()=>{
//         fetch('https://cat-fact.herokuapp.com/facts/random')
//         .then(response => response.json())
//         .then(data => setFact(data.text))
//         .catch(error => console.error(error));
//     }
//     return(
//         <div>
//         <h3>Cat fact</h3>
//         <button onClick={btn}>get fact</button>
//         <p>{fact}</p>
//         </div>
//     )}


export default function Cat(){

    let [fact,setFact]=useState('loading...')

    let btn=()=>{
        fetch('https://cat-fact.herokuapp.com/facts/random')
        .then(response => response.json())
        .then(data => setFact(data.text))
        .catch(error => console.error)
    }

    return(
        <div>
            <h1> Cat Fact</h1>
            <button onClick={btn}>get fact</button>
            <p>{fact}</p>
        </div>
    )
}