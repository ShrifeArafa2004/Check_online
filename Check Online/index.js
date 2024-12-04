let h2=document.querySelector('h2');
let content=document.querySelector(".content");
let button =document.querySelector('button');
function load(){
    if(window.navigator.onLine){
        online()
    }
    else{
        offline()
    }
}
window.onload=()=>{
    load();
}
function online(){
    h2.innerHTML="Online";
    h2.style.color="green";
    content.classList.add("hide")
    button.classList.add("hide")
}
function offline(){
    h2.innerHTML="No internet";
    h2.style.color="#666";
    content.classList.remove("hide")
    button.classList.remove("hide")
}
button.onclick=()=>{
    window.onload();
}
window.addEventListener("online",
    ()=>{
        online()
    }
);
window.addEventListener("offline",
    ()=>{
        offline()
    }
);