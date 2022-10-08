window.addEventListener("DOMContentLoaded", function(){
    setTimeout(showAfterLoad, 1000);
  
    const POPUP = document.querySelector("#popup");
    const BODY  = document.querySelector("body");
    const CLOSE = document.querySelector("#close");
            
    function showAfterLoad() { 
        POPUP.style.display = "block";
        BODY.style.overflow = "hidden";					
        }
            
    CLOSE.addEventListener("click", function(){
        POPUP.style.display = "none";
        BODY.style.overflow = "auto";	


    })
 })
    

