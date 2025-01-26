import { useState } from "react";

export default function Lotery(){
    let [ticket,setTicket]=useState(getn(3))
    let btn=()=>{
        setTicket(getn(3));
    }
    function getn(n){

        let arr=new Array(n);
        for(let i=0;i<n;i++){
            arr[i]=Math.floor(Math.random()*10);
        }
        return arr;
    }
    return(
        <div className="ticket">
        <h3>Lottery ticket</h3>
        
        <button onClick={btn}>get ticket</button>
        <span >{ticket[0]}{ticket[1]}{ticket[2]}</span>
        </div>
    )
}