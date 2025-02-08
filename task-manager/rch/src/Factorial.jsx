import { useMemo } from 'react';
import { useState } from 'react';

export default function Factorial() {
    let [input, setInput] = useState(0);
    // let [fact, setFact] = useState(1);

    const btn = useMemo(() => {
        let fact = 1;
        for (let i = 1; i <= input; i++) {
            fact = fact * i;
        }
        return fact;
    },[input])

    return (
        <div>
            <input type="number" onChange={(e) => setInput(Number(e.target.value))} />
            <button onClick={btn}>Get Factorial</button>
            <p>{btn}</p>
        </div>
    );
}