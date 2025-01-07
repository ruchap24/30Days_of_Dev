let btn=document.querySelector("button");
let input=document.querySelector("input");
let ul=document.querySelector("ul");

btn.addEventListener("click",function(){
    if(input.value.length>0){
        let li=document.createElement("li");
        li.appendChild(document.createTextNode(input.value));
        ul.appendChild(li);
        input.value="";
    }
});
let detbtn=document.querySelectorAll(".del");
for(let i=0;i<detbtn.length;i++){
    detbtn[i].addEventListener("click",function(){
        ul.removeChild(ul.children[i]);
    });
}
ul.addEventListener("click",function(event){
    if(event.target.nodeName=="BUTTON"){
        event.target.parentElement.remove();
        console.log("deleted");
    }
});