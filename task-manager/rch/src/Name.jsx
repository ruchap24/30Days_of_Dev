import { useState } from "react";


export default function Name(){
    let [title, setTitle]=useState("rucha");
    function updatem(){
        setTitle("heyy"+Math.random());
    }
    function Header({title}){
        return <div>
        {title}
        </div>
    }
    return(<>
    <button onClick={updatem}>click me</button>
    <Header title="ramm"></Header>
    <Header title={title}></Header>
    {/* <header title="raj"></header>   */}
    </>)
}