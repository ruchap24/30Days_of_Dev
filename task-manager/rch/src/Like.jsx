 import { useState } from "react";
export default function Like(){
     let [n,setCount]=useState(false);
     let sty={color:"red"}
    let cnt= ()=>{
        setCount(!n);
    }
    return(
        <>
        <div onClick={cnt}>Like
            <p>
            {n?(<i className="fa fa-heart" aria-hidden="true" style={sty} ></i>):(<i className="fa-regular fa-heart" style={sty}></i>)}
            </p>
        </div>
        </>
    );
}