const modalpopup = document.getElementById('modalbox2');
const mybtn = document.getElementById('mybutton');
 const closer = document.getElementsByClassName("modalcloser2")[0];

 mybtn.onclick = function(){
    modalpopup.style.display = "block";
    
     
 }

 closer.onclick = function(){
    modalpopup.style.display = "none";
 }
 window.onclick = function(event){
    if (event.target == modalpopup){
        modalpopup.style.display = "none";
    }
 }