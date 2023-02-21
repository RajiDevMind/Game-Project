// Variables for users input and random numbers
let x;
let y;
let z;

let xinput;
let yinput;
let zinput;


document.getElementById("mybtn").onclick = function(){
"use strict"
// randomize number for varible x,y,z between 1 to 6
  x = Math.floor(Math.random() * 6) + 1;
  y = Math.floor(Math.random() * 6) + 1;
  z = Math.floor(Math.random() * 6) + 1;

  // getting numbers from users input
  document.getElementById("xinput").value;
  document.getElementById("yinput").value;
  document.getElementById("zinput").value;

  document.getElementById("xlabel").innerHTML = x;
  document.getElementById("ylabel").innerHTML = y;
  document.getElementById("zlabel").innerHTML = z;
  
 // if statement to determine win/lose
  if(xinput == x && yinput == y && zinput == z){
    alert("Congratulations! You Won by triple.")
  }
  else if(xinput == x && yinput == y){
    alert("You won!");
  }
  else if(xinput == x && zinput == z){
    alert("You won!!");
  }
  else if(xinput == y && zinput == z){
    alert("You Won!!!");
  }
  else{
    alert("You LOSE!!!");
  }

};

/*
const welc_page = document.querySelector("welc_page")
welc_page.addEventListener("mouseover", welc_page);

function welc_page(){
    document.style.backgroundColor = "red";
    welc_page.style.transition = "3s";
    welc_page.style.animation =  "10s linear 0s infinite running sliding";
    welc_page.style.animation = "@keyframes sliding{from{margin-left: 100%;} to{margin-right: 0%;}"
    
}
*/