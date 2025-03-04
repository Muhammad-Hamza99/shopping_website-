const click = document.querySelector(".clickination");



click.addEventListener("click",(event)=>{
    if (event.target.classList.contains("fa-cart-shopping")) {
        
        window.location.href='./sproduct.html'
    }

});


const clicked = document.querySelector(".clickinationed");

clicked.addEventListener("click",(event)=>{
    if (event.target.classList.contains("fa-cart-shopping")) {
        
        window.location.href='./sproduct.html'
    }

});