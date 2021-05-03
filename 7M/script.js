const spays = document.getElementById("spays");
const house = document.getElementById("house");

document.addEventListener("keydown", function(event){
    jamp();
}); 
function jamp(){
    if (spays.classList !="jamp"){
        spays.classList.add("jamp")
    }
    setTimeout( function(){
        spays.classList.remove("jamp")

    },200)
}
let isAlive = setInterval(function () {
 let spaysTop= parseInt(window.getComputedStyle(spays).getPropertyValue("top"))    
 let houseleft= parseInt(window.getComputedStyle(house).getPropertyValue("left"))    
if (houseleft < 50 && houseleft > 0 && spaysTop >= 140) {
    alert ("Game over")
}
}, 10) 