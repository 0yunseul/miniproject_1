$(function(){
    window.addEventListener("DOMContentLoaded",function(){
						
        const closeBT = document.querySelector("#close");
        const openBT = document.querySelector("#open");
        const itemDIV = document.querySelector(".benefit-details");
        let BLOCK = "block";
        let NO = "none";
    
        
        openBT.addEventListener("click", function(){
            itemDIV.style.display = BLOCK;
            console.log("click");
        });
        closeBT.addEventListener("click", function(){
            itemDIV.style.display = NO;
        });


})
})