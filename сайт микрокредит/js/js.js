console.log('hi');
$(document).ready(function() {
  
    $("#accordion").accordion();
 
 });

 
let viewport = document.getElementById("viewport").offsetWidth;

let viewslide=0;
let slider = document.querySelector(".slider");






function press(btn){
    if (btn=='next'){
        if (viewslide < 2) {
            viewslide++;
        } else {
            viewslide = 0;
        }
       slider.style.left = -viewport * viewslide + "px";
    }
}

window.onload= function() {
    setInterval(function() {
    press('next');
  }, 3000);
}