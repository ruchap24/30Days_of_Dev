let h2=document.querySelector("h2");

function chan(color,delay,nextc){
    setTimeout(()=> {
        h2.style.color=color;
        if(nextc) nextc();
    },delay);
}

chan("red",1000, ()=>{
    chan("orange",1000,()=>{
        chan("blue",1000,()=>{
            chan("pink",1000, ()=>{
                chan("yellow",1000);
            });
        });
    });
});