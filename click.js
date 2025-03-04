let more = document.querySelector(".more");
let less = document.querySelector(".less");


more.addEventListener("click",(event)=>{
    let get = event.target.src;
    let swap = less.src;
    less.src=get;
    event.target.src=swap;
  
});