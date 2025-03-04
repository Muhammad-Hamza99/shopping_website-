const hamburger = document.querySelector(".hamburger");
const show = document.querySelector(".dis");
const cancel = document.querySelector(".cancel");




hamburger.addEventListener("click",(event)=>{
    if(event.target.classList.contains("fa-bars")){
        show.style.right=0;
    }
   return;
    
});

cancel.addEventListener("click",()=>{
    show.style.right=`${-300}px`;
});

