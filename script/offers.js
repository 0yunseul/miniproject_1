window.addEventListener("DOMContentLoaded", function(){
    setTimeout(showAfterLoad, 3000);
    const POSTS = document.querySelector("#posts");
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
    const NEXT = document.querySelector(".next");
    const PREV = document.querySelector(".prev");
    let postIndex = 0;		
        
    NEXT.addEventListener("click",function(){
        postIndex++;
        if(postIndex>=3) postIndex = 0;
        let coords = -920 * postIndex;
        POSTS.style.marginLeft = coords+"px";
    })
    PREV.addEventListener("click",function(){
        postIndex--;
        if(postIndex<0 ) postIndex = 2;
        let coords = -920 * postIndex;
        POSTS.style.marginLeft = coords+"px";
    })
    
    
    
})